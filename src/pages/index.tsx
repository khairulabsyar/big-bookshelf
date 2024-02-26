import Body from "@/components/Body";
import { Hero } from "@/components/Hero";
import { cn } from "@/lib/utils";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className={cn("min-h-screen w-full")}>
        <Hero />
        <Body />
      </main>
    </Layout>
  );
}
