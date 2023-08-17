import "../styles/globals.css";
import { Metadata } from "next";
// include styles from the ui package
import "ui/styles.css";
export const metadata: Metadata = {
  title: "arinniee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
