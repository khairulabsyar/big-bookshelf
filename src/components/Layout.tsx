import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { cn } from "@/lib/utils";
import { grotesk } from "@/styles/fonts";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main
          className={cn(
            "relative flex flex-col items-center bg-mainBackground text-black antialiased *:max-w-[1920px] ",
            grotesk.className,
          )}
        >
          <Navbar />
          {children}
          <Footer />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
