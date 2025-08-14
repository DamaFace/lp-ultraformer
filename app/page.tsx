import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carrossel from '@/components/Carrossel';
import Depoimentos from '@/components/Depoimentos';
import BioestimuladorInfo from '@/components/BioestimuladorInfo';
import PorqueEscolher from '@/components/PorqueEscolher';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget/ChatWidget';

export const metadata = {
  title: 'DamaFace Vinhedo – Bioestimulador de Colágeno em Vinhedo/SP | Pele Firme e Jovem',
  description: 'DamaFace em Vinhedo/SP — referência em bioestimulador de colágeno para estimular a produção natural da pele, melhorar a firmeza, suavizar rugas e prevenir o envelhecimento. +8 anos de experiência e +3.000 procedimentos realizados. Resultados naturais e duradouros com segurança. Agende sua avaliação!',
  keywords: 'bioestimulador de colágeno Vinhedo, estimular colágeno pele, tratamento flacidez Vinhedo, firmeza da pele, rejuvenescimento facial, suavizar rugas, clínica estética Vinhedo, harmonização facial, DamaFace',
  openGraph: {
    title: 'DamaFace Vinhedo – Bioestimulador de Colágeno',
    description: 'Clínica especializada em bioestimulador de colágeno em Vinhedo/SP. Procedimento seguro e eficaz para estimular o colágeno, melhorar a firmeza e prevenir o envelhecimento. Agende sua avaliação!',
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
      <BioestimuladorInfo />
      <PorqueEscolher />
      <FAQ />
      <Footer />
    </main>
  );
}
