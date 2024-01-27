import { Card } from "./card";
import {
    PaintBrush, 
    Person, 
    BugBeetle, 
    Desktop, 
    FigmaLogo, 
    ChartLineUp
} from "phosphor-react"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Skills() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section id="skills" className="h-sectionHeight flex flex-col justify-center">
            <div className="max-w-screen-sm mx-auto text-center">
                <h3 className="uppercase font-semibold leading-6 tracking-wide">skills</h3>
                <h2 className="font-bold -tracking-wide leading-10 text-4xl mt-2 mb-5">Core Frontend Developer Skills</h2>
                <p className="leading-7	text-xl text-gray-500">Discover my proficiency as a Frontend developer.  From crafting intuitive user interfaces and engaging user experiences to translating design concepts into responsive pages.</p>
            </div> 
            <div className="hidden laptop:flex justify-center gap-8 flex-wrap rounded-md">
                <Card icon={PaintBrush} title="UI/UX" description="Ability to create visually pleasing and user-centric designs that enhance the overall user experience."/>
                <Card icon={Desktop} title="Responsive Web Design" description="Designing and implementing responsive layouts that look and function well on various devices."/>
                <Card icon={ChartLineUp} title="Web Performance Optimization" description="Optimizing web performance with efficient code and other techniques that improve page load times."/>
                <Card icon={FigmaLogo} title="Prototyping" description="Creating interactive prototypes that allow stakeholders to experience and review my designs in action."/>
                <Card icon={Person } title="Acessiblity" description="Creating digital experiences that conform to accessibility standards and striving to make web content usable for people with disabilities."/>
                <Card icon={BugBeetle} title="Debugging and Problem Solving" description="Proficient at debugging issues in the code and solving problems effectively."/>
            </div>
            <div className="laptop:hidden w-full">
                <Slider {...settings}>
                    <Card icon={PaintBrush} title="UI/UX" description="Ability to create visually pleasing and user-centric designs that enhance the overall user experience."/>
                    <Card icon={Desktop} title="Responsive Web Design" description="Designing and implementing responsive layouts that look and function well on various devices."/>
                    <Card icon={ChartLineUp} title="Web Performance Optimization" description="Optimizing web performance with efficient code and other techniques that improve page load times."/>
                    <Card icon={FigmaLogo} title="Prototyping" description="Creating interactive prototypes that allow stakeholders to experience and review my designs in action."/>
                    <Card icon={Person } title="Acessiblity" description="Creating digital experiences that conform to accessibility standards and striving to make web content usable for people with disabilities."/>
                    <Card icon={BugBeetle} title="Debugging and Problem Solving" description="Proficient at debugging issues in the code and solving problems effectively."/>
                </Slider>
            </div>
        </section>
    )
}