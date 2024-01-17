import logo from "@/assets/images/logo.png";
import { Button } from "../Button";

export function Header() {
    return (
        <nav className="py-6 border-b border-gray-200">
            <div className="max-w-maxW mx-auto px-8 flex items-center justify-between">
                <div className="flex items-center gap-xl">
                    <a href="#">
                        <img src={logo} alt="logo image" />
                    </a>
                    <ul className="flex gap-6 text-gray-500">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <Button buttonText="Contact me" />
            </div>
        </nav>
    )
}