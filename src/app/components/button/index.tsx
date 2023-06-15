import { cn } from "@/app/lib/utlis"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, className, ...props}: ButtonProps) => {
    return (
        <button
        className={cn('bg-gr-blue-primary text-sm py-3 px-5 rounded-full text-white gap-2 transition-all font-semibold', className)}
        {...props}
        >
        {children}
        </button>
    )
}