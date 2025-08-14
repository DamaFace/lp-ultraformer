import Image from 'next/image';
import background from 'public/back-full-face.jpeg';

const DepilacaoLaserInfo = () => {
const areasMulheres = [
  { title: "Abdômen", description: "Eliminação definitiva dos pelos abdominais para uma pele lisa e uniforme." },
  { title: "Auréolo", description: "Depilação precisa e segura na região mamária, com tecnologia especializada." },
  { title: "Virilha", description: "Tratamento completo para a região íntima feminina, com máximo conforto e discrição." },
  { title: "Perianal", description: "Depilação higiênica e segura na região posterior íntima." },
  { title: "Orelha", description: "Remoção de pelos indesejados nas orelhas com precisão e segurança." },
  { title: "Axilas", description: "Solução definitiva para pelos axilares, acabando com a irritação da depilação tradicional." },
  { title: "Costas", description: "Eliminação de pelos nas costas para uma pele uniforme e suave." },
  { title: "Nádegas", description: "Depilação completa da região glútea, prevenindo foliculite e pelos encravados." },
  { title: "Meia Perna", description: "Tratamento personalizado para a parte inferior ou superior das pernas." },
  { title: "Perna Inteira", description: "Solução completa para pelos nas pernas, da coxa ao tornozelo." },
  { title: "Buço", description: "Remoção precisa de pelos faciais acima do lábio superior." },
  { title: "Braços", description: "Depilação uniforme de toda a extensão dos braços." },
  { title: "Meio Braço", description: "Tratamento personalizado para parte dos braços conforme necessidade." }
];

const areasHomens = [
  { title: "Barba", description: "Modelagem e redução de pelos na área da barba para contornos mais definidos." },
  { title: "Barba Completa", description: "Tratamento completo para redução de densidade em toda a área facial." },
  { title: "Bigode", description: "Remoção total ou modelagem do bigode conforme preferência." },
  { title: "Tórax", description: "Redução significativa de pelos no peito para uma aparência mais cuidada." },
  { title: "Tórax e Abdômen", description: "Tratamento combinado para região torácica e abdominal." },
  { title: "Axilas", description: "Controle eficaz de pelos axilares, reduzindo odor e transpiração." },
  { title: "Costas", description: "Solução profissional para pelos dorsais indesejados." },
  { title: "Orelha", description: "Remoção de pelos auriculares com tecnologia segura." }
];

  return (
    <section id="procedimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que é
            <span className="text-[#fa1571] font-semibold"> Depilação a Laser</span>?
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A <strong>depilação a laser</strong> é um método avançado que <strong>elimina até 95% dos pelos</strong> de forma segura e eficaz. Utilizando tecnologia de ponta, o laser age diretamente nos folículos capilares, impedindo o crescimento dos pelos sem danificar a pele.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com <strong>resultados visíveis já nas primeiras sessões</strong>, o tratamento oferece uma solução definitiva para quem busca acabar com a depilação tradicional. O procedimento é realizado por especialistas em estética, garantindo segurança e eficácia para todos os tipos de pele.
            </p>
            <div className="bg-[#ededed] rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Redução permanente dos pelos (até 95% de eficácia)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Sem pelos encravados ou foliculite
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Procedimento rápido e praticamente indolor
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Resultados progressivos e duradouros
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Tecnologia segura para todos os tipos de pele
                </li>
              </ul>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={background}
                alt="Depilação a Laser"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Áreas tratadas - Mulheres */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-black mb-6">
            Áreas Tratadas para Mulheres
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {areasMulheres.map((area, index) => (
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

        {/* Áreas tratadas - Homens */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-black mb-6">
            Áreas Tratadas para Homens
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {areasHomens.map((area, index) => (
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

export default DepilacaoLaserInfo;
