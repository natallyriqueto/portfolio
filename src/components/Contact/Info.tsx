import { ElementType } from "react"

export interface InfoProps {
    icon: ElementType;
    text: string;
}

export function Info({icon: Icon, text}: InfoProps) {
    return (
        <div className="flex gap-3">
            <Icon size={24} />
            <p className="text-lg text-gray-500 -tracking-wide leading-6">{text}</p>
        </div>
    )
}