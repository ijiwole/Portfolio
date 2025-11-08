import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adedamola Ijiwole — Backend Engineer",
  description:
    "Backend Engineer building scalable systems with Node.js, TypeScript, and cloud-native architectures.",
  // Ensure browsers, OS UI chrome, and PWA display use dark theme
  themeColor: "#0a0a0a",
  openGraph: {
    title: "Adedamola Ijiwole — Backend Engineer",
    description:
      "Projects, experience, and writings on backend architecture, performance and cloud.",
    siteName: "Adedamola Ijiwole Portfolio",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "Adedamola Ijiwole Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} subpixel-antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
