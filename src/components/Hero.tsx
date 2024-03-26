import { ScreenSize, cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { UseTrendingAll } from "@/lib/queries";
import type { Movie } from "@/lib/definitions";
import { Skeleton } from "./ui/skeleton";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useMemo } from "react";
import { AspectRatio } from "./ui/aspect-ratio";

const PUBLIC_API_IMAGE_PATH = process.env["NEXT_PUBLIC_API_IMAGE_PATH"];

export function Hero() {
  const { data: trendingAll, isLoading } = UseTrendingAll("day");
  let screenWidth = ScreenSize();

  // TODO: useMemo for this
  const trend: Movie[] = useMemo(
    () =>
      Array.isArray(trendingAll?.results) && screenWidth.width >= 1024
        ? trendingAll.results.toSpliced(1, 20)
        : trendingAll?.results.toSpliced(0, 15) || [],
    [screenWidth, trendingAll],
  );

  return (
    <div className={cn("flex flex-col text-center ")}>
      {/* <div className={cn("mt-5 flex flex-col text-center lg:mt-0")}> */}
      <h1 className={cn("my-5 text-h2 lg:my-0 lg:text-h1")}>
        MOVIES MAKE THE WORLD HUGE
      </h1>
      <div
        className={cn(
          "flex flex-col justify-around space-y-5 px-5 lg:flex-row lg:space-y-0 lg:px-0",
        )}
      >
        <div className={cn("lg:h-[349px] lg:w-[620px]")}>
          <AspectRatio
            ratio={16 / 9}
            className={cn(
              "flex h-full w-full flex-col justify-between space-y-5 rounded-[20px] bg-backgroundBlack p-5 text-left text-white ",
            )}
          >
            <div className={cn("space-y-5 lg:w-3/5")}>
              <h4 className={cn("text-h4")}>FIND SOMETHING TO WATCH</h4>
              <p className={cn("text-body1")}>
                Fancy something unusual and unpredictable? Funny or exciting? No
                problem. Check out the collections we have prepared for you.
              </p>
            </div>
            <Button
              asChild
              className="h-[56px] rounded-2xl border text-yellow lg:w-1/3"
            >
              <Link href="/">BROWSE NOW</Link>
            </Button>
          </AspectRatio>
        </div>

        {isLoading && screenWidth.width >= 1024 ? (
          <div className={cn("relative h-[349px] w-[620px]")}>
            <AspectRatio ratio={16 / 9}>
              <Skeleton className=" h-full w-full rounded-[20px]" />
            </AspectRatio>
          </div>
        ) : (
          screenWidth.width >= 1024 && (
            <div className={cn("relative h-[349px] w-[620px]")}>
              <Image
                src={`${PUBLIC_API_IMAGE_PATH}${trend[0]?.backdrop_path}`}
                alt="Picture of number one trending"
                fill
                objectFit="cover"
                quality={100}
                className={cn("hidden rounded-[20px] lg:block")}
              />
            </div>
          )
        )}

        {isLoading && screenWidth.width < 1024 ? (
          <AspectRatio ratio={16 / 9}>
            <Skeleton className=" h-full w-full rounded-[20px]" />
          </AspectRatio>
        ) : (
          screenWidth.width < 1024 && (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {trend.map((item, index) => (
                  <CarouselItem key={index}>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={`${PUBLIC_API_IMAGE_PATH}${item.backdrop_path}`}
                        alt={`Picture of number ${index + 1} trending`}
                        fill
                        className={cn("rounded-[20px] object-cover")}
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )
        )}
      </div>
    </div>
  );
}
