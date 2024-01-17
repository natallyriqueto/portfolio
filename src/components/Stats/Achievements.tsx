
export interface AchievementsProps {
    title: string;
    description: string;
}

export function Achievements({ title, description }: AchievementsProps) {
    return (
        <div className="w-235">
            <p className="text-zinc-50 font-extrabold text-5xl leading-10">{title}</p>
            <p className="text-indigo-200 font-medium text-lg">{description}</p>
        </div>
    ) 
}