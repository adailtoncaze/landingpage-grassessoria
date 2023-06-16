import Image from "next/image"
import { HeaderTitle } from "../../header-title"

export const BannerHistory = () => {
    return (
        <div className="bg-gr-blue-card">
            <div className="container py-7 grid grid-cols-2 items-center">
                <div className=" text-white">
                    <HeaderTitle
                        title="Nossos números"
                    />
                    <h1 className="w-72 pt-3 font-semibold text-3xl">
                        A nossa história
                        contada em números.
                    </h1>
                </div>
                <div className="flex gap-9">
                    <div className="flex flex-col items-center gap-2">
                        <Image 
                            width={64}
                            height={67}
                            src="/images/icon_time.png"
                            alt="Imagen pequena de uma ampulheta"
                        />
                        <h2 className="font-mono text-white font-black text-3xl">
                            + 10 anos
                        </h2>
                        <p className="font-mono text-white font-light text-2xl">
                            no mercado
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Image 
                            width={64}
                            height={67}
                            src="/images/icon_people.png"
                            alt="Imagen pequena de uma ampulheta"
                        />
                        <h2 className="font-mono text-white font-black text-3xl">
                            + 100 clientes
                        </h2>
                        <p className="font-mono text-white font-light text-2xl">
                            atendidos
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Image 
                            width={64}
                            height={67}
                            src="/images/icon_city.png"
                            alt="Imagen pequena de uma ampulheta"
                        />
                        <h2 className="font-mono text-white font-black text-3xl">
                            + 20 cidades
                        </h2>
                        <p className="font-mono text-white font-light text-2xl">
                            atendidas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}