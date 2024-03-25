import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IoSearchOutline } from "react-icons/io5";
import { MyDrawer } from "./ui/Drawer";
export default function Navbar() {
  return (
    <div className={cn("mt-5 w-full px-2 lg:px-5")}>
      <div
        className={cn(
          "flex h-[50px] items-center justify-between rounded-[20px] bg-backgroundBlack px-5 text-white  lg:h-[75px] ",
        )}
      >
        <Link href="/">
          <div className={cn("flex items-center space-x-1 lg:space-x-5 ")}>
            <Image src="/LogoIcon.png" alt="Logo Icon" width={30} height={30} />
            <Image
              src="/LogoName.png"
              alt="Logo Name"
              width={125}
              height={125}
            />
          </div>
        </Link>
        <div className={cn("hidden space-x-5 *:text-h5 lg:block ")}>
          <Link href="/movie" className={cn("hover:text-yellow")}>
            Movies
          </Link>
          <Link href="/about" className={cn("hover:text-yellow")}>
            About me
          </Link>
        </div>
        <div className={cn(" hidden items-center space-x-5 lg:flex")}>
          <IoSearchOutline size={24} />
          <Button asChild className="bg-yellow text-black">
            <Link href="/">Login</Link>
          </Button>
        </div>
        <div className={cn("flex items-center lg:hidden")}>
          <MyDrawer />
        </div>
      </div>
    </div>
  );
}
