import Image from "next/image"

interface HeaderTitleProps {
    title: string
}

export const HeaderTitle = ({title}: HeaderTitleProps)  => {
    return (
        <div className="flex items-center gap-2">
            <Image 
                width={39}
                height={37}
                src="/images/icon_logo_gr.png"
                alt="Uma imagem com duas setas circulares e um gráfico de barras no centro"
            />
            <p>
                {title}
            </p>
        </div>
    )
}