import { Button } from "@/app/components/button"
import { HiArrowNarrowRight } from "react-icons/hi"
import Image from "next/image"
import { CarouselHeader } from "@/app/components/carousel"

export const HeroSection = () => {
    return (
        <section>
            <div className="bg-gr-blue-primary w-2/6 py-8 px-12 bg-opacity-90 absolute top-80 left-[60%] z-40 text-right ">
                <div>
                    <h1 className="text-white font-bold text-4xl pb-7">GR Assessoria Contábil</h1>
                    <h2 className="text-white font-medium text-xl pb-7 font-mono"><span className="font-extrabold">As melhores soluções contábeis</span> para
                        o sucesso do seu negócio estão aqui! Os números são nossa especialidade,
                        seu crescimento é nosso compromisso.</h2>
                    <Button className="bg-transparent border-2 border-gr-yellow-primary hover:bg-gr-yellow-primary hover:text-white">
                        Conheça nossas soluções
                    </Button>
                </div>
            </div>
            <div>
                <CarouselHeader />
            </div>

        </section>
    )
}