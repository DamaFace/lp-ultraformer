import Image from 'next/image';
import background from 'public/back-full-face.jpeg';
const LaserLavieenInfo = () => {
  const areasTratadas = [
    { 
      title: "Rejuvenescimento Facial", 
      description: "Estimulação de colágeno para redução de rugas e linhas de expressão com tecnologia Lavieen." 
    },
    { 
      title: "Tratamento de Melasma", 
      description: "Clareamento de manchas faciais com ação profunda e resultados duradouros." 
    },
    { 
      title: "Terapia Capilar", 
      description: "Estímulo ao crescimento saudável dos fios e tratamento de alopécia." 
    },
    { 
      title: "Redução de Poros", 
      description: "Minimização do tamanho dos poros e controle de oleosidade." 
    },
    { 
      title: "Uniformização do Tom", 
      description: "Correção de discromias e vermelhidão para pele homogênea." 
    },
    { 
      title: "Pescoço e Colo", 
      description: "Rejuvenescimento da área cervical e décolleté com tecnologia não-abrasiva." 
    },
    { 
      title: "Mãos", 
      description: "Tratamento antienvelhecimento para áreas de pele fina e delicada." 
    },
    { 
      title: "Corpo Inteiro", 
      description: "Estímulo de colágeno para firmeza e textura uniforme em todas as áreas." 
    }
  ];

  return (
    <section id="procedimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que é o
            <span className="text-[#0066cc] font-semibold"> Laser Lavieen</span>?
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              O <strong>Laser Lavieen</strong> é uma tecnologia <strong>não-invasiva</strong> que combina diferentes comprimentos de onda para tratamentos dermatológicos de alta precisão. Diferente dos lasers convencionais, atua de forma <strong>personalizada</strong> em cada tipo de pele e condição específica.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com <strong>resultados cientificamente comprovados</strong>, o Lavieen oferece soluções completas para rejuvenescimento, uniformização da pele e tratamentos capilares, sem downtime e com máxima segurança.
            </p>
            <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8 border border-[#0066cc]/20">
              <h3 className="text-2xl font-bold text-black mb-4">Diferenciais Exclusivos:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></div>
                  Tecnologia patenteada com múltiplos comprimentos de onda
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></div>
                  Zero dor e zero recuperação (sem downtime)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></div>
                  Protocolos personalizados para cada necessidade
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></div>
                  Resultados visíveis desde a primeira sessão
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></div>
                  Aprovado pela ANVISA e FDA para diversos tratamentos
                </li>
              </ul>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={background}
                alt="Tratamento com Laser Lavieen"
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
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-[#0066cc]/10"
              >
                <h4 className="text-xl font-bold text-[#0066cc] mb-3">{area.title}</h4>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaserLavieenInfo;
