import Image from 'next/image';
import background from 'public/back-full-face.jpeg';

const GluteoInfo = () => {
const areas = [
  {
    title: "Glúteos",
    description: "Aumenta o volume, define o contorno e corrige assimetrias, proporcionando um lifting natural e resultados harmoniosos. Melhora a firmeza e elasticidade da região glútea com técnicas de bioestimulação ou preenchimento."
  }
];

  return (
    <section id="procedimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que é
            <span className="text-[#fa1571] font-semibold"> Harmonização de Glúteos</span>?
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A <strong>harmonização de glúteos</strong> é um conjunto de técnicas estéticas avançadas que visam <strong>aumentar volume, definir o contorno e corrigir assimetrias</strong>, proporcionando uma silhueta mais equilibrada e natural. Utilizando preenchimentos com ácido hialurônico ou bioestimuladores de colágeno, o procedimento modela os glúteos sem necessidade de cirurgia.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com técnicas minimamente invasivas e resultados imediatos ou progressivos (no caso dos bioestimuladores), a harmonização glútea oferece <strong>efeitos naturais e personalizados</strong>. O procedimento é realizado por médicos especialistas em estética corporal, garantindo segurança e um acabamento que respeita a anatomia natural de cada paciente.
            </p>
            <div className="bg-[#ededed] rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Aumento de volume imediato ou progressivo (dependendo da técnica)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Correção de assimetrias e melhora da proporção corporal
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Lifting e definição do contorno glúteo
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Resultados naturais e harmoniosos com o biótipo do paciente
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Procedimento seguro, com recuperação rápida e mínimos incômodos
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
            Principal Área Tratada com Harmonização de Glúteos.
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

export default GluteoInfo;
