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
    imagem_depois_url: botoxDepois2.src,
    legenda: "Harmonização completa realçando a beleza natural"
  },
  {
    id: 3,
    imagem_antes_url: botoxAntes3.src,
    imagem_depois_url: botoxDepois3.src,
    legenda: "Resultado equilibrado e sofisticado"
  }
];

// Dados para os depoimentos
export const depoimentosData = [
  {
    id: 1,
    nome_paciente: "Ana F.",
    foto_paciente_url: fullFaceDepois1.src,
    depoimento: "A DamaFace me devolveu a autoestima. O resultado foi incrível e muito natural, exatamente como eu queria."
  },
  {
    id: 2,
    nome_paciente: 'Ana Maria',
    foto_paciente_url: fullFaceDepois2.src,
    depoimento: "Profissionais incríveis! Me senti segura durante todo o processo e o resultado superou minhas expectativas."
  },
  {
    id: 3,
    nome_paciente: "João Paulo",
    foto_paciente_url: fullFaceDepois3.src,
    depoimento: "Já fiz 3 procedimentos na DamaFace e sempre fico impressionado com a qualidade e o cuidado da Dra."
  },
  {
    id: 4,
    nome_paciente: "Gustavo M.",
    foto_paciente_url: fullFaceDepois4.src,
    depoimento: "Fiquei surpreso com o resultado! Minha autoestima aumentou muito após o procedimento. Recomendo a todos que buscam naturalidade."
  },
  {
    id: 5,
    nome_paciente: "Gabriel F.",
    foto_paciente_url: fullFaceDepois5.src,
    depoimento: "O atendimento foi impecável do início ao fim. Me senti muito seguro e o resultado ficou exatamente como eu queria!"
  },
  {
    id: 6,
    nome_paciente: "Fernanda S.",
    foto_paciente_url: fullFaceDepois6.src,
    depoimento: "Equipe muito atenciosa e profissional. O resultado ficou discreto e realçou meus traços de forma natural."
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

export const unidadesData = [
  { value: "vinhedo", label: "Unidade 1 - Vinhedo" },
  { value: "jaguariuna", label: "Unidade 2 - Jaguariúna" },
  { value: "cerquilho", label: "Unidade 3 - Cerquilho" }
];
