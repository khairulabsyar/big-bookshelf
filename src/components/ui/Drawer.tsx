"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from "vaul";

export function MyDrawer() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <button>
          <RxHamburgerMenu size={24} />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed bottom-0 right-0  flex h-full w-1/2">
          <div className="h-full flex-1 bg-mainBackground p-4">
            <div className="mx-auto mt-1 max-w-md">
              <Drawer.Title className="mb-4 font-medium">
                <div
                  className={cn(
                    "flex items-center space-x-5 rounded bg-backgroundBlack p-2 text-white",
                  )}
                >
                  <Image
                    src="/LogoIcon.png"
                    alt="Logo Icon"
                    width={30}
                    height={30}
                  />
                  <p>Menu</p>
                </div>
              </Drawer.Title>
              <div className={cn("flex flex-col space-y-2 ")}>
                <Link href="/movie">Movies</Link>
                <Link href="/about">About me</Link>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
