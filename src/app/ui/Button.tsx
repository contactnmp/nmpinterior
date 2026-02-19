import { ReactNode } from "react"

interface IButton {
    children: ReactNode
    onClick?: () => void
    type?: "button" | "submit" | "reset"
    style?: string
}

const Button = ({children, onClick, type = 'button', style}: IButton) => {
    return (
        <button
            className={`h-[48px] flex items-center font-medium justify-center border border-[#021A62] px-7 text-[15px] tracking-[0.04em] leading-none hover:scale-85 transition-a ${style}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button