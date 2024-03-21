import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

const BodySkeleton = () => {
  const arraySkeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={cn("mt-5 grid grid-cols-3 justify-items-center gap-4")}>
      {arraySkeleton?.map((_, index) => (
        <div
          className={cn(
            "flex h-52 w-96 items-center gap-2 rounded-3xl bg-white px-5",
          )}
          key={index}
        >
          <Skeleton className=" h-[90%] w-[125px] rounded-2xl" />

          <div className={cn("flex h-[100%] flex-col justify-between py-5")}>
            <div className={cn("flex flex-col space-y-2")}>
              <Skeleton className="h-6 w-[125px]" />
              <Skeleton className="h-6 w-[175px]" />
            </div>
            <div className={cn("space-y-3")}>
              <Skeleton className={cn("h-6 w-24 rounded-full px-3 py-1")} />
              <Skeleton className={cn("h-6 rounded-full  px-3 py-1")} />
            </div>
          </div>
        </div>
      ))}
      <div
        className={cn(
          "flex h-52 w-96 cursor-pointer items-center justify-center rounded-3xl bg-yellow text-h4 hover:bg-yellow/90",
        )}
      >
        See All!
      </div>
    </div>
  );
};

export default BodySkeleton;
