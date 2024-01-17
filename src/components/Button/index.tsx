
export interface ButtonProps {
    buttonText: string;
}

export function Button({ buttonText }: ButtonProps) {
    return (
        <button 
            type="button" 
            className='bg-zinc-950 text-sm text-zinc-50 px-4 py-2 rounded-md hidden tablet:flex'
        > 
        {buttonText}
        </button>     
    )
}