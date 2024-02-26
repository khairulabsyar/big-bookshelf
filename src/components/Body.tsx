import { GetMovies, GetUser } from "@/lib/queries";
import { cn } from "@/lib/utils";
import React from "react";

export default function Body() {
  const { data } = GetMovies();
  console.log(data);
  // const user = GetUser();
  return <div className={cn("min-h-screen bg-backgroundBlack")}>Body</div>;
}
