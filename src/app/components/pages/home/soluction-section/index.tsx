import { BsCalculator, BsGraphUp, BsPercent } from 'react-icons/bs'
import { MdSecurity, MdOutlineWorkHistory } from 'react-icons/md'
import { GoLaw } from 'react-icons/go'
import { Card } from "@/app/components/card"
import { HeaderTitle } from "@/app/components/header-title"

export const SoluctionSection = () => {
    return (
        <section className="py-32 w-full h-[810px] bg-gr-blue-primary">
            <div className="container">
                <div className="text-white">
                    <HeaderTitle
                        title="Nosso Ecosistema"
                    />
                </div>
                <h1 className="w-2/5 pt-3 text-white font-semibold text-3xl pb-8">
                    Temos a Solução completa
                    para o seu negócio.
                </h1>

                <div className='grid grid-cols-3 gap-4'>
                    <Card card={{
                        icon: <BsCalculator size={28} />,
                        title: 'Contábil',
                        text: 'Processamos a contabilidade, elaboramos demonstrações financeiras e atendemos declarações e auditorias, garantindo uma gestão eficiente e confiável para as empresas.'

                    }}

                    />

                    <Card card={{
                        icon: <BsGraphUp size={28} />,
                        title: 'Tributária',
                        text: 'Realizamos tarefas burocráticas, como obrigações acessórias, e oferece serviços para redução da carga tributária.'

                    }}

                    />

                    <Card card={{
                        icon: <MdOutlineWorkHistory size={28} />,
                        title: 'Trabalhista',
                        text: 'Nós realizamos todas as rotinas do departamento pessoal, tais como cálculo de folha de pagamento, registros dos funcionários, entre outras.'

                    }}

                    />
                    <Card card={{
                        icon: <MdSecurity size={28} />,
                        title: 'Certificado Digital',
                        text: 'Fornecemos também seu certificado digital com diferentes validades, trazendo toda a praticidade e seguraça.'

                    }}

                    />

                    <Card card={{
                        icon: <BsPercent size={28} />,
                        title: 'Imposto de Renda',
                        text: 'Fazemos sua declaração de Imposto de Renda para pessoas físicas e jurídicas. Conte com nossa expertise para garantir precisão e conformidade com a legislação fiscal.'

                    }}

                    />

                    <Card card={{
                        icon: <GoLaw size={28} />,
                        title: 'Abertura de Empresa',
                        text: 'Serviços especializados em abertura de empresas, orientando você em todos os passos do processo, desde a escolha do tipo de empresa até o registro e regularização. '

                    }}

                    />
                </div>


            </div>
        </section>
    )
}