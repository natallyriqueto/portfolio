
export interface InputProps {
    placeholder: string;
    type?: string;
}

export function Input({placeholder, type="text"}: InputProps) {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            className="placeholder-gray-500 py-3 px-4 rounded-md border border-gray-300" 
        />
    )
}