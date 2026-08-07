Caching sounds like one of the safest improvements you can make to an application.

Store frequently requested data somewhere faster. Reduce repeated database queries. Lower response times.

What could go wrong?

> **If your database remains healthy only because the cache absorbs most of its traffic, is the cache still just an optimization?**

Imagine a simplified application receiving 10,000 read requests every second. Its cache handles 95% of them, so the database receives only 500. Everything appears healthy until the cache becomes unavailable and the database suddenly receives all 10,000.

The cache did not directly crash the database. It revealed that the application had quietly become dependent on it.

That is the cache paradox.

While learning about caching, I initially thought this risk sounded avoidable: shouldn’t the database already be capable of handling the application’s requests?

That objection turned out to be the most interesting part of the topic. A cache is harmless when the system can survive without it. The real danger begins when the architecture quietly starts depending on the traffic reduction the cache provides.

## Why caching works

Without caching, every read can create database work:

```text
Client ──> Application ──> Database
```

A cache adds a faster temporary storage layer:

```text
Client ──> Application ──> Cache
                              │ miss
                              └────> Database
```

When the value is present, the application returns it without querying the database. When it is missing, the application loads it from the database, stores a temporary copy, and returns the result. This is the **cache-aside pattern**.

The benefits are real: lower latency, fewer repeated queries, reduced database usage, and more read capacity. The risk appears when the rest of the architecture begins assuming the cache will always be healthy.

## When an optimization becomes a dependency

Consider two systems.

### System A: The cache is optional

```text
Total traffic:       10,000 requests/second
Database capacity:   15,000 requests/second
```

The cache improves performance, but the database can still handle the complete workload. If the cache fails, the application becomes slower and more expensive, but it survives.

### System B: The database depends on the cache

```text
Total traffic:       10,000 requests/second
Cache hit rate:      95%
Normal DB traffic:      500 requests/second
Database capacity:    2,000 requests/second
```

Under normal conditions, this system also appears healthy. Without the cache, the database receives five times the traffic it can safely process. The cache is now controlling whether the database remains within capacity.

That architecture is not automatically bad. Provisioning for the complete uncached workload may be expensive. The danger is leaving the dependency hidden or untested.

> **A cache may not contain the source of truth, but it can still become essential to keeping the source of truth alive.**

## One cache miss is harmless

A normal miss performs one query, stores the value, and continues:

```text
Cache miss
    ↓
Database query
    ↓
Cache populated
    ↓
Response returned
```

The dangerous case begins when many requests discover the same missing value before the first query completes.

```text
Request A ─┐
Request B ─┼──> same missing key ──> repeated database work
Request C ─┤
Request D ─┘
```

Every request sees an empty cache and repeats the same work. This is a **cache stampede**, also called a **thundering herd**. A cache normally removes duplicate work; a stampede concentrates it into a short burst.

## How the failure spreads

Under heavy traffic, that burst can start a feedback loop:

```text
Popular key expires
        ↓
Concurrent cache misses
        ↓
Repeated database queries
        ↓
Database latency rises
        ↓
Requests stay active longer
        ↓
Timeouts and retries begin
        ↓
Even more database work
```

Slower requests occupy connections for longer. Queues grow, callers retry, and the system processes both the original work and the retries caused by the slowdown. The cache did not attack the database. It exposed the database to a workload it was not prepared to absorb all at once.

## The fallback trap

A common failure strategy looks sensible:

```text
Try the cache.

If the cache is unavailable:
    Query the database.
```

But a fallback works only when its destination can handle everyone arriving together.

```text
Normal database traffic:        500 requests/second
Traffic after cache failure: 10,000 requests/second
```

The logic works exactly as written. Every request switches to the database, and that becomes the problem.

> **Fallback is not resilience when every request falls back simultaneously.**

The uncached path is a capacity decision, not merely an error-handling branch. The database must be evaluated against peak traffic, retries, expensive queries, maintenance periods, and the duration of the incident.

## A cache can also be fast and wrong

A cache can remain available while returning stale information:

```text
Database inventory:  0
Cached inventory:   12
```

The response is fast. It is also wrong.

```text
Cache unavailable ──> availability problem
Cache outdated    ──> correctness problem
```

A stale article description may be harmless. Stale inventory, permissions, or account information may not be. This makes expiration a product decision as much as a technical one. Longer lifetimes improve hit rates but increase staleness; shorter lifetimes improve freshness but create more database traffic.

The useful constraint is not a universal TTL. It is how stale a specific value can safely become.

## How engineers prevent the paradox

The solution is not to stop using caches. It is to design for expiration, slow responses, and complete cache failure.

### 1. Let one request regenerate the value

When requests miss the same key, one should query the database while the others wait briefly or receive a stale value.

```text
Request A ──> query database ──> refresh cache
Request B ──> wait ────────────> reuse result
Request C ──> wait ────────────> reuse result
Request D ──> wait ────────────> reuse result
```

This turns `100 misses → 100 queries` into `100 misses → 1 query`. The pattern is called **request coalescing**, **single-flight execution**, or **stampede protection**.

**Conceptual pseudocode**

```javascript
return singleFlight.run(cacheKey, async () => {
  const cachedValue = await cache.get(cacheKey);

  if (cachedValue !== null) {
    return cachedValue;
  }

  const freshValue = await database.load(recordId);
  await cache.set(cacheKey, freshValue, randomizedTTL);

  return freshValue;
});
```

The coordination mechanism must work across every application instance capable of regenerating the same key. A lock that exists only inside one process will not prevent another server from issuing the same database query.

### 2. Avoid synchronized expiration

Entries created together can also expire together. Adding random variation, called **jitter**, spreads misses across time. For a base TTL of 300 seconds, a service might choose a value between 270 and 330 seconds.

### 3. Serve stale data while refreshing

When temporary staleness is acceptable, return a recently expired value while one request refreshes it. This **stale-while-revalidate** policy must reflect the data: authorization decisions and product descriptions have very different freshness requirements.

### 4. Limit fallback traffic

Sending unlimited traffic to the database may be the worst response to a cache failure. A system may need to:

- rate-limit fallback requests
- limit database connections
- reject non-essential work
- temporarily serve stale data
- shed load before every layer collapses

A controlled partial failure is safer than a cascade that takes down writes, authentication, and recovery jobs.

### 5. Test without the cache

A warm-cache test demonstrates only the best case. Engineers should test:

- an empty cache
- expiration of the hottest key
- slow or unavailable cache responses
- database behaviour under uncached traffic
- retry behaviour during database slowdown

I am still early in my engineering career, so I am not presenting this as a production postmortem. What made the topic useful to me was learning to treat supporting services as real dependencies rather than harmless implementation details.

The practical design question is simple: what happens to the rest of the system when that dependency becomes slow, unavailable, or overloaded?

---

## The real cache paradox

Caching becomes dangerous when the architecture quietly depends on the speed it provides. If the database can handle the complete workload, losing the cache should mainly cause slower responses and higher resource usage.

If it can handle only the small percentage that normally misses, the cache is part of capacity planning, traffic control, and the system’s reliability boundary.

A reliable caching strategy is not one that performs perfectly while the cache is warm. It is one that can fail without taking the database down with it.

## Sources and further reading

- [AWS Builders’ Library: Caching Challenges and Strategies](https://aws.amazon.com/builders-library/caching-challenges-and-strategies/)
- [Microsoft Azure Architecture Center: Cache-Aside Pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside)
- [Redis documentation: Cache-Aside](https://redis.io/docs/latest/develop/use-cases/cache-aside/)
- [Redis: How to Tame the Thundering Herd Problem](https://redis.io/blog/how-to-tame-the-thundering-herd-problem/)
