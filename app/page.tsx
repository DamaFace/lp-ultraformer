import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carrossel from '@/components/Carrossel';
import Depoimentos from '@/components/Depoimentos';
import BotoxInfo from '@/components/BotoxInfo';
import PorqueEscolher from '@/components/PorqueEscolher';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget/ChatWidget';

export const metadata = {
  title: 'DamaFace Vinhedo – Preenchimento Labial em Vinhedo/SP | Lábios Definidos e Naturais',
  description: 'DamaFace em Vinhedo/SP — referência em preenchimento labial para aumentar volume, definir contorno e hidratar os lábios com naturalidade. +8 anos de experiência e +3.000 procedimentos realizados. Realce sua beleza com segurança. Agende sua avaliação!',
  keywords: 'preenchimento labial Vinhedo, aumentar volume dos lábios, definir contorno labial, hidratação labial, lábios naturais, clínica estética Vinhedo, harmonização facial, DamaFace',
  openGraph: {
    title: 'DamaFace Vinhedo – Preenchimento Labial',
    description: 'Clínica especializada em preenchimento labial em Vinhedo/SP. Procedimento seguro e personalizado para realçar seus lábios com naturalidade. Agende sua avaliação!',
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
