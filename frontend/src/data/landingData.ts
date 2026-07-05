import { Plan, StepItem, ProblemItem, BenefitItem, TestimonialItem, FAQItem, HardwareProduct } from '../types';

export const COMPANY_INFO = {
  name: "S.O.S Manutenções",
  slogan: "Seu patrimônio merece cuidado contínuo.",
  phone: "(11) 4002-8922",
  whatsapp: "(11) 99882-3456",
  whatsappUrl: "https://wa.me/5511998823456?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20de%20assinatura%20da%20S.O.S%20Manuten%C3%A7%C3%B5es.",
  email: "sosmautencoes.faleconosco@gmail.com.br",
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
    title: "Relaxe — nós cuidamos de tudo",
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
    tagline: "Proteção preventiva básica para seus móveis.",
    priceSemiannualMonthly: 39.90,
    priceAnnualMonthly: 35.90, // Arredondado para ficar comercial
    totalSemiannual: 239.40,     // 39.90 * 6
    totalAnnual: 430.80,
    benefits: [
      "Primeira inspeção em até 30 dias",
      "2 inspeções preventivas por semestre",
      "Manutenção básica (portas, gavetas, dobradiças e corrediças)",
      "Aperto de parafusos e lubrificação de ferragens",
      "Mão de obra gratuita em pequenos reparos",
      "Kit de limpeza",
      "Relatório digital da vistoria",
      "Diagnóstico por WhatsApp",
      "10% de desconto em grandes serviços"
    ]
  },
  {
    id: 'casa',
    name: "Plano Casa",
    tagline: "Cobertura completa para residências familiares.",
    priceSemiannualMonthly: 59.90,
    priceAnnualMonthly: 53.90, // Arredondado para ficar comercial
    totalSemiannual: 359.40,     // 59.90 * 6
    totalAnnual: 646.80,
    isPopular: true,
    benefits: [
      "Primeira inspeção em até 30 dias",
      "3 inspeções preventivas por semestre (Mais visitas)",
      "Todos os serviços de manutenção e reparo do Essencial",
      "Atendimento prioritário em até 24h",
      "Orçamento presencial gratuito para novos projetos",
      "Kit de limpeza",
      "Relatório digital da vistoria",
      "Diagnóstico por WhatsApp",
      "Participação em 6 sorteios anuais",
      "15% de desconto em grandes serviços"
    ]
  },
  {
    id: 'total',
    name: "Plano Total",
    tagline: "Blindagem patrimonial completa para todos os tipos de móveis.",
    priceSemiannualMonthly: 99.90,
    priceAnnualMonthly: 89.90, // Arredondado para ficar comercial
    totalSemiannual: 599.40,     // 99.90 * 6
    totalAnnual: 1078.80,
    benefits: [
      "Primeira visita em até 15 dias",
      "4 inspeções preventivas por semestre (Máxima cobertura)",
      "Todos os serviços de manutenção e reparo do plano Casa",
      "Prioridade máxima na agenda de atendimento",
      "Consultoria técnica para grandes projetos",
      "Kit de limpeza",
      "Relatório digital da vistoria",
      "Diagnóstico por WhatsApp",
      "Participação em 12 sorteios anuais",
      "20% de desconto em grandes serviços"
    ]
  }
];

export const COMPARISON_FEATURES = [
  { feature: "Primeira inspeção em até 30 dias", essential: true, casa: true, total: true },
  { feature: "Inspeções preventivas", essential: true, casa: true, total: true },
  { feature: "Mão de obra para pequenos serviços", essential: true, casa: true, total: true },
  { feature: "Regulagem de portas e corrediças", essential: true, casa: true, total: true },
  { feature: "Regulagem de gavetas e dobradiças", essential: true, casa: true, total: true },
  { feature: "Alinhamento de portas e aperto de parafusos", essential: true, casa: true, total: true },
  { feature: "Lubrificação e limpeza das ferragens", essential: true, casa: true, total: true },
  { feature: "Inspeção de desgaste", essential: true, casa: true, total: true },
  { feature: "Relatório digital", essential: true, casa: true, total: true },
  { feature: "Diagnóstico por WhatsApp", essential: true, casa: true, total: true },
  { feature: "Agendamento prioritário", essential: false, casa: true, total: true }, 
  { feature: "Sorteios", essential: false, casa: true, total: true },
  { feature: "10% de desconto em grandes serviços", essential: true, casa: false, total: false },
  { feature: "15% de desconto em grandes serviços", essential: false, casa: true, total: false },
  { feature: "20% de desconto em grandes serviços", essential: false, casa: false, total: true }
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
    answer: "Sim. O cliente pode solicitar o cancelamento da assinatura a qualquer momento. Após o prazo legal de 7 (sete) dias para exercício do direito de arrependimento, quando aplicável, o cancelamento antecipado implica o pagamento de multa compensatória correspondente a 20% (vinte por cento) do valor restante do contrato, permanecendo devidos os demais valores eventualmente vencidos até a data do cancelamento. Ao término da vigência contratada, a assinatura poderá ser encerrada sem multa, observadas as condições previstas no contrato.",
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

export const PARTNER_INFO = {
  name: 'AP Móveis Planejados',
  label: 'Parceria com AP móveis planejados',
};

export const HARDWARE_PRODUCTS: HardwareProduct[] = [
  {
    id: 'dobradica-soft-close',
    name: 'Dobradiça Copo 35mm Soft Close',
    description: 'Amortecimento suave para portas de armários. Compatível com padrão Blum.',
    price: 24.9,
    sku: 'FER-001',
    category: 'Dobradiças',
    imageUrl: 'https://imgur.com/AqhRn84.jpeg',
  },
  {
    id: 'corredica-telescopica',
    name: 'Corrediça Telescópica 450mm',
    description: 'Trilho completo com extração total. Suporta até 30 kg por gaveta.',
    price: 38.5,
    sku: 'FER-002',
    category: 'Corrediças',
    imageUrl: 'https://imgur.com/v5OHOp8.jpeg',
  },
  {
    id: 'pistao-gas',
    name: 'Pistão a Gás para Portas',
    description: 'Abertura controlada para portas basculantes e aéreos superiores.',
    price: 52.0,
    sku: 'FER-003',
    category: 'Pistões',
    imageUrl: 'https://imgur.com/C36YpDS.jpeg',
  },
  {
    id: 'puxador-aluminio',
    name: 'Puxador Alumínio 128mm',
    description: 'Acabamento escovado, furação padrão 96mm. Kit com parafusos.',
    price: 18.9,
    sku: 'FER-004',
    category: 'Puxadores',
    imageUrl: 'https://imgur.com/ycHyJxs.jpeg',
  },
  {
    id: 'kit-parafusos-mdf',
    name: 'Kit Parafusos MDF 4x40',
    description: '100 unidades cabeça flangeada para montagem de móveis planejados.',
    price: 14.5,
    sku: 'FER-005',
    category: 'Fixadores',
    imageUrl: 'https://imgur.com/UIqrgD2.jpeg',
  },
  {
    id: 'organizador-gaveta',
    name: 'Organizador de Gaveta 60cm',
    description: 'Divisor interno em plástico resistente para talheres e utensílios.',
    price: 45.0,
    sku: 'FER-006',
    category: 'Acessórios',
    imageUrl: 'https://imgur.com/8EwSYIk.jpeg',
  },
];

const WHATSAPP_STORE_NUMBER = '5511998823456';

export function getHardwareOrderWhatsAppUrl(product: HardwareProduct, quantity: number): string {
  const unitPrice = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const total = (product.price * quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const message = [
    'Olá! Vim pelo site da S.O.S Manutenções e gostaria de comprar:',
    '',
    `Produto: ${product.name}`,
    `Código: ${product.sku}`,
    `Categoria: ${product.category}`,
    `Quantidade: ${quantity}`,
    `Valor unitário: ${unitPrice}`,
    `Total: ${total}`,
    '',
    `Parceria: ${PARTNER_INFO.name}`,
    '',
    'Poderiam confirmar disponibilidade, prazo e forma de pagamento?',
  ].join('\n');

  return `https://wa.me/${WHATSAPP_STORE_NUMBER}?text=${encodeURIComponent(message)}`;
}