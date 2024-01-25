import logo from "@/assets/images/logo.png";
import { useHeadsObserver } from '@/hooks/useHeadsObserver';

export function Header() {
    const { activeId } = useHeadsObserver();

    type Heading = {
        id: string;
        title: string;
        headingId: string;
    }
      
    const headings: Heading[] = [
    { id: 'about', title: 'About', headingId: 'about' },
    { id: 'skills', title: 'Skills', headingId: 'skills' },
    { id: 'projects', title: 'Projects', headingId: 'projects' },
    ];

    const handleNavigation = (
        e: React.MouseEvent<HTMLAnchorElement>, 
        headingId: string
      ) => {
        e.preventDefault();
        const yOffset = -80;
        const headingElement = document.querySelector(`#${headingId}`);
        const position = headingElement ? headingElement.getBoundingClientRect().top + window.scrollY + yOffset : 0;
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      };

    return (
        <nav className="bg-white bg-opacity-60 backdrop-blur-md 0 py-6 border-b border-gray-200 sticky top-0 z-[999]">
            <div className="max-w-maxW mx-auto px-8 flex items-center justify-between">
                <div className="flex items-center gap-xl">
                    <a href="#">
                        <img src={logo} alt="logo image" />
                    </a>
                    <ul className="flex gap-6 text-gray-500 cursor-pointer">
                    {
                        headings.map((heading) => (
                        <a 
                            className={`hover:text-zinc-950 hover:font-medium ${activeId === heading.headingId && 'relative font-semibold before:absolute before:top-1/2 before:left-[-14px] before:transform -translate-y-1/2 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full' }`}
                            key={heading.id}
                            href={`#${heading.id}`} 
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavigation(e, heading.id)}
                        >
                            <li>{heading.title}</li>
                        </a>
                        ))
                    }
                    </ul>
                </div>
                <button 
                    type="button" 
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavigation(e, 'contact')}
                    className='hover:bg-slate-800 bg-zinc-950 text-sm text-zinc-50 px-4 py-2 rounded-md hidden tablet:flex'
                > 
                Contact me
                </button>     
            </div>
        </nav>
    )
}