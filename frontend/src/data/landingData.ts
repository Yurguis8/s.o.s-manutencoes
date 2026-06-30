import { Plan, StepItem, ProblemItem, BenefitItem, TestimonialItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: "S.O.S Manutenções",
  slogan: "Seu patrimônio merece cuidado contínuo.",
  phone: "(11) 4002-8922",
  whatsapp: "(11) 99882-3456",
  whatsappUrl: "https://wa.me/5511998823456?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20assinatura%20da%20S.O.S%20Manuten%C3%A7%C3%B5es.",
  email: "contato@sosmanutencoes.com.br",
  address: "Av. Brigadeiro Faria Lima, 3477 - Torre Norte - São Paulo, SP",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com"
  }
};

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Escolha o plano ideal",
    description: "Selecione a modalidade de cobertura compatível com a dimensão estrutural da sua residência.",
    iconName: "FileCheck"
  },
  {
    number: "02",
    title: "Assine online em poucos minutos",
    description: "Contratação digital corporativa, sem burocracia e com faturamento recorrente automatizado.",
    iconName: "CreditCard"
  },
  {
    number: "03",
    title: "Agende sua primeira vistoria",
    description: "Nossa equipe técnica certificada realiza o mapeamento, ajuste e catalogação dos móveis.",
    iconName: "Calendar"
  },
  {
    number: "04",
    title: "Aproveite a garantia contínua",
    description: "Proteção patrimonial permanente com canais prioritários para solicitações corretivas.",
    iconName: "Shield"
  }
];

export const PROBLEM_ITEMS: ProblemItem[] = [
  {
    title: "Portas desalinhadas",
    description: "Desgaste mecânico nas dobradiças que ocasiona atrito constante e lascas no revestimento."
  },
  {
    title: "Gavetas pesadas",
    description: "Trilhos telescópicos empenados ou sem lubrificação que comprometem a ergonomia diária."
  },
  {
    title: "Dobradiças desgastadas",
    description: "Afrouxamento progressivo por gravidade que gera instabilidade e risco de queda das portas."
  },
  {
    title: "Ferragens frouxas",
    description: "Puxadores sem fixação adequada, pistões hidráulicos descalibrados e fixadores oxidados."
  },
  {
    title: "Pequenos defeitos",
    description: "Descolamento de fita de borda e micro-infiltrações iniciais que evoluem para perda estrutural."
  }
];

export const PLANS: Plan[] = [
  {
    id: 'essential',
    name: "Plano Essencial",
    tagline: "Proteção preventiva essencial para apartamentos compactos e ambientes pontuais.",
    priceSemiannualMonthly: 49,
    priceAnnualMonthly: 42,
    totalSemiannual: 294,
    totalAnnual: 504,
    benefits: [
      "1 vistoria preventiva por ano",
      "Regulagem completa de portas",
      "Regulagem operacional de gavetas",
      "Lubrificação técnica de ferragens",
      "Aperto e calibração de parafusos",
      "Atendimento prioritário padrão",
      "10% de desconto em novos serviços extras"
    ]
  },
  {
    id: 'casa',
    name: "Plano Casa",
    tagline: "Cobertura completa e prioritária para residências familiares e uso contínuo.",
    priceSemiannualMonthly: 79,
    priceAnnualMonthly: 68,
    totalSemiannual: 474,
    totalAnnual: 816,
    isPopular: true,
    benefits: [
      "Inclui todos os serviços do Plano Essencial",
      "2 vistorias técnicas presenciais por ano",
      "1 pequeno reparo corretivo anual incluso",
      "Troca de ferragens simples (até o limite do plano)",
      "Prioridade alta no agendamento técnico",
      "15% de desconto em novos serviços extras"
    ]
  },
  {
    id: 'total',
    name: "Plano Total",
    tagline: "Blindagem patrimonial integral para residências de alto padrão e marcenarias amplas.",
    priceSemiannualMonthly: 119,
    priceAnnualMonthly: 99,
    totalSemiannual: 714,
    totalAnnual: 1188,
    benefits: [
      "Inclui todos os serviços do Plano Casa",
      "Até 4 vistorias técnicas presenciais por ano",
      "Atendimento prioritário máximo VIP (24h úteis)",
      "Limite anual ampliado para substituição de ferragens",
      "Projeto básico incluso para pequenas adaptações",
      "20% de desconto em novos serviços extras"
    ]
  }
];

export const COMPARISON_FEATURES = [
  { feature: "Vistorias preventivas presenciais", essential: "1 por ano", casa: "2 por ano", total: "Até 4 por ano" },
  { feature: "Regulagem de portas e gavetas", essential: true, casa: true, total: true },
  { feature: "Lubrificação técnica de ferragens", essential: true, casa: true, total: true },
  { feature: "Nível de prioridade de atendimento", essential: "Padrão", casa: "Alta prioridade", total: "Máxima VIP" },
  { feature: "Desconto em serviços adicionais", essential: "10%", casa: "15%", total: "20%" },
  { feature: "Pequeno reparo anual incluso", essential: false, casa: "1 reparo / ano", total: "Incluso em todas visitas" },
  { feature: "Troca de ferragens simples", essential: false, casa: "Cobertura padrão", total: "Cobertura ampliada" },
  { feature: "Projeto técnico para adaptações", essential: false, casa: false, total: true },
  { feature: "Prontuário digital patrimonial", essential: true, casa: true, total: true },
  { feature: "Gestão dedicada via portal", essential: true, casa: true, total: true },
];

export const GENERAL_BENEFITS: BenefitItem[] = [
  {
    title: "Atendimento ágil",
    description: "Protocolos operacionais padronizados com SLA de resposta em até 24 horas úteis.",
    iconName: "Clock"
  },
  {
    title: "Técnicos especialistas",
    description: "Profissionais rigorosamente selecionados, homologados e com histórico técnico verificado.",
    iconName: "CheckCircle2"
  },
  {
    title: "Eficiência financeira",
    description: "A manutenção preventiva programada representa até 80% de economia sobre a substituição estrutural.",
    iconName: "TrendingUp"
  },
  {
    title: "Extensão da vida útil",
    description: "Prevenção sistemática contra empenamento de chapas, oxidação e colapso de dobradiças.",
    iconName: "ShieldCheck"
  },
  {
    title: "Histórico digital auditável",
    description: "Prontuário técnico fotográfico atualizado a cada intervenção realizada em sua residência.",
    iconName: "FileText"
  },
  {
    title: "Agendamento autônomo",
    description: "Flexibilidade total para marcação e reagendamento de visitas através de plataforma digital.",
    iconName: "Calendar"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Ricardo Mendes",
    role: "Arquiteto Sênior",
    companyOrLocation: "Studio RM Arquitetura",
    plan: "Plano Casa",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content: "A marcenaria de alto padrão exige calibração contínua. Indico a S.O.S Manutenções para todos os meus clientes no pós-obra porque a estrutura de atendimento corporativo elimina completamente a insegurança do profissional autônomo avulso."
  },
  {
    id: "2",
    name: "Camila Drummond",
    role: "Proprietária",
    companyOrLocation: "Residencial Jardins, SP",
    plan: "Plano Total",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    content: "O diferencial absoluto é a governança e a pontualidade. Os técnicos chegam uniformizados, utilizam proteção nos calçados e enviam o relatório técnico digital em minutos após a conclusão. É o padrão de serviço que o mercado imobiliário precisava."
  },
  {
    id: "3",
    name: "Dr. Roberto Alcantara",
    role: "Médico e Investidor",
    companyOrLocation: "Itaim Bibi, SP",
    plan: "Plano Essencial",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content: "O custo semestral do Plano Essencial é irrisório quando comparado ao risco de dano permanente nas ferragens importadas da minha cozinha. O agendamento é extremamente simples e a execução é milimétrica."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Os móveis precisam ter sido fabricados pela S.O.S Manutenções?",
    answer: "Não. Atendemos móveis planejados sob medida fabricados por qualquer marcenaria, marca ou indústria do mercado. Nossos especialistas possuem certificação técnica para regulagem de ferragens nacionais e importadas (Blum, Hettich, Hafele, FGVTN, entre outras).",
    category: "Cobertura"
  },
  {
    question: "Por que não existe plano mensal?",
    answer: "A blindagem patrimonial de móveis planejados exige um ciclo mínimo de monitoramento preventivo mecânico para garantir estabilidade estrutural. Por isso, operamos exclusivamente com contratos semestrais e anuais, proporcionando previsibilidade e custos operacionais reduzidos para o assinante.",
    category: "Planos"
  },
  {
    question: "Existe multa por cancelamento antecipado?",
    answer: "Não adotamos multas abusivas. Caso decida interromper a assinatura anual antes do término do ciclo, realizamos o cálculo proporcional das vistorias técnicas já efetuadas e restituímos o saldo remanescente conforme os termos de serviço corporativos.",
    category: "Planos"
  },
  {
    question: "Qual o prazo de carência após a contratação?",
    answer: "Para vistorias preventivas programadas e regulagens operacionais padrão, a carência técnica é de 72 horas úteis. Para solicitações corretivas com substituição de componentes no Plano Casa e Plano Total, aplica-se carência de 30 dias corridos.",
    category: "Cobertura"
  },
  {
    question: "Quais situações não estão cobertas pela assinatura?",
    answer: "O escopo técnico não contempla sinistros decorrentes de inundações, incêndios, infestações estruturais severas de cupim em chapas de MDF, substituição integral de painéis de madeira ou reconfiguração arquitetônica de ambientes. Nosso foco é conservação preventiva mecânica e calibração de ferragens.",
    category: "Cobertura"
  },
  {
    question: "Como funciona a cobrança recorrente?",
    answer: "O faturamento ocorre de forma recorrente através de cartão de crédito sem comprometer o limite total da sua fatura (cobrança programada a cada 6 ou 12 meses), ou via PIX à vista na contratação de cada ciclo.",
    category: "Pagamento"
  }
];

