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
  title: 'DamaFace Vinhedo – Botox e Toxina Botulínica em Vinhedo/SP | Clínica Especializada',
  description: 'DamaFace em Vinhedo/SP — referência em aplicação de Botox e toxina botulínica para suavizar rugas e linhas de expressão. +8 anos de experiência, +3.000 procedimentos realizados. Rejuvenesça com segurança e naturalidade. Agende sua avaliação!',
  keywords: 'botox Vinhedo, toxina botulínica Vinhedo, aplicação de botox, rugas e linhas de expressão, botox testa, botox pés de galinha, clínica estética Vinhedo, rejuvenescimento facial, DamaFace',
  openGraph: {
    title: 'DamaFace Vinhedo – Botox e Toxina Botulínica',
    description: 'Clínica especializada em aplicação de Botox em Vinhedo/SP. Tratamento seguro e natural para suavizar rugas e marcas de expressão. Agende sua avaliação!',
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
