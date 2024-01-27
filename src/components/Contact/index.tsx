import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";
import { Form } from "./Form";
import { Info } from "./Info";

export function Contact() {

    return (
        <section id="contact" className="h-sectionHeight flex flex-col justify-center">
            <div className="flex flex-wrap gap-12">
                <div className="laptop:max-w-[30rem]">
                    <h2 className="text-4xl font-extrabold -tracking-wide leading-10 mb-4">Get in touch</h2>
                    <p className="hidden laptop:flex text-lg text-gray-500 -tracking-wide leading-[1.625rem] mb-8">Whether you have questions, inquiries about collaboration, or just want to say hello, this is the place to do it. I'm always eager to hear from fellow designers, developers, potential clients, or anyone interested in the world of web development and design.</p>
                    <div className="flex flex-col gap-3">
                        <Info icon={MapPin} text="New Jersey - USA" />
                        <Info icon={Phone} text="+1 (908) 320-1487" />
                        <Info icon={EnvelopeSimple} text="natallyriqueto@hotmail.com" />
                    </div>
                </div>
                <div className="flex flex-1 laptop:px-12">
                    <Form />
                </div>
            </div>
        </section>
    )
}