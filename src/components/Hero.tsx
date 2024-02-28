import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className={cn("flex flex-col text-center")}>
      <h1 className={cn("text-h1")}>
        <s>READING</s> MOVIES MAKE THE WORLD HUGE
      </h1>
      <div className={cn("flex justify-between px-11")}>
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
        <Image
          src="/heroRight.png"
          width={596}
          height={348}
          alt="Picture of the Rizvan Bağırlı - Tipoqrafika"
          quality={100}
          style={{ borderRadius: "20px" }}
        />
      </div>
    </div>
  );
}
