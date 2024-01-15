import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";

 export function Home() {
    return (
        <main className="max-w-maxW mx-auto px-8">
            <Hero />
            <Skills />
            <Stats />
        </main>
    )
 }