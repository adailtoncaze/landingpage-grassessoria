import { BannerPartnership } from "./components/banners/partnership";
import { HeroSection } from "./components/pages/home/hero-section";
import { PartnershipSection } from "./components/pages/home/partnership-section";
import { SoluctionSection } from "./components/pages/home/soluction-section";


export default function Home() {
  return (
    <>
      <HeroSection />
      <BannerPartnership />
      <PartnershipSection />
      <SoluctionSection />
    </>
  )
}
