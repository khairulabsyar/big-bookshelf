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
    <div className={cn("mt-5 w-full px-5")}>
      <div
        className={cn(
          "flex h-[75px] items-center justify-between rounded-[20px] bg-backgroundBlack p-5  text-white ",
        )}
      >
        <Link href="/">
          <div className={cn("flex items-center space-x-5")}>
            <Image src="/LogoIcon.png" alt="Logo Icon" width={30} height={30} />
            <Image
              src="/LogoName.png"
              alt="Logo Name"
              width={125}
              height={125}
            />
          </div>
        </Link>
        <div className={cn("space-x-5 *:text-h5")}>
          <Link href="/movie">Movies</Link>
          <Link href="/test">Authors</Link>
          <Link href="/about">About me</Link>
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
    </div>
  );
}
