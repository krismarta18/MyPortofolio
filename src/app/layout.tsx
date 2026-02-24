import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kristianto Marta Widada — Portfolio",
    template: "%s — Kristianto Marta Widada",
  },
  description: "Backend developer (.NET) portfolio: projects, skills, and contact.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Kristianto Marta Widada — Portfolio",
    description: "Backend developer (.NET) portfolio: projects, skills, and contact.",
    siteName: "Kristianto Marta Widada",
    locale: "id_ID",
  },
  twitter: {
    card: "summary",
    title: "Kristianto Marta Widada — Portfolio",
    description: "Backend developer (.NET) portfolio: projects, skills, and contact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
        >
          {`(function(){
  try {
    // Default is LIGHT. Only enable dark if user explicitly chose it before.
    var stored = localStorage.getItem('theme');
    var theme = stored === 'dark' ? 'dark' : 'light';
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {}
})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
