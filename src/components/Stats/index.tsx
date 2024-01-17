import { Achievements } from "./Achievements";

export function Stats() {
    return (
        <div className="bg-zinc-950 p-12 laptop:p-24 text-center rounded-md">
            <h2 className="font-extrabold text-4xl leading-10 text-zinc-50 mb-4">Performance & Achievements</h2>
            <h3 className="leading-7 text-xl text-indigo-200 mb-10">Explore my career milestones and impact.</h3>
            <div className="flex justify-center items-center flex-col gap-8 laptop:flex-row">
                <Achievements title="5" description="Years of experience" />
                <Achievements title="20" description="Projects" />
                <Achievements title="100%" description="Customer satisfaction" />
            </div>
        </div>
    )
}