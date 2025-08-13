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
export const faqData = [
  {
    id: 1,
    pergunta: "O tratamento com Botox dói?",
    resposta: "A aplicação de Botox é feita com agulhas extremamente finas e provoca apenas um leve desconforto. Podemos utilizar pomada anestésica para garantir maior conforto durante o procedimento."
  },
  {
    id: 2,
    pergunta: "Qual a duração do efeito do Botox para rugas e linhas de expressão?",
    resposta: "O efeito do Botox costuma durar de 4 a 6 meses, variando conforme a área tratada e a resposta individual do organismo."
  },
  {
    id: 3,
    pergunta: "Em quanto tempo vejo o resultado do Botox?",
    resposta: "Os primeiros resultados do Botox aparecem entre 3 e 5 dias após a aplicação, com efeito máximo visível em até 15 dias."
  },
  {
    id: 4,
    pergunta: "Qual é o tempo de recuperação após a aplicação de Botox?",
    resposta: "A recuperação é imediata. O paciente pode retomar atividades no mesmo dia, evitando exercícios físicos intensos e massagens na região tratada nas primeiras 24 horas."
  },
  {
    id: 5,
    pergunta: "O Botox é seguro para tratamento estético?",
    resposta: "Sim, quando aplicado por profissionais qualificados e utilizando toxina botulínica aprovada pela Anvisa. Seguimos todos os protocolos para garantir segurança e resultados naturais."
  },
  {
    id: 6,
    pergunta: "Preciso fazer exames antes de aplicar Botox?",
    resposta: "Na maioria dos casos, não há necessidade de exames prévios. Entretanto, realizamos uma avaliação completa para confirmar se o tratamento é indicado para você."
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
