import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carrossel from '@/components/Carrossel';
import Depoimentos from '@/components/Depoimentos';
import UltraformerInfo from '@/components/UltraformerInfo';
import PorqueEscolher from '@/components/PorqueEscolher';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget/ChatWidget';

export const metadata = {
  title: 'DamaFace Vinhedo – Ultraformer em Vinhedo/SP | Lifting Facial, Firmeza e Pele Renovada',
  description: 'DamaFace Vinhedo/SP — clínica referência em tratamentos com Ultraformer. Proporcione lifting facial, firmeza, definição de contornos e rejuvenescimento da pele com tecnologia avançada de ultrassom microfocado. Resultados naturais, eficazes e duradouros. Mais de 8 anos de experiência e +3.000 procedimentos realizados. Agende sua avaliação e conquiste pele firme, jovem e revitalizada!',
  keywords: 'Ultraformer Vinhedo, lifting facial Vinhedo, firmeza da pele Vinhedo, rejuvenescimento facial, definição de contorno facial, clínica estética Vinhedo, DamaFace, ultrassom microfocado, resultados naturais Ultraformer, tratamento seguro lifting facial',
  openGraph: {
    title: 'DamaFace Vinhedo – Tratamentos com Ultraformer',
    description: 'Clínica especializada em Ultraformer em Vinhedo/SP. Melhore firmeza, contornos faciais e rejuvenescimento da pele com tecnologia de ultrassom microfocado. Resultados naturais, eficazes e duradouros. Agende sua avaliação na DamaFace!',
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
      <UltraformerInfo />
      <PorqueEscolher />
      <FAQ />
      <Footer />
    </main>
  );
}
