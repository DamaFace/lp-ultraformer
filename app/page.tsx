import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carrossel from '@/components/Carrossel';
import Depoimentos from '@/components/Depoimentos';
import HarmonizacaoInfo from '@/components/BotoxInfo';
import PorqueEscolher from '@/components/PorqueEscolher';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget/ChatWidget';

export const metadata = {
  title: 'DamaFace Vinhedo – Harmonização Facial Full Face em Vinhedo/SP | Clínica Especializada',
  description: 'DamaFace em Vinhedo/SP — referência em harmonização facial e corporal com naturalidade. +8 anos de experiência, +2.500 pacientes satisfeitos. Transforme sua autoestima com técnicas avançadas de Full Face. Agende sua avaliação hoje mesmo!',
  keywords: 'harmonização facial, harmonização corporal, harmonização facial natural, harmonização full face, rejuvenescimento facial, clínica estética Vinhedo, autoestima, DamaFace',
  openGraph: {
    title: 'DamaFace Vinhedo – Harmonização Facial Full Face',
    description: 'Clínica especializada em harmonização facial e corporal em Vinhedo/SP. Resultados naturais com +8 anos de experiência — agende sua avaliação!',
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
      <BotoxInfo />
      <PorqueEscolher />
      <FAQ />
      <Footer />
    </main>
  );
}
