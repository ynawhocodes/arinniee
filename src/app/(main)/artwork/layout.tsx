import { Metadata } from "next";

export const metadata: Metadata = {
  title: "아트워크",
  description: "아트워크",
};

export default function ArtworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
