import type { Movie } from "@/lib/definitions";
import { UseTrendingMovies } from "@/lib/queries";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const PUBLIC_API_IMAGE_PATH = process.env["NEXT_PUBLIC_API_IMAGE_PATH"];

export default function Body() {
  // const { data: watchlist } = UseWatchlist();
  const { data: trendingMovies } = UseTrendingMovies("week");
  // const poster = watchlist?.results.map((result) => result.poster_path) || null;

  const topTen: Movie[] = Array.isArray(trendingMovies?.results)
    ? trendingMovies.results.slice(0, 11)
    : [];
  console.log(topTen);
  return (
    <div className={cn("mt-10 min-h-screen bg-backgroundBlack px-11 pt-7")}>
      <h4 className="text-h4 text-white">TRENDING</h4>
      <div className={cn("mt-5 grid grid-cols-3 justify-items-center gap-4")}>
        {topTen?.map((movie, index) => (
          <div
            className={cn(
              "flex-end relative flex h-52 w-96 rounded-3xl bg-white",
            )}
            key={index}
          >
            <Image
              src={`${PUBLIC_API_IMAGE_PATH}${movie.poster_path}`}
              alt={movie.title}
              fill={true}
              objectFit="contain"
            />
            <div>{movie.title}</div>
          </div>
        ))}
        <div className={cn("h-52 w-96 rounded-3xl bg-white")}>See More!</div>
      </div>
    </div>
  );
}
