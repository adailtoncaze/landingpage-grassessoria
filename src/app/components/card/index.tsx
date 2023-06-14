import Image from "next/image"
import { ReactNode } from "react"

interface CardProps {
    card: {
        icon: ReactNode
        title: string
        text: string
    }

}

export const Card = ({ card }: CardProps) => {
    return (
        <div className="text-neutral-300 bg-gr-blue-card py-5 px-5 rounded hover:bg-gr-blue-dark hover:text-neutral-100">
            <div className="flex items-center justify-between pb-4">
                <h1 className="font-semibold text-xl">
                    {card.title}
                </h1>
                {card.icon}
            </div>
            <p className="font-mono font-medium text-sm">
                {card.text}
            </p>
        </div>
    )
}