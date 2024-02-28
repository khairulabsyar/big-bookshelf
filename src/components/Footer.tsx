import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className={cn("w-full bg-backgroundBlack text-white")}>
      <div
        className={cn("flex h-14 justify-between px-5 *:flex *:items-center ")}
      >
        <div className={cn("space-x-2")}>
          <Image src="/LogoIcon.png" alt="Logo Icon" width={30} height={30} />
          <Image src="/LogoName.png" alt="Logo Name" width={125} height={125} />
        </div>
        <div className={cn("space-x-3")}>
          <Link href={"https://www.facebook.com/khairulabsyar"}>
            <FaFacebookSquare size={24} />
          </Link>
          <Link href="https://www.instagram.com/khairulabsyar">
            <FaInstagramSquare size={24} />
          </Link>
          <Link href="https://github.com/khairulabsyar">
            <FaGithubSquare size={24} />
          </Link>
        </div>
      </div>
      <div
        className={cn(
          "flex justify-between bg-black py-3 *:flex *:gap-3 *:px-5",
        )}
      >
        <div>
          <Link href="/t&c" className={cn("hover:text-yellow")}>
            Terms and condition
          </Link>
          <Link href="/privacy" className={cn("hover:text-yellow")}>
            Privacy policy
          </Link>
        </div>
        <p>Copyright 2024</p>
        <div>
          <Link href="tel:+60146216564" className={cn("hover:text-yellow")}>
            +6014 621 6564
          </Link>

          <Link
            href="mailto:khairulabsyar@gmail.com"
            className={cn("hover:text-yellow")}
          >
            khairulabsyar@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
