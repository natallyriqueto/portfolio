import { 
    DribbbleLogo, 
    FacebookLogo, 
    GithubLogo, 
    InstagramLogo, 
    TwitterLogo 
} from "phosphor-react";

export function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-50 ">
            <div className="max-w-maxW mx-auto py-16 px-12 flex flex-col gap-8">
                <div className="border-b border-gray-600 w-full"></div>
                <div className="flex flex-col items-center gap-6 laptop:flex-row laptop:justify-between">
                    <p>© 2020 Natally Riqueto. All rights reserved.</p>
                    <div className="flex gap-6 items-center">
                        <FacebookLogo size={24} />
                        <InstagramLogo size={24} />
                        <TwitterLogo size={24} />
                        <GithubLogo size={24} />
                        <DribbbleLogo size={24} />
                    </div>
                </div>
            </div>
        </footer>
    )
}