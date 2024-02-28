import { UseMWatchlist } from "@/lib/queries";
import { cn } from "@/lib/utils";
import React from "react";

export default function Body() {
  const { data } = UseMWatchlist();
  console.log(data);
  return <div className={cn("min-h-screen bg-backgroundBlack")}>Body</div>;
}
