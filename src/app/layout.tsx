import { Header } from "./components/header";
import "./globals.css";
import { Poppins, Nunito } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500"],
});

export const metadata = {
  title: "GR Assessoria Contábil | Escritório de Contabilidade",
  description:
    "A GR Assessoria Contábil, estabelecida em 2013, tem desempenhado um papel fundamental na prosperidade e continuidade dos empreendimentos de nossos clientes, abrangendo diversas áreas de atuação. Graças à nossa ampla experiência adquirida ao longo dos anos, temos sido capazes de oferecer uma contribuição valiosa para o êxito dos negócios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${nunito.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
