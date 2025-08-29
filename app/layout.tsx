import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ainews.app'),
  title: "AI Short News - Intelligent News Summaries",
  description: "Get bite-sized, AI-generated summaries of the latest AI and tech news. Smart categorization with custom visuals designed for busy professionals.",
  keywords: "AI news summaries, news summarization app, AI-generated images, tech news app, artificial intelligence news, smart categorization",
  icons: {
    icon: "/ai-news-logo-cropped.png",
    apple: "/ai-news-logo-cropped.png",
    shortcut: "/ai-news-logo-cropped.png",
  },
  openGraph: {
    title: "AI Short News - Intelligent News Summaries & AI-Generated Visuals",
    description: "AI-powered news summaries with custom generated visuals and smart categorization perfect for busy professionals",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/ai-news-logo-cropped.png",
        width: 512,
        height: 512,
        alt: "AI Short News Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Short News - Intelligent News Summaries",
    description: "AI-powered news summaries with custom generated visuals for faster, smarter news consumption",
    images: ["/ai-news-logo-cropped.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
