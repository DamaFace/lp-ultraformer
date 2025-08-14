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
  title: 'DamaFace Vinhedo – Laser Lavieen em Vinhedo/SP | Rejuvenescimento, Firmeza e Pele Renovada',
  description: 'DamaFace Vinhedo/SP — clínica referência em tratamentos com Laser Lavieen. Reduza manchas, melhore a textura, firmeza e luminosidade da pele com tecnologia avançada. Resultados naturais e eficazes para todos os tipos de pele. Mais de 8 anos de experiência e +3.000 procedimentos realizados. Agende sua avaliação e conquiste pele jovem, firme e revitalizada!',
  keywords: 'Laser Lavieen Vinhedo, rejuvenescimento de pele Vinhedo, redução de manchas Vinhedo, firmeza da pele Vinhedo, textura da pele, clínica estética Vinhedo, DamaFace, estímulo de colágeno, tratamento seguro Laser Lavieen, pele renovada e luminosa',
  openGraph: {
    title: 'DamaFace Vinhedo – Tratamentos com Laser Lavieen',
    description: 'Clínica especializada em Laser Lavieen em Vinhedo/SP. Melhore a firmeza, textura e luminosidade da pele, reduza manchas e estimule o colágeno com tecnologia avançada. Resultados naturais e duradouros. Agende sua avaliação na DamaFace!',
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
