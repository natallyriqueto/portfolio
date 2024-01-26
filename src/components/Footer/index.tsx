import { 
    GithubLogo, 
    InstagramLogo, 
    LinkedinLogo, 
} from "phosphor-react";

export function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-50 relative">
            <div className="max-w-maxW mx-auto py-16 px-12 flex flex-col gap-8">
                <div className="border-b border-gray-600 w-full"></div>
                <div className="flex flex-col items-center gap-6 laptop:flex-row laptop:justify-between">
                    <p>© 2020 Natally Riqueto. All rights reserved.</p>
                    <div className="flex gap-6 items-center">
                        <a href="https://www.linkedin.com/in/natally-riqueto-b6663a15a/"><LinkedinLogo size={24} /></a>
                        <a href="https://www.instagram.com/winteriscoming0/"><InstagramLogo size={24} /></a>
                        <a href="https://github.com/natallyriqueto"><GithubLogo size={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}