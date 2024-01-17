import { ElementType } from "react"

export interface CardProps {
    icon: ElementType;
    title: string;
    description: string;
}

export function Card({icon: Icon, title, description}: CardProps) {
    return (
        <div className="bg-gray-50 rounded-md flex flex-col items-center px-6 py-8 max-w-96 text-center relative mt-24">
            <div className="shadow-zinc-950 shadow-sm bg-zinc-950 rounded-md w-12 flex justify-center p-2 absolute -top-6">
                <Icon size={32} color="#ffff" />
            </div>
            <p className="text-zinc-950 text-lg font-medium leading-7 mt-6">{title}</p>
            <p className="text-gray-500 mt-4">{description}</p>
        </div>
    )
}