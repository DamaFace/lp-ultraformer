import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carrossel from '@/components/Carrossel';
import Depoimentos from '@/components/Depoimentos';
import DepilacaoLaserInfo from '@/components/DepilacaoLaserInfo';
import PorqueEscolher from '@/components/PorqueEscolher';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget/ChatWidget';

export const metadata = {
  title: 'DamaFace Vinhedo – Depilação a Laser Lavieen em Vinhedo/SP | Pele Lisa e Sem Pelos',
  description: 'DamaFace Vinhedo/SP — clínica referência em depilação a laser Lavieen. Remova pelos de forma segura, rápida e duradoura com tecnologia avançada Lavieen. Resultados naturais e eficazes em todas as áreas do corpo. Mais de 8 anos de experiência e +3.000 procedimentos realizados. Agende sua avaliação e conquiste pele lisa, suave e livre de pelos!',
  keywords: 'depilação a laser Lavieen Vinhedo, depilação definitiva Vinhedo, remoção de pelos Vinhedo, depilação feminina e masculina, clínica estética Vinhedo, DamaFace, laser Lavieen para pelos, pele lisa e suave, tratamento seguro depilação, depilação a laser corpo inteiro',
  openGraph: {
    title: 'DamaFace Vinhedo – Depilação a Laser Lavieen',
    description: 'Clínica especializada em depilação a laser Lavieen em Vinhedo/SP. Remoção segura e duradoura de pelos em todas as áreas do corpo, garantindo pele lisa, suave e natural. Agende sua avaliação e tenha resultados eficazes com tecnologia avançada Lavieen!',
    type: 'website',
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ChatWidget />
      <Carrossel />
      <Depoimentos />
      <DepilacaoLaserInfo />
      <PorqueEscolher />
      <FAQ />
      <Footer />
    </main>
  );
}
