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
            </div>
        </section>
    )
}