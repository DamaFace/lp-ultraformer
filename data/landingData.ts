import botoxAntes1 from '@/assets/ante-x-depois-img/botox-1.1.jpg'
import botoxDepois1 from '@/assets/ante-x-depois-img/botox-1.2.jpg'
import botoxAntes2 from '@/assets/ante-x-depois-img/botox-2.1.jpg'
import botoxDepois2 from '@/assets/ante-x-depois-img/botox-2.2.jpg'
import botoxAntes3 from '@/assets/ante-x-depois-img/botox-3.1.jpg'
import botoxDepois3 from '@/assets/ante-x-depois-img/botox-3.2.jpg'

// Dados para o carrossel (antes x depois)
export const carrosselData = [
  {
    id: 1,
    imagem_antes_url: botoxAntes1.src,
    imagem_depois_url: botoxDepois1.src,
    legenda: "Transformação suave e natural com preenchimento labial"
  },
  {
    id: 2,
    imagem_antes_url: botoxAntes2.src,
    imagem_depois_url: botoxDepois3.src,
    legenda: "Harmonização completa realçando a beleza natural"
  },
  {
    id: 3,
    imagem_antes_url: botoxAntes3.src,
    imagem_depois_url: botoxDepois3.src,
    legenda: "Resultado equilibrado e sofisticado"
  }
];
// dados para os depoimentos 
export const depoimentosData = [
  {
    id: 1,
    nome_paciente: "Ana F.",
    foto_paciente_url: botoxDepois1.src,
    depoimento: "Sempre quis ter lábios mais definidos e volumosos, mas sem perder a naturalidade. O preenchimento labial que fiz na DamaFace superou minhas expectativas. Ficou perfeito!"
  },
  {
    id: 2,
    nome_paciente: 'Ana Maria',
    foto_paciente_url: botoxDepois1.src,
    depoimento: "Meus lábios eram muito finos e sem contorno. Após o preenchimento labial na DamaFace, ganhei volume e hidratação. Agora me sinto muito mais confiante para sorrir."
  },
  {
    id: 3,
    nome_paciente: "Luiza",
    foto_paciente_url: botoxDepois1.src,
    depoimento: "O preenchimento labial que fiz na DamaFace ficou extremamente natural. A equipe foi atenciosa, explicou todo o processo e o resultado ficou harmonioso com meu rosto."
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
    pergunta: "O preenchimento labial dói?",
    resposta: "O preenchimento labial é realizado com agulhas ou cânulas finas e geralmente causa apenas um leve desconforto. Utilizamos anestesia local para garantir o máximo de conforto durante todo o procedimento."
  },
  {
    id: 2,
    pergunta: "Quanto tempo dura o efeito do preenchimento labial?",
    resposta: "A duração média do preenchimento labial é de 8 a 12 meses, podendo variar conforme o metabolismo individual, o tipo de ácido hialurônico utilizado e os cuidados pós-procedimento."
  },
  {
    id: 3,
    pergunta: "Quando vejo o resultado do preenchimento labial?",
    resposta: "Os resultados do preenchimento labial são visíveis imediatamente após a aplicação, mas o efeito final é percebido após cerca de 7 dias, quando o inchaço inicial diminui."
  },
  {
    id: 4,
    pergunta: "Qual é o tempo de recuperação após o preenchimento labial?",
    resposta: "A recuperação do preenchimento labial é rápida. Pequenos inchaços ou hematomas podem ocorrer, mas desaparecem em poucos dias. É recomendado evitar exercícios físicos intensos e exposição ao sol nas primeiras 24 horas."
  },
  {
    id: 5,
    pergunta: "O preenchimento labial é seguro?",
    resposta: "Sim, desde que realizado por profissionais qualificados e utilizando produtos aprovados pela Anvisa. Na DamaFace seguimos protocolos rigorosos para garantir sua segurança e resultados naturais."
  },
  {
    id: 6,
    pergunta: "Preciso fazer exames antes de realizar o preenchimento labial?",
    resposta: "Na maioria dos casos não há necessidade de exames prévios. Realizamos uma avaliação completa para entender seus objetivos e verificar se o preenchimento labial é indicado para você."
  }
];

export const unidadesData = [
  { value: "vinhedo", label: "Unidade 1 - Vinhedo" },
  { value: "jaguariuna", label: "Unidade 2 - Jaguariúna" },
  { value: "cerquilho", label: "Unidade 3 - Cerquilho" }
];
