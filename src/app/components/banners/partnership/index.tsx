import Image from "next/image"

export const BannerPartnership = () => {
    return (
        <div className="bg-neutral-100">
            <div className="container py-7 grid grid-cols-2 divide-x-2 items-center">
                <div className="w-96"> 
                    <h2 className="text-gr-blue-primary font-semibold text-3xl pb-4">
                        Nossos Parceiros
                    </h2>
                    <p className="font-mono font-medium text-lg text-gr-text-base">
                        Juntos somos mais fortes: construa parcerias sólidas
                        e alcance novos horizontes de sucesso.
                    </p>
                </div>
                <div className="flex gap-4 items-center justify-end">
                   <div>
                        <Image 
                            width={111}
                            height={142}
                            src={"/images/logo-parceiro-1.png"}
                            alt="Logo da CertiSim certificadora digital"
                        />
                   </div>
                   <div>
                        <Image 
                            width={111}
                            height={142}
                            src={"/images/logo-parceiro-1.png"}
                            alt="Logo da CertiSim certificadora digital"
                        />
                   </div>
                   <div>
                        <Image 
                            width={111}
                            height={142}
                            src={"/images/logo-parceiro-1.png"}
                            alt="Logo da CertiSim certificadora digital"
                        />
                   </div>
                   <div>
                        <Image 
                            width={111}
                            height={142}
                            src={"/images/logo-parceiro-1.png"}
                            alt="Logo da CertiSim certificadora digital"
                        />
                   </div>
                </div>
            </div>
        </div>
    )
}