import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { UseTrendingAll } from "@/lib/queries";
import type { Movie } from "@/lib/definitions";
import { Skeleton } from "./ui/skeleton";

const PUBLIC_API_IMAGE_PATH = process.env["NEXT_PUBLIC_API_IMAGE_PATH"];

export function Hero() {
  const { data: trendingAll, isLoading } = UseTrendingAll("day");

  const trendingOne: Movie[] = Array.isArray(trendingAll?.results)
    ? trendingAll.results.slice(0, 1)
    : [];

  return (
    <div className={cn("flex flex-col text-center")}>
      <h1 className={cn("text-h2 lg:text-h1")}>MOVIES MAKE THE WORLD HUGE</h1>
      <div className={cn("hidden justify-around lg:flex")}>
        <div
          className={cn(
            "flex h-[349px] w-[596px] flex-col justify-between rounded-[20px] bg-backgroundBlack p-5 text-left text-white",
          )}
        >
          <div className={cn("w-3/5 space-y-5")}>
            <h4 className={cn("text-h4")}>FIND SOMETHING TO WATCH</h4>
            <p className={cn("text-body1")}>
              Fancy something unusual and unpredictable? Funny or exciting? No
              problem. Check out the collections we have prepared for you.
            </p>
          </div>
          <Button
            asChild
            className="h-[56px] w-1/3 rounded-2xl border text-yellow"
          >
            <Link href="/">BROWSE NOW</Link>
          </Button>
        </div>
        {isLoading ? (
          <Skeleton className="h-[349px] w-[596px] rounded-[20px]" />
        ) : (
          <Image
            src={`${PUBLIC_API_IMAGE_PATH}${trendingOne[0]?.backdrop_path}`}
            alt="Picture of number one trending"
            width={596}
            height={349}
            quality={100}
            style={{ borderRadius: "20px" }}
          />
        )}
      </div>
    </div>
  );
}
