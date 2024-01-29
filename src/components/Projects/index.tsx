import { ProjectCard } from "./ProjectCard";
import reactLogo from "@/assets/images/react.svg";
import typescriptLogo from "@/assets/images/typescript.svg";
import figma from "@/assets/images/figma.svg";
import github from "@/assets/images/github.svg";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type tagsType = {
    title: string;
    fontColor: string;
    bgColor: string;
}

interface ProjectListType {
    title: string;
    description: string;
    tag: tagsType;
    stack: Array<string>;
    link: string;
}

const projectsList: ProjectListType[] = [
    { 
        title: "Learnu", 
        description: "This landing page was created with the aim of exploring React features, css animations and UI Design.",
        tag: { title: "Landing Page", fontColor:"text-indigo-800", bgColor: "bg-indigo-100"},
        stack: [reactLogo, typescriptLogo, figma, github],
        link: "/learnu"
    },
    { 
        title: "Coffee Delivery", 
        description: "This landing page was built to serve as a practical exercise to improve front-end development skills, such as HTML and CSS.",
        tag: { title: "Landing Page", fontColor:"text-indigo-800", bgColor: "bg-indigo-100"},
        stack: [reactLogo, typescriptLogo, figma, github],
        link: "/coffe-delivery"
    },
    { 
        title: "Netflix", 
        description: "This case study was created to replicate the Netflix interface, providing an opportunity to explore new interfaces experiences.",
        tag: { title: "Case Study", fontColor:"font-emerald-800", bgColor: "bg-emerald-100"},
        stack: [reactLogo, typescriptLogo, figma, github],
        link: "/netflix"
    },
    { 
        title: "Timer", 
        description: "This little project was created with the aim of practicing some React features, such as reducers, states and contexts.",
        tag: { title: "Case Study", fontColor:"font-emerald-800", bgColor: "bg-emerald-100"},
        stack: [reactLogo, typescriptLogo, figma, github],
        link: "/timer"
    }
]

export function Projects() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <section id="projects">
            <div className="flex flex-col gap-4 mb-20">
                <h2 className="tracking-tighter	font-extrabold text-4xl leading-10">Projects</h2>
                <p className="text-gray-500 text-xl">Each project is a testament to my passion for innovation, attention to detail, and commitment to delivering high-quality results. Whether it's web applications, websites, or interactive designs, this portfolio offers a glimpse into the projects that define my journey as a frontend developer and designer.</p>
                <div className="border border-b-2 border-gray-200"></div>
            </div>
            <div className="hidden laptop:flex gap-5 flex-wrap">
                { projectsList.map((project) => 
                <ProjectCard 
                    title={project.title} 
                    description={project.description} 
                    tag={project.tag} 
                    stack={project.stack}
                    link={project.link}
                />
                )}
            </div>
            <div className="laptop:hidden">
                <Slider {...settings}>
                    { projectsList.map((project) => 
                    <ProjectCard 
                        title={project.title} 
                        description={project.description} 
                        tag={project.tag} 
                        stack={project.stack}
                        link={project.link}
                    />
                    )}
                </Slider>
            </div>            
        </section>
    )
}