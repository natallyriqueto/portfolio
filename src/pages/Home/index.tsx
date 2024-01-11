import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";

 export function Home() {
    return (
        <main className="max-w-maxW mx-auto px-8">
            <Hero />
            <Skills />
        </main>
    )
 }