import desk from '@/assets/images/desk.png'
import avatar from '@/assets/images/avatar.png'
import html from '@/assets/images/html.png'
import javascript from '@/assets/images/javascript.png'
import typescript from '@/assets/images/typescript.png'
import tailwind from '@/assets/images/tailwind.png'
import figma from '@/assets/images/figma.png'

export function Hero() {
    return (
        <div className='flex py-12 gap-8'>
            <div className='w-500'>
                <img src={avatar} alt="avatar" className='mb-6' />
                <h1 className='text-6xl font-extrabold mb-6 tracking-tight'>Natally Riqueto</h1>
                <div className='flex items-center gap-4 mb-12'>
                    <div className='bg-slate-950 w-200 h-xs rounded'></div>
                    <h2 className='text-2xl font-semibold'>Frontend Developer</h2>
                </div>
                <p className='text-gray-500 text-xl mb-10'>Hello!👋 I’m a software developer with more than 5 years of experience building amazing experiences.</p>
                <p className='uppercase text-sm	font-semibold mb-5'>technology stack</p>
                <div className='flex gap-6'>
                    <img src={html} alt="html icon" />
                    <img src={typescript} alt="typescript icon" />
                    <img src={javascript} alt="javascript icon" />
                    <img src={figma} alt="figma icon" />
                    <img src={tailwind} alt="tailwind icon" />
                </div>
            </div>
            <div className='hidden laptop:flex max-w-762 mx-auto'>
                <img src={desk} alt="computer and a computer desk" />
            </div>
        </div>
    )
}