import { Hero } from "@/components/Hero";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className={cn("min-h-screen")}>
      <Hero />
    </main>
  );
}
