import { tagsType } from ".";

interface ProjectCardProps {
    title: string;
    description: string;
    tag: tagsType;
    stack: Array<string>;
    link: string;
}

export function ProjectCard({ title, description, tag, stack, link }: ProjectCardProps) {
    return (
        <div className="max-w-[25.8rem] p-4 rounded-md">
            <div className={`${tag.bgColor} rounded-xl inline-block py-[2px] px-3 mb-4`}>
                <span className={`text-sm font-medium ${tag.fontColor} flex`}>{tag.title}</span>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-xl leading-7">{title}</h3>
                <p className="text-gray-500 h-20">{description}</p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <h3 className=" text-sm font-semibold">Stack</h3>
                    <ul className="flex items-center gap-4">
                        {stack.map((item) =>   
                            <li>
                                <img src={item} alt="technologies icons"/>
                            </li>
                        )}
                    </ul>
                    <a href={link}>
                        <p className="text-blue-800 text-sm cursor-pointer hover:text-blue-500">See more...</p>
                    </a>
            </div>
        </div>        
    )
}