import React from "react";

import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export default function Navbar() {
  return (
    <>
      <div className={cn("h-5")} />
      <div
        className={cn(
          "bg-backgroundBlack text-white rounded-[20px] p-5 h-[75px] flex items-center justify-between",
        )}
      >
        <div className={cn("flex items-center space-x-5")}>
          <Image src="/LogoIcon.png" alt="Logo Icon" width={30} height={30} />
          <Image src="/LogoName.png" alt="Logo Name" width={125} height={125} />
        </div>
        <div className={cn("space-x-5 *:text-h5")}>
          <Link href="/test">Books</Link>
          <Link href="/test">Authors</Link>
          <Link href="/test">What to Read?</Link>
          <Link href="/test">Gift Ideas</Link>
          <Link href="/test">About us</Link>
        </div>
        <div className={cn("flex items-center space-x-5")}>
          <IoSearchOutline size={24} />
          <IoBookmarkOutline size={24} />
          <IoCartOutline size={24} />
          <Button asChild className="bg-yellow text-black">
            <Link href="/">Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
