import { Button } from "@/app/components/button"
import {HiArrowNarrowRight} from "react-icons/hi"
import Image from "next/image"

export const HeroSection = () => {
    return (
        <section className="w-full h-[810px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-1/2">
                    <h1 className="text-white font-bold text-5xl pb-7">GR Assessoria Contábil</h1>
                    <h2 className="text-white font-extrabold text-3xl pb-7 font-mono">As melhores soluções contábeis para
                        o sucesso do seu negócio estão aqui!</h2>
                    <div className="flex items-center gap-3 pb-7">
                        <Image 
                            width={13}
                            height={64}
                            src="/images/barras.svg"
                            alt="Três barras simbolizando um gráfico de barras"
                        />
                        <h3 className="text-white font-bold text-2xl font-mono">Os números são nossa especialidade,
                            seu crescimento é nosso compromisso.</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <Button className=" bg-transparent border-2 hover:bg-white hover:text-gr-blue-primary">
                                Conheça nossas soluções
                            </Button>
                        </div>
                        <div>
                            <Button className="bg-transparent py-1 px-1 font-normal hover:font-medium">
                               Fale com um especialista
                               <HiArrowNarrowRight size={18} />
                            </Button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
}