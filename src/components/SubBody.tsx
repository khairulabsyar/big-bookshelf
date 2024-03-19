import { cn } from "@/lib/utils";
import { literata } from "@/styles/fonts";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";

export default function SubBody() {
  return (
    <div className={cn("h-80 p-10")}>
      <div
        className={cn(
          "relative flex h-full w-full justify-between overflow-auto rounded-[20px] bg-backgroundBlack p-5 ",
        )}
      >
        <div className={cn("z-10 max-w-[500px] space-y-3 *:text-white")}>
          <h4 className={cn("text-h4")}>DECIDING WHAT TO WATCH NEXT?</h4>
          <div className={cn("text-body1", literata.className)}>
            You’re in the right place. Tell us what titles or genres you’ve
            enjoyed in the past, and we’ll give you surprisingly insightful
            recommendations.
          </div>
        </div>
        <div
          className={cn(
            "z-10 flex w-[176px] cursor-pointer items-center justify-center rounded-3xl bg-yellow text-h4 hover:bg-yellow/90",
          )}
        >
          <FaArrowRight size={100} className={cn("rotate-45")} />
        </div>
        <MdOutlineQuestionMark
          size={515}
          className={cn("absolute right-16 top-[-50%] rotate-45 text-black/75")}
        />
      </div>
    </div>
  );
}
