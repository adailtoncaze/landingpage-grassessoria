import Image from "next/image"



export const HeaderTitle = ()  => {
    return (
        <div className="flex items-center gap-2">
            <Image 
                width={39}
                height={37}
                src="/images/icon_logo_gr.png"
                alt="Uma imagem com duas setas circulares e um gráfico de barras no centro"
            />
            <p className="text-gr-blue-primary">
                Conte com GR Acessoria Contábil
            </p>
        </div>
    )
}