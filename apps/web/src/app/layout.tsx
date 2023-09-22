import "../styles/globals.css";
import { Metadata } from "next";
// include styles from the ui package
import "ui/styles.css";
import Header from "./(components)/common/Header";

export const metadata: Metadata = {
  title: "arinniee",
  description: "arinniee's website",
  generator: "arinniee",
  applicationName: "arinniee",
  referrer: "origin-when-cross-origin",
  keywords: ["arinniee"],
  authors: [
    { name: "arinniee" },
    { name: "Developer", url: "https://arinniee.com" },
  ],
  // colorScheme: 'dark',
  creator: "arinniee",
  publisher: "arinniee",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://arinniee.com"),
  openGraph: {
    title: "arinniee",
    description: "@arinniee",
    url: "https://arinniee.com",
    siteName: "arinniee's website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 600,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png',
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: "ko_KO",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/icon.png",
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
