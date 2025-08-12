import Image from 'next/image';
import background from '@/assets/back-full-face.jpeg';

const BotoxInfo = () => {
  const areas = [
    {
      title: "Testa",
      description: "Suavização das linhas horizontais causadas pela contração repetitiva dos músculos da testa."
    },
    {
      title: "Glabela",
      description: "Redução das linhas de expressão entre as sobrancelhas, conhecidas como rugas de preocupação."
    },
    {
      title: "Pés de Galinha",
      description: "Amenização das linhas ao redor dos olhos, proporcionando um olhar mais jovem e descansado."
    },
    {
      title: "Sorriso Gengival",
      description: "Correção da exposição excessiva da gengiva ao sorrir, para um sorriso mais harmônico."
    }
  ];

  return (
    <section id="procedimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que é Botox / Toxina Botulínica?
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              O Botox, ou toxina botulínica, é um tratamento estético minimamente invasivo que suaviza rugas e linhas de expressão
              causadas pela movimentação muscular, prevenindo e tratando sinais do envelhecimento.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com aplicação rápida e praticamente indolor, o Botox devolve frescor e juventude ao rosto,
              mantendo a naturalidade e respeitando a expressão individual de cada paciente.
            </p>

            <div className="bg-[#ededed] rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Suaviza rugas e linhas de expressão
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Previne o aparecimento de novos sinais de envelhecimento
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Procedimento rápido e minimamente invasivo
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Resultados naturais e temporários (reversíveis)
                </li>
              </ul>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={background}
                alt="Aplicação de Botox / Toxina Botulínica"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Áreas tratadas */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Principais Áreas Tratadas com Botox
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-[#ededed] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
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
