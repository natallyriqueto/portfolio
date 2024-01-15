 

export function Stats() {
    return (
        <div className="bg-zinc-950 p-24 text-center rounded-md">
            <h2 className="font-extrabold text-4xl leading-10 text-zinc-50 mb-4">Performance & Achievements</h2>
            <h3 className="leading-7 text-xl text-indigo-200 mb-10">Explore my career milestones and impact.</h3>
            <div className="flex justify-center items-center flex-col gap-8 laptop:flex-row">
                <div className="w-235">
                    <p className="text-zinc-50 font-extrabold text-5xl leading-10">5</p>
                    <p className="text-indigo-200 font-medium text-lg">Years of experience</p>
                </div>
                <div className="w-235">
                    <p className="text-zinc-50 font-extrabold text-5xl leading-10">20</p>
                    <p className="text-indigo-200 font-medium text-lg">Projects</p>
                </div>
                <div className="w-235">
                    <p className="text-zinc-50 font-extrabold text-5xl leading-10">100%</p>
                    <p className="text-indigo-200 font-medium text-lg">Customer satisfaction</p>
                </div>
            </div>
        </div>
    )
}