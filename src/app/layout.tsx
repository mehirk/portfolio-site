import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const display = Lora({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mehirk.dev"),
  title: "Mehir Kumar | Analytics Engineer & Full-Stack Developer",
  description:
    "Analytics engineer and full-stack developer building reliable products, secure infrastructure, and data systems.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mehir Kumar | Analytics Engineer & Full-Stack Developer",
    description: "I turn complicated systems into clear, reliable products.",
    url: "https://mehirk.dev",
    siteName: "Mehir Kumar",
    type: "website",
  },
  twitter: { card: "summary", title: "Mehir Kumar", description: "Analytics engineer and full-stack developer." },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
