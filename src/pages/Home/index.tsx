import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";

 export function Home() {
    return (
        <main className="max-w-maxW mx-auto px-12">
            <Hero />
            <Skills />
            <Stats />
            <Contact />
        </main>
    )
 }