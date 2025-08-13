import Image from 'next/image';
import background from 'public/back-full-face.jpeg';

const LabialInfo = () => {
  const areas = [
    {
      title: "Lábios",
      description: "Realce do volume, definição do contorno e harmonização com o restante do rosto, garantindo um resultado equilibrado e natural."
    }
  ];

  return (
    <section id="procedimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que é
            <span className="text-[#fa1571] font-semibold"> Preenchimento Labial</span>?
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              O preenchimento labial é um procedimento estético minimamente invasivo que realça o volume, o contorno
              e a simetria dos lábios, proporcionando um sorriso mais harmonioso e atraente. 
              Além de aumentar o volume, o tratamento também melhora a hidratação e a textura da pele labial.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com aplicação rápida e praticamente indolor, o preenchimento labial oferece resultados imediatos,
              mantendo a naturalidade e respeitando a beleza única de cada paciente.
            </p>

            <div className="bg-[#ededed] rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Aumenta o volume dos lábios
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Define o contorno labial
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Corrige pequenas assimetrias
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Melhora a hidratação e a textura dos lábios
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                    Procedimento rápido e minimamente invasivo
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
            Principal Área Tratada com Preenchimento Labial Lábios
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

export default LabialInfo;
