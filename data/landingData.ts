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
    depoimento: "Sempre quis ter glúteos mais arredondados e firmes. Depois do tratamento de harmonização de glúteos na DamaFace, meu bumbum ganhou mais volume e um formato muito mais bonito."
  },
  {
    id: 2,
    nome_paciente: 'Ana Maria',
    foto_paciente_url: labialDepois2.src,
    depoimento: "Eu tinha flacidez nos glúteos e não me sentia confortável com isso. Após a harmonização de glúteos na DamaFace, notei mais sustentação, firmeza e um contorno incrível."
  },
  {
    id: 3,
    nome_paciente: "Luiza",
    foto_paciente_url: labialDepois3.src,
    depoimento: "A harmonização de glúteos na DamaFace superou minhas expectativas. O volume ficou proporcional ao meu corpo e o resultado foi natural, sem perder a minha essência."
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
    pergunta: "O tratamento com bioestimulador de colágeno dói?",
    resposta: "O bioestimulador de colágeno é aplicado com agulhas ou cânulas finas, causando apenas um leve desconforto. Utilizamos anestesia local para proporcionar maior conforto durante todo o procedimento."
  },
  {
    id: 2,
    pergunta: "Quanto tempo dura o efeito do bioestimulador de colágeno?",
    resposta: "Os resultados do bioestimulador de colágeno podem durar de 18 a 24 meses, dependendo do tipo de produto utilizado, metabolismo individual e cuidados pós-tratamento."
  },
  {
    id: 3,
    pergunta: "Quando vejo o resultado do bioestimulador de colágeno?",
    resposta: "O resultado do bioestimulador de colágeno é progressivo. A produção de colágeno novo começa nas semanas seguintes ao tratamento, com melhora visível a partir de 30 dias e resultado máximo em até 90 dias."
  },
  {
    id: 4,
    pergunta: "Qual é o tempo de recuperação após o bioestimulador de colágeno?",
    resposta: "A recuperação é rápida. Pode haver um leve inchaço ou pequenos hematomas nos primeiros dias, mas é possível retomar as atividades normais imediatamente, evitando apenas exercícios intensos e exposição solar por 24 horas."
  },
  {
    id: 5,
    pergunta: "O bioestimulador de colágeno é seguro?",
    resposta: "Sim, quando realizado por profissionais experientes e com produtos aprovados pela Anvisa. Na DamaFace seguimos protocolos rigorosos para garantir segurança, eficácia e resultados naturais."
  },
  {
    id: 6,
    pergunta: "Preciso fazer exames antes de realizar o bioestimulador de colágeno?",
    resposta: "Na maioria dos casos, não é necessário realizar exames prévios. Antes do procedimento, fazemos uma avaliação personalizada para entender suas necessidades e indicar o melhor protocolo para você."
  }
];


export const unidadesData = [
  { value: "vinhedo", label: "Unidade 1 - Vinhedo" },
  { value: "jaguariuna", label: "Unidade 2 - Jaguariúna" },
  { value: "cerquilho", label: "Unidade 3 - Cerquilho" }
];
