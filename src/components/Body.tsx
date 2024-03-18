import type { Movie } from "@/lib/definitions";
import { UseTrendingMovies } from "@/lib/queries";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa6";

const PUBLIC_API_IMAGE_PATH = process.env["NEXT_PUBLIC_API_IMAGE_PATH"];

export default function Body() {
  // const { data: watchlist } = UseWatchlist();
  const { data: trendingMovies } = UseTrendingMovies("week");
  // const poster = watchlist?.results.map((result) => result.poster_path) || null;
  // console.log(poster);
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
              "flex h-52 w-96 items-center gap-2 rounded-3xl bg-white px-5",
            )}
            key={index}
          >
            <Image
              src={`${PUBLIC_API_IMAGE_PATH}${movie.poster_path}`}
              alt={movie.title}
              height={0}
              width={125}
              className={cn("h-[80%] rounded-2xl")}
            />

            <div>
              <div className={cn("flex flex-col")}>
                <p className={cn("text-body1 font-bold")}>
                  Title: {movie.title}
                </p>
                <p>Release Date: {movie.release_date}</p>
              </div>
              <div
                className={cn(
                  "flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-body1",
                )}
              >
                {Math.ceil(movie.vote_average * 100) / 100}
                <FaRegStar size={20} className={cn("item text-orange")} />(
                {movie.vote_count})
              </div>
            </div>
          </div>
        ))}
        <div
          className={cn(
            "flex h-52 w-96 cursor-pointer items-center justify-center rounded-3xl bg-yellow text-h4 hover:bg-yellow/90",
          )}
        >
          See More!
        </div>
      </div>
    </div>
  );
}
