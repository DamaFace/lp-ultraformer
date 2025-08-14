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
  title: 'DamaFace Vinhedo – Depilação a Laser em Vinhedo/SP | Pele Lisa, Suave e Sem Pelos',
  description: 'DamaFace em Vinhedo/SP — referência em depilação a laser com tecnologia avançada para remover pelos de forma rápida, segura e duradoura. Mais de 8 anos de experiência e +3.000 procedimentos realizados com resultados naturais. Agende sua avaliação e conquiste pele lisa!',
  keywords: 'depilação a laser Vinhedo, remoção de pelos Vinhedo, laser para pelos, depilação definitiva, clínica estética Vinhedo, DamaFace, pele lisa sem pelos, tratamento seguro depilação, depilação a laser feminina e masculina',
  openGraph: {
    title: 'DamaFace Vinhedo – Depilação a Laser',
    description: 'Clínica especializada em depilação a laser em Vinhedo/SP. Remoção segura e duradoura de pelos para pele lisa, suave e natural. Resultados rápidos e eficazes com tecnologia avançada. Agende sua avaliação!',
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
