import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carrossel from '@/components/Carrossel';
import Depoimentos from '@/components/Depoimentos';
import GluteoInfo from '@/components/GluteoInfo';
import PorqueEscolher from '@/components/PorqueEscolher';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget/ChatWidget';

export const metadata = {
  title: 'DamaFace Vinhedo – Harmonização de Glúteos em Vinhedo/SP | Mais Volume, Forma e Firmeza',
  description: 'DamaFace em Vinhedo/SP — referência em harmonização de glúteos para aumentar o volume, deixar o formato mais arredondado e firme, além de reduzir a flacidez. +8 anos de experiência e +3.000 procedimentos realizados com segurança e resultados naturais. Agende sua avaliação!',
  keywords: 'harmonização de glúteos Vinhedo, aumentar volume do bumbum, glúteos arredondados, tratamento flacidez glúteos, lifting de glúteos, bioestimulador de colágeno glúteos, bumbum firme e redondo, clínica estética Vinhedo, DamaFace',
  openGraph: {
    title: 'DamaFace Vinhedo – Harmonização de Glúteos',
    description: 'Clínica especializada em harmonização de glúteos em Vinhedo/SP. Tratamento seguro para aumentar volume, melhorar formato e firmeza, e reduzir flacidez. Resultados naturais e duradouros. Agende sua avaliação!',
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
      <GluteoInfo />
      <PorqueEscolher />
      <FAQ />
      <Footer />
    </main>
  );
}
