import { Button } from "@/app/components/button"
import { HeaderTitle } from "@/app/components/header-title"
import { BsWhatsapp } from 'react-icons/bs'
import Image from "next/image"

export const PartnershipSection = () => {
    return (
        <section className="container py-32">

            <div className="pb-12">
                <h1 className="w-3/4 text-gr-blue-primary font-semibold text-3xl pb-8">
                    Queremos estabelecer uma Parceria de Sucesso com você!
                    A GR Assessoria Contábil fornecerá a solução contábil
                    ideal para você ou seu negócio.
                </h1>
            </div>

            <div className="flex items-center gap-20">
                <div>
                    <div className="pb-8">
                        <Image
                            width={358}
                            height={314}
                            src="/images/image_partnership.png"
                            alt="Imagem de uma forma geométrica com quatro peças que se encaixam umas nas outras"
                        />
                    </div>
                    <div className="text-gr-blue-primary">
                        <HeaderTitle 
                            title="Conte com GR Acessoria Contábil"
                        />
                    </div>
                    <div className="w-96 pt-3 pb-10 font-bold text-2xl text-gr-blue-primary">
                        <h2>
                            Juntos, podemos construir
                            uma Parceria de Sucesso!
                        </h2>
                    </div>
                    <div>
                        <Button className="bg-lime-500 gap-4 px-12 py-4 hover:bg-lime-600">
                            <BsWhatsapp size={24}/>
                            Fale com um especialista
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3">
                        <Image
                            width={3}
                            height={130}
                            src="/images/barra_pequena.png"
                            alt="Imagem de uma forma geométrica num formato de uma barra"
                        />

                        <div>
                            <div>
                                <h3 className="text-gr-blue-primary pb-2 font-semibold text-xl">
                                    Precisando de uma consultoria contábil?
                                </h3>
                                <p className="font-mono font-normal text-base text-gr-text-base">
                                    Nossa abordagem vai além de uma contabilidade convencional,
                                    que se limita a escriturações e geração de guias de impostos.
                                    Atuamos de forma consultiva e digital, priorizando a gestão
                                    estratégica da sua empresa.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 pt-5">
                        <Image
                            width={3}
                            height={130}
                            src="/images/barra_pequena.png"
                            alt="Imagem de uma forma geométrica num formato de uma barra"
                        />

                        <div>
                            <div>
                                <h3 className="text-gr-blue-primary pb-2 font-semibold text-xl">
                                    Precisando de um apoio financeiro especializado?
                                </h3>
                                <p className="font-mono font-normal text-base text-gr-text-base">
                                    O setor financeiro é o coração das operações e nós fornecemos um
                                    acompanhamento próximo e profissional, permitindo que sua equipe
                                    se concentre nas atividades principais do negócio.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 pt-5">
                        <Image
                            width={3}
                            height={260}
                            src="/images/barra_grande.png"
                            alt="Imagem de uma forma geométrica num formato de uma barra"
                        />

                        <div>
                            <div>
                                <h3 className="text-gr-blue-primary pb-2 font-semibold text-xl">
                                    Precisando aumentar a lucratividade de sua empresa?
                                </h3>
                                <p className="font-mono font-normal text-base text-gr-text-base">
                                    A alta carga tributária afeta diretamente a margem de lucro das empresas.
                                    Sabendo disso, oferecemos soluções eficazes por meio de um planejamento
                                    tributário estratégico, visando aumentar a competitividade frente aos concorrentes.
                                </p>
                                <p className="font-mono font-normal text-base text-gr-text-base py-3">
                                    Nossa abordagem especializada identifica oportunidades legais para otimizar
                                    a carga tributária, permitindo que sua empresa mantenha uma margem de
                                    lucro saudável e conquiste uma posição mais vantajosa no mercado.
                                </p>
                                <p className="font-mono font-normal text-base text-gr-text-base">
                                    Com nossa expertise, você poderá enfrentar os desafios fiscais de maneira
                                    inteligente e impulsionar o crescimento sustentável do seu negócio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}