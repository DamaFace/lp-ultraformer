import Image from 'next/image';
import background from 'public/back-full-face.jpeg';

const BioestimuladorInfo = () => {
const areas = [
  {
    title: "Rosto",
    description: "Estimula a produção natural de colágeno, melhorando a firmeza, a elasticidade e suavizando rugas e linhas de expressão para um rejuvenescimento facial natural."
  },
  {
    title: "Pescoço",
    description: "Reduz a flacidez e melhora a textura da pele do pescoço, proporcionando uma aparência mais jovem e harmoniosa."
  },
  {
    title: "Colo",
    description: "Ameniza linhas finas, manchas e sinais de envelhecimento, deixando a pele do colo mais lisa, hidratada e uniforme."
  },
  {
    title: "Braços",
    description: "Combate a flacidez e melhora o tônus da pele dos braços, recuperando a firmeza e suavidade."
  },
  {
    title: "Mãos",
    description: "Reduz sinais de envelhecimento, melhora a qualidade da pele e devolve o aspecto jovial às mãos."
  }
];

  return (
    <section id="procedimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que é
            <span className="text-[#fa1571] font-semibold"> Bioestimulador de colágeno</span>?
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              O <strong>bioestimulador de colágeno</strong> é um tratamento estético minimamente invasivo que ativa a 
              produção natural de colágeno na pele, promovendo <strong>firmeza, elasticidade e rejuvenescimento facial</strong>. 
              É ideal para reduzir flacidez, suavizar rugas e linhas de expressão, além de melhorar o contorno do rosto e pescoço.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Com aplicação rápida e praticamente indolor, o <strong>bioestimulador de colágeno</strong> proporciona 
              resultados progressivos e duradouros, garantindo uma aparência natural e saudável. 
              O procedimento estimula a regeneração da pele de dentro para fora, respeitando a beleza única de cada paciente.
            </p>
            <div className="bg-[#ededed] rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Principais Benefícios:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Rejuvenesce a pele de dentro para fora
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Aumenta firmeza, elasticidade e viço natural
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Suaviza rugas finas e melhora textura
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                  Resultados gradativos, naturais e com longa duração
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#fa1571] rounded-full mr-3"></div>
                    Procedimento seguro e minimamente invasivo
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
            Principais Áreas Tratadas com Bioestimulador de colágeno.
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

export default BioestimuladorInfo;
