import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compcard",
  description: "Compcard",
};

export default function CompcardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
