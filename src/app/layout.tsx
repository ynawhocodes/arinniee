"use server";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getSiteSetting } from "@sanity/api/siteSetting";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = async () => {
  const siteSetting = await getSiteSetting();
  return {
    title: siteSetting?.title || "Arinniee",
    description: siteSetting?.seo?.description,
    images: siteSetting?.seo?.ogImage,
    keywords: siteSetting?.seo?.keywords,
  };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
