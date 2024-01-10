import logo from '@/assets/images/logo.png';

export function Header() {
    return (
        <nav className='py-6 flex items-center justify-between border-b border-gray-200'>
            <div className='flex items-center gap-xl'>
                <a href="#">
                    <img src={logo} alt="logo image" />
                </a>
                <ul className='flex gap-6 text-gray-500'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
            </div>
            <button 
                type="button" 
                className='bg-slate-950 text-slate-50 px-4 py-2 rounded-md'
            > Contact me
            </button>
        </nav>
    )
}