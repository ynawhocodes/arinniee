import QueryProvider from "./QueryProvider";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/common/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QueryProvider>
        <Header />
        {children}
      </QueryProvider>
      <Toaster
        position="bottom-right"
        offset={{ bottom: "20px", right: "16px", left: "16px" }}
        toastOptions={{
          unstyled: true,
          classNames: {
            // Default
            toast:
              "bg-primary-800 rounded-md p-4 border border-primary-600 flex items-center gap-2 w-full",
            title: "text-primary-200",
            description: "text-primary-200",
            actionButton: "bg-primary-600",
            cancelButton: "bg-primary-600",
            closeButton: "bg-primary-600",
            // Status
            error: "text-red-500",
            // success: 'text-green-400',
            // warning: 'text-yellow-400',
            // info: 'bg-blue-400',
          },
        }}
      />
      <Analytics />
    </>
  );
}
