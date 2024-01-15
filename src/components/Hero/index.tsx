import desk from '@/assets/images/desk.png'
import avatar from '@/assets/images/avatar.png'
import html from '@/assets/images/html.svg'
import css from '@/assets/images/css.svg'
import javascript from '@/assets/images/javascript.svg'
import typescript from '@/assets/images/typescript.svg'
import tailwind from '@/assets/images/tailwind.svg'
import figma from '@/assets/images/figma.svg'

export function Hero() {
    return (
        <div className='flex justify-center py-28 gap-8'>
            <div className='w-500'>
                <img src={avatar} alt="avatar" className='mb-6' />
                <h1 className='text-6xl font-extrabold mb-6 tracking-tight'>Natally Riqueto</h1>
                <div className='flex items-center gap-4 mb-12'>
                    <div className='bg-zinc-950 w-200 h-xs rounded'></div>
                    <h2 className='text-2xl font-semibold'>Frontend Developer</h2>
                </div>
                <p className='text-gray-500 text-xl mb-10'>Hello!👋 I’m a software developer with more than 5 years of experience building amazing experiences.</p>
                <p className='uppercase text-sm	font-semibold mb-5'>technology stack</p>
                <div className='flex gap-6'>
                    <img src={html} alt="html icon" />
                    <img src={css} alt="css icon" />
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