import Image from 'next/image';
import background from 'public/back-full-face.jpeg';

const UltraformerInfo = () => {
  const areasTratadas = [
    { 
      title: "Lifting Facial", 
      description: "Tratamento de flacidez facial, proporcionando efeito lifting imediato e progressivo com ultrassom microfocado." 
    },
    { 
      title: "Lifting Corporal", 
      description: "Redução da flacidez corporal em áreas como abdômen, braços, coxas e glúteos, melhorando o contorno da pele." 
    },
    { 
      title: "Redução de Gordura Localizada", 
      description: "Diminuição da gordura localizada, especialmente em áreas como papada, flancos e abdômen." 
    },
    { 
      title: "Flacidez Pós-Emagrecimento", 
      description: "Tratamento eficaz para melhorar a firmeza da pele após grandes perdas de peso, proporcionando uma pele mais tonificada." 
    }
  ];

  return (
    <section id="procedimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que é o
            <span className="text-[#fa1571] font-semibold"> Ultraformer</span>?
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              O <strong>Ultraformer</strong> é um tratamento não-invasivo que utiliza tecnologia de ultrassom microfocado para combater a flacidez e promover o rejuvenescimento da pele. Ele age profundamente nas camadas da pele para estimular a produção de colágeno, melhorando a firmeza e o contorno facial e corporal.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com resultados rápidos e duradouros, o Ultraformer é uma excelente opção para quem busca melhorar a textura e elasticidade da pele, sem a necessidade de cirurgia ou recuperação prolongada.
            </p>
            <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8 border border-[#fa1571]/20">
              <h3 className="text-2xl font-bold text-black mb-4">Diferenciais Exclusivos:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Tecnologia de ultrassom microfocado para resultados profundos e duradouros
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Sem cortes, sem downtime e recuperação rápida
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Protocolo personalizado para cada área e tipo de pele
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Resultados visíveis já após a primeira sessão
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Tecnologia segura e eficaz, aprovada pela ANVISA e FDA
                </li>
              </ul>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={background}
                alt="Tratamento com Ultraformer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Áreas tratadas */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            Áreas e Indicações Tratadas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasTratadas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-[#fa1571]/10"
              >
                <h4 className="text-xl font-bold text-[#fa1571] mb-3">{area.title}</h4>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltraformerInfo;
