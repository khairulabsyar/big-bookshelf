import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { cn } from "@/lib/utils";
import { grotesk } from "@/styles/fonts";
export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <main
          className={cn(
            "bg-mainBackground min-h-screen px-5 text-black",
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
