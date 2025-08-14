import labialAntes1 from '@/assets/ante-x-depois-img/labial-1.1.png'
import labialDepois1 from '@/assets/ante-x-depois-img/labial-1.2.png'
import labialAntes2 from '@/assets/ante-x-depois-img/labial-2.1.png'
import labialDepois2 from '@/assets/ante-x-depois-img/labial-2.2.png'
import labialAntes3 from '@/assets/ante-x-depois-img/labial-3.1.png'
import labialDepois3 from '@/assets/ante-x-depois-img/labial-3.2.png'
import labialAntes4 from '@/assets/ante-x-depois-img/labial-4.1.png'
import labialDepois4 from '@/assets/ante-x-depois-img/labial-4.2.png'

// Dados para o carrossel (antes x depois)
export const carrosselData = [
  {
    id: 1,
    imagem_antes_url: labialAntes1.src,
    imagem_depois_url: labialDepois1.src,
    legenda: "Transformação suave e natural com preenchimento labial"
  },
  {
    id: 2,
    imagem_antes_url: labialAntes2.src,
    imagem_depois_url: labialDepois2.src,
    legenda: "Harmonização completa realçando a beleza natural"
  },
  {
    id: 3,
    imagem_antes_url: labialAntes3.src,
    imagem_depois_url: labialDepois3.src,
    legenda: "Resultado equilibrado e sofisticado"
  },
    {
    id: 4,
    imagem_antes_url: labialAntes4.src,
    imagem_depois_url: labialDepois4.src,
    legenda: "Resultado equilibrado e sofisticado"
  }
];

// dados para os depoimentos 
export const depoimentosData = [
  {
    id: 1,
    nome_paciente: "Ana F.",
    foto_paciente_url: labialDepois1.src,
    depoimento: "Sempre quis me livrar dos pelos de forma definitiva. Depois do tratamento de depilação a laser na DamaFace, minha pele ficou lisa, suave e sem irritações."
  },
  {
    id: 2,
    nome_paciente: 'Ana Maria',
    foto_paciente_url: labialDepois2.src,
    depoimento: "Eu tinha pelos encravados e irritações constantes. Após a depilação a laser na DamaFace, minha pele ficou muito mais uniforme e confortável, sem pelos indesejados."
  },
  {
    id: 3,
    nome_paciente: "Luiza",
    foto_paciente_url: labialDepois3.src,
    depoimento: "A depilação a laser na DamaFace superou minhas expectativas. O resultado é natural, duradouro e minha pele ficou impecavelmente lisa, sem esforço diário."
  }
];

// Dados para a seção "Por que escolher a DamaFace?"
export const diferenciaisData = [
  {
    id: 1,
    titulo: "Naturalidade e Exclusividade",
    descricao: "Cada procedimento é personalizado para valorizar seus traços únicos — sem exageros, apenas realçando o que há de melhor em você."
  },
  {
    id: 2,
    titulo: "Segurança e Qualidade",
    descricao: "Utilizamos produtos certificados pela ANVISA e aplicamos técnicas avançadas para garantir sua segurança em todas as etapas."
  },
  {
    id: 3,
    titulo: "Experiência Comprovada",
    descricao: "Mais de 8 anos de experiência e 2.500 pacientes satisfeitos atestam nossa credibilidade."
  },
  {
    id: 4,
    titulo: "Acompanhamento Personalizado",
    descricao: "Cuidamos de você antes, durante e depois do procedimento para garantir sua total satisfação."
  }
];

export const faqData = [
  {
    id: 1,
    pergunta: "A depilação a laser dói?",
    resposta: "A depilação a laser na DamaFace é praticamente indolor. Utilizamos tecnologia avançada e sistema de resfriamento para reduzir qualquer desconforto, garantindo um procedimento seguro e confortável."
  },
  {
    id: 2,
    pergunta: "Quantas sessões de depilação a laser são necessárias?",
    resposta: "O número de sessões depende do tipo de pele, cor do pelo e área tratada. Em média, indicamos de 6 a 8 sessões para resultados duradouros, sempre com avaliação personalizada na DamaFace."
  },
  {
    id: 3,
    pergunta: "A depilação a laser é definitiva?",
    resposta: "A depilação a laser reduz significativamente o crescimento dos pelos, oferecendo resultados duradouros. Alguns pelos podem crescer novamente, mas em menor quantidade e mais finos, mantendo a pele lisa e uniforme."
  },
  {
    id: 4,
    pergunta: "Qual é o tempo de recuperação após a depilação a laser?",
    resposta: "Não há tempo de recuperação. Você pode retomar suas atividades normalmente. É recomendado evitar exposição solar direta e produtos agressivos na área tratada por 24 a 48 horas."
  },
  {
    id: 5,
    pergunta: "A depilação a laser é segura para todos os tipos de pele?",
    resposta: "Sim. Na DamaFace utilizamos equipamentos de última geração que podem ser ajustados para diferentes tipos de pele, garantindo segurança, eficácia e resultados naturais."
  },
  {
    id: 6,
    pergunta: "Posso fazer depilação a laser em áreas sensíveis?",
    resposta: "Sim. A depilação a laser na DamaFace é indicada para todas as áreas do corpo, incluindo regiões sensíveis, sempre com protocolos específicos para conforto e segurança."
  },
  {
    id: 7,
    pergunta: "Quanto tempo dura cada sessão de depilação a laser?",
    resposta: "O tempo de cada sessão varia conforme a área tratada. Pequenas regiões podem levar 15 a 20 minutos, enquanto áreas maiores podem durar até 60 minutos, sempre com atendimento personalizado na DamaFace."
  },
  {
    id: 8,
    pergunta: "Quais cuidados devo ter antes da depilação a laser?",
    resposta: "Evite exposição solar, bronzeamento artificial e depilação com cera ou pinça nas semanas que antecedem a sessão. Na DamaFace, orientamos cada paciente com instruções claras para potencializar resultados e segurança."
  },
  {
    id: 9,
    pergunta: "Quais cuidados devo ter após a depilação a laser?",
    resposta: "Após a sessão, recomenda-se hidratar a pele, evitar sol e calor excessivo e não utilizar produtos agressivos. Seguindo essas orientações, os resultados da depilação a laser serão mais duradouros e confortáveis."
  },
  {
    id: 10,
    pergunta: "A depilação a laser funciona para homens e mulheres?",
    resposta: "Sim. A depilação a laser na DamaFace é eficaz para todos os gêneros, podendo ser aplicada em diversas regiões do corpo, proporcionando pele lisa, suave e sem pelos de forma segura e duradoura."
  }
];

export const unidadesData = [
  { value: "vinhedo", label: "Unidade 1 - Vinhedo" },
  { value: "jaguariuna", label: "Unidade 2 - Jaguariúna" },
  { value: "cerquilho", label: "Unidade 3 - Cerquilho" }
];
