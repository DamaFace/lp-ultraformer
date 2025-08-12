import { Heart, Shield, Users, Smile, Star, Eye, MapPin, Feather, Gift, Award, Anchor, Zap, Sparkle } from 'lucide-react';
import Image from 'next/image';
import  background  from '@/assets/back-full-face.jpeg'

const BotoxInfo = () => {
  const areas = [
    {
      icon: Star, 
      title: "Tempora",
      description: "Preenchimento e definição para a região das têmporas, trazendo volume e suavidade."
    },
    {
      icon: MapPin,
      title: "Malar",
      description: "Realce das maçãs do rosto para um aspecto mais jovem e harmônico."
    },
    {
      icon: Eye,
      title: "Olheira",
      description: "Tratamento para suavizar olheiras, melhorando o aspecto de cansaço."
    },
    {
      icon: Feather,
      title: "Rinomodelação",
      description: "Modelagem do nariz sem cirurgia, corrigindo imperfeições e equilibrando o perfil."
    },
    {
      icon: Zap,
      title: "Bigode Chinês",
      description: "Preenchimento das linhas ao redor da boca para suavizar marcas e rugas."
    },
    {
      icon: Heart,
      title: "Lábios",
      description: "Preenchimento e contorno para lábios mais definidos e harmoniosos."
    },
    {
      icon: Sparkle,
      title: "Código de Barras",
      description: "Correção das linhas finas acima dos lábios para um visual mais suave."
    },
    {
      icon: Gift,
      title: "Marionete",
      description: "Suavização das linhas que descem dos cantos da boca para um aspecto mais leve."
    },
    {
      icon: Anchor,
      title: "Mento",
      description: "Contorno e definição do queixo para melhorar o equilíbrio facial."
    },
    {
      icon: Award,
      title: "Pré-jowls",
      description: "Atenuação das irregularidades na linha da mandíbula para um contorno mais limpo."
    },
    {
      icon: Shield,
      title: "Mandíbula",
      description: "Definição e contorno para um perfil mais marcante e equilibrado."
    },
    {
      icon: Smile,
      title: "Rugas / Linhas de Expressão",
      description: "Tratamento para reduzir rugas e linhas, devolvendo suavidade à pele."
    },
  ];

  return (
    <section id="procedimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que é a
            <span className="text-[#fa1571]"> Harmonização Facial Full Face?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A Harmonização Facial Full Face é um conjunto de procedimentos estéticos não cirúrgicos que realça e
              equilibra os traços naturais do rosto, criando um resultado harmonioso, sutil e elegante.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com técnicas avançadas e produtos de alta qualidade, nossos especialistas atendem homens e mulheres
              que desejam um visual mais jovem e equilibrado — sempre respeitando as características únicas de
              cada paciente.
            </p>

            <div className="bg-[#ededed] rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Resultados naturais e proporcionais
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Procedimento minimamente invasivo
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Recuperação rápida
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Aumento da autoestima e confiança
                </li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={background}
                alt="Harmonização Facial Full Face"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Areas Tratadas */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Principais Áreas Tratadas
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-[#ededed] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                
                <h4 className="text-xl font-bold text-black mb-4">{area.title}</h4>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotoxInfo;
