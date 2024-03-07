import { UseMWatchlist } from "@/lib/queries";
import { cn } from "@/lib/utils";
import React from "react";

export default function Body() {
  const { data: watchlist } = UseMWatchlist();

  return (
    <div className={cn("min-h-screen bg-backgroundBlack")}>
      {watchlist?.results.map((movie, index) => (
        <p key={index}>{movie.title}</p>
      ))}
    </div>
  );
}
