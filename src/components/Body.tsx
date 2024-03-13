import { UseMWatchlist, UseMoviesImage } from "@/lib/queries";
import { cn } from "@/lib/utils";
import React from "react";

export default function Body() {
  const { data: watchlist } = UseMWatchlist();
  const poster = watchlist?.results.map((result) => result.poster_path) || null;
  console.log(poster);
  const { data: images } = UseMoviesImage(poster || []);

  // console.log(watchlist);
  return (
    <div className={cn("mt-10 min-h-screen bg-backgroundBlack px-11 pt-7")}>
      <h4 className="text-h4 text-white">BESTSELLERS</h4>
      <div className={cn("mt-5 grid grid-cols-3 justify-items-center gap-4")}>
        <div className={cn("h-52 w-96 rounded-3xl bg-white")}></div>
        <div className={cn("h-52 w-96 rounded-3xl bg-white")}></div>
        <div className={cn("h-52 w-96 rounded-3xl bg-white")}></div>
        <div className={cn("h-52 w-96 rounded-3xl bg-white")}></div>
        <div className={cn("h-52 w-96 rounded-3xl bg-white")}></div>
        <div className={cn("h-52 w-96 rounded-3xl bg-white")}></div>
        <div className={cn("h-52 w-96 rounded-3xl bg-white")}></div>
        <div className={cn("h-52 w-96 rounded-3xl bg-white")}></div>
        <div className={cn("h-52 w-96 rounded-3xl bg-white")}></div>
      </div>
    </div>
  );
}
