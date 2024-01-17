import { Input } from "./Input";

export function Form() {
    return (
        <form className="flex flex-col gap-6 w-full">
            <Input placeholder="Full name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
            <textarea 
                placeholder="Message" 
                className="rounded-md border border-gray-300 placeholder-gray-500 h-32 py-3 px-4"
            />
            <button 
                type="button" 
                className='bg-zinc-950 text-sm text-zinc-50 w-[6.5rem] py-3 rounded-md'
            > 
                Submit
            </button> 

        </form>
    )
}