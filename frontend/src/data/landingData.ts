import { Plan, StepItem, ProblemItem, BenefitItem, TestimonialItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: "S.O.S Manutenções",
  slogan: "Seu patrimônio merece cuidado contínuo.",
  phone: "(11) 4002-8922",
  whatsapp: "(11) 99882-3456",
  whatsappUrl: "https://wa.me/5511998823456?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20assinatura%20da%20S.O.S%20Manuten%C3%A7%C3%B5es.",
  email: "contato@sosmanutencoes.com.br",
  address: "Rua Maria Alves Damaceno - Ipirá - Bahia, BA",
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
    description: "Encontre a cobertura certa para o tamanho da sua casa — do apartamento compacto à residência completa.",
    iconName: "FileCheck"
  },
  {
    number: "02",
    title: "Assine online em poucos minutos",
    description: "Contratação 100% digital, sem papelada. Pagamento recorrente automático e seguro.",
    iconName: "CreditCard"
  },
  {
    number: "03",
    title: "Agende sua primeira vistoria",
    description: "Nossa equipe vai até você, mapeia os móveis e já faz os primeiros ajustes necessários.",
    iconName: "Calendar"
  },
  {
    number: "04",
    title: "Relaxe — nós cuidamos do resto",
    description: "Proteção contínua com canal prioritário para solicitar reparos sempre que precisar.",
    iconName: "Shield"
  }
];

export const PROBLEM_ITEMS: ProblemItem[] = [
  {
    title: "Portas desalinhadas",
    description: "Portas que raspam, não fecham direito ou danificam o acabamento."
  },
  {
    title: "Gavetas pesadas",
    description: "Trilhos empenados ou sem lubrificação que travam e dificultam o uso no dia a dia."
  },
  {
    title: "Dobradiças desgastadas",
    description: "Ferragens que afrouxam com o tempo e colocam suas portas em risco de queda."
  },
  {
    title: "Ferragens frouxas",
    description: "Puxadores soltos, pistões descalibrados e parafusos oxidados que pioram com o uso."
  },
  {
    title: "Pequenos defeitos",
    description: "Fita de borda descolando e infiltrações que, ignorados, viram dano estrutural."
  }
];

export const PLANS: Plan[] = [
  {
    id: 'essential',
    name: "Plano Essencial",
    tagline: "Proteção preventiva essencial para apartamentos compactos e ambientes pontuais.",
    priceSemiannualMonthly: 49.90,
    priceAnnualMonthly: 49.90,
    totalSemiannual: 299.40,
    totalAnnual: 598.80,
    benefits: [
      "Primeira inspeção em até 30 dias",
      "4 inspeções preventivas por ano",
      "Regulagem de portas e gavetas",
      "Regulagem de dobradiças e corrediças",
      "Aperto de parafusos",
      "Lubrificação e limpeza das ferragens",
      "Alinhamento de portas",
      "Inspeção de desgaste dos móveis",
      "Relatório digital da vistoria",
      "Diagnóstico por WhatsApp ilimitado",
      "Agendamento prioritário",
      "15% de desconto em serviços extras"
    ]
  },
  {
    id: 'casa',
    name: "Plano Casa",
    tagline: "Cobertura completa e prioritária para residências familiares e uso contínuo.",
    priceSemiannualMonthly: 79.90,
    priceAnnualMonthly: 79.90,
    totalSemiannual: 479.40,
    totalAnnual: 958.80,
    isPopular: true,
    benefits: [
      "Tudo do Essencial +",
      "6 inspeções preventivas por ano",
      "1 visita corretiva por ano",
      "Mão de obra gratuita em pequenos reparos",
      "Cliente paga apenas as peças",
      "Atendimento prioritário em até 48h",
      "Orçamento presencial gratuito",
      "20% de desconto em serviços extras",
      "Prioridade superior na agenda"
    ]
  },
  {
    id: 'total',
    name: "Plano Total",
    tagline: "Blindagem patrimonial integral para residências de alto padrão e marcenarias amplas.",
    priceSemiannualMonthly: 129.90,
    priceAnnualMonthly: 129.90,
    totalSemiannual: 779.40,
    totalAnnual: 1558.80,
    benefits: [
      "Tudo do Casa +",
      "Primeira visita em até 15 dias",
      "8 inspeções preventivas por ano",
      "2 visitas corretivas por ano",
      "Atendimento prioritário em até 24h",
      "25% de desconto em reformas",
      "Consultoria para conservação dos móveis",
      "Relatórios técnicos completos",
      "Prioridade máxima na agenda"
    ]
  }
];

export const COMPARISON_FEATURES = [
  { feature: "Primeira inspeção em até 30 dias", essential: true, casa: true, total: true },
  { feature: "Inspeções preventivas", essential: true, casa: true, total: true },
  { feature: "Visitas corretivas", essential: false, casa: true, total: true},
  { feature: "Regulagem de portas e corrediças", essential: true, casa: true, total: true },
  { feature: "Regulagem de gavetas e dobradiças", essential: true, casa: true, total: true },
  { feature: "Alinhamento de portas", essential: true, casa: true, total: true },
  { feature: "Aperto de parafusos", essential: true, casa: true, total: true },
  { feature: "Lubrificação das ferragens", essential: true, casa: true, total: true },
  { feature: "Limpeza técnica das ferragens", essential: true, casa: true, total: true },
  { feature: "Inspeção de desgaste", essential: true, casa: true, total: true },
  { feature: "Relatório digital", essential: true, casa: true, total: true },
  { feature: "Diagnóstico por WhatsApp", essential: true, casa: true, total: true },
  { feature: "Agendamento prioritário", essential: true, casa: true, total: true },
  { feature: "Mão de obra para pequenos reparos", essential: false, casa: true, total: true },
  { feature: "Cliente paga apenas as peças", essential: false, casa: true, total: true },
  { feature: "Atendimento em até 48h", essential: false, casa: true, total: true },
  { feature: "Atendimento em até 24h", essential: false, casa: false, total: true },
  { feature: "15% de desconto em serviços", essential: true, casa: false, total: false },
  { feature: "20% de desconto em serviços", essential: false, casa: true, total: false },
  { feature: "25% de desconto em reformas", essential: false, casa: false, total: true }
];

export const GENERAL_BENEFITS: BenefitItem[] = [
  {
    title: "Atendimento ágil",
    description: "Protocolos operacionais padronizados com SLA de resposta em até 24 hours úteis.",
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
    question: "É possível cancelar antes do término do contrato?",
    answer: "Não. Nossos planos possuem vigência de 6 ou 12 meses e funcionam como a contratação de um pacote de serviços com pagamento recorrente. Ao assinar, você contrata todo o período escolhido, realizando o pagamento de forma parcelada. Por esse motivo, não é possível o cancelamento antecipado durante a vigência do contrato. Ao final do período contratado, você poderá optar pela renovação ou pelo encerramento da assinatura.",
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