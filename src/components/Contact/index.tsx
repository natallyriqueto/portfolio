import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";
import { Form } from "./Form";
import { Info } from "./Info";

export function Contact() {

    return (
        <section id="contact" className="flex-wrap gap-12 py-24 flex laptop:gap-4">
            <div className="laptop:max-w-[30rem] px-12 laptop:py-24">
                <h2 className="text-4xl font-extrabold -tracking-wide leading-10 mb-4">Get in touch</h2>
                <p className="text-lg text-gray-500 -tracking-wide leading-[1.625rem] mb-8">Whether you have questions, inquiries about collaboration, or just want to say hello, this is the place to do it. I'm always eager to hear from fellow designers, developers, potential clients, or anyone interested in the world of web development and design.</p>
                <div className="flex flex-col gap-3">
                    <Info icon={MapPin} text="New Jersey - USA" />
                    <Info icon={Phone} text="+1 (908) 320-1487" />
                    <Info icon={EnvelopeSimple} text="natallyriqueto@hotmail.com" />
                </div>
            </div>
            <div className="flex flex-1 px-12 laptop:py-24">
                <Form />
            </div>
        </section>
    )
}