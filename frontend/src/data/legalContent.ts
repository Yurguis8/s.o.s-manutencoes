export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  version: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const PRIVACIDADE_CONTENT: LegalDocument = {
  title: 'Política de Privacidade',
  version: 'v1.0',
  lastUpdated: '30 de junho de 2026',
  sections: [
    {
      title: '1. Introdução',
      paragraphs: [
        'A S.O.S Manutenções Patrimoniais Ltda. ("S.O.S Manutenções", "nós" ou "nossa") está comprometida com a proteção da privacidade e dos dados pessoais de seus clientes, visitantes e parceiros, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).',
        'Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos, compartilhamos e protegemos suas informações pessoais ao utilizar nosso site, contratar nossos planos de assinatura ou interagir com nossos canais de atendimento.',
      ],
    },
    {
      title: '2. Dados que Coletamos',
      paragraphs: [
        'Dados de identificação: nome completo ou razão social, CPF/CNPJ (quando aplicável), endereço residencial ou comercial, e-mail e telefone/WhatsApp.',
        'Dados de pagamento: informações necessárias para processamento de assinaturas recorrentes, tratadas exclusivamente pelo gateway de pagamentos parceiro (Mercado Pago), sem armazenamento de dados de cartão em nossos servidores.',
        'Dados de uso do imóvel: informações sobre o patrimônio atendido, histórico de vistorias, chamados técnicos e relatórios de manutenção.',
        'Dados de navegação: endereço IP, tipo de navegador, páginas visitadas e cookies essenciais para funcionamento do site.',
      ],
    },
    {
      title: '3. Finalidades do Tratamento',
      paragraphs: [
        'Execução do contrato de prestação de serviços de manutenção preventiva e corretiva.',
        'Processamento de pagamentos e gestão de assinaturas recorrentes.',
        'Agendamento de vistorias técnicas e atendimento de chamados de emergência.',
        'Comunicação sobre status de serviços, renovações de plano e atualizações contratuais.',
        'Cumprimento de obrigações legais e regulatórias.',
        'Melhoria contínua dos serviços e da experiência do cliente.',
      ],
    },
    {
      title: '4. Base Legal',
      paragraphs: [
        'O tratamento dos seus dados pessoais fundamenta-se nas seguintes bases legais previstas na LGPD: execução de contrato (art. 7º, V), cumprimento de obrigação legal (art. 7º, II), legítimo interesse (art. 7º, IX) e consentimento do titular (art. 7º, I), quando aplicável.',
      ],
    },
    {
      title: '5. Compartilhamento de Dados',
      paragraphs: [
        'Seus dados podem ser compartilhados com: gateway de pagamentos (Mercado Pago) para processamento financeiro; prestadores de serviços técnicos autorizados para execução das manutenções; e autoridades competentes, quando exigido por lei.',
        'Não vendemos, alugamos ou comercializamos seus dados pessoais a terceiros para fins de marketing.',
      ],
    },
    {
      title: '6. Retenção e Segurança',
      paragraphs: [
        'Mantemos seus dados pelo período necessário à execução do contrato e ao cumprimento de obrigações legais, incluindo prazos prescricionais aplicáveis.',
        'Adotamos medidas técnicas e administrativas de segurança, incluindo criptografia SSL/TLS, controle de acesso e monitoramento de infraestrutura, para proteger suas informações contra acesso não autorizado, perda ou alteração.',
      ],
    },
    {
      title: '7. Seus Direitos',
      paragraphs: [
        'Nos termos da LGPD, você tem direito a: confirmar a existência de tratamento; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar anonimização, bloqueio ou eliminação de dados desnecessários; portabilidade; revogar consentimento; e obter informações sobre compartilhamento.',
        'Para exercer seus direitos, entre em contato pelo e-mail contato@sosmanutencoes.com.br ou pelo canal de atendimento indicado em nosso site.',
      ],
    },
    {
      title: '8. Alterações',
      paragraphs: [
        'Esta política pode ser atualizada periodicamente. A versão vigente estará sempre disponível nesta página, com indicação da data da última revisão. Alterações relevantes serão comunicadas aos clientes ativos por e-mail ou outros canais contratuais.',
      ],
    },
  ],
};

export const CONSENTIMENTO_CONTENT: LegalDocument = {
  title: 'Termo de Consentimento',
  version: 'v1.0',
  lastUpdated: '30 de junho de 2026',
  sections: [
    {
      title: '1. Objeto do Consentimento',
      paragraphs: [
        'Este Termo de Consentimento formaliza a autorização do titular dos dados pessoais para que a S.O.S Manutenções Patrimoniais Ltda. realize o tratamento de informações necessárias à contratação, execução e gestão dos serviços de manutenção patrimonial oferecidos por meio de assinatura digital.',
      ],
    },
    {
      title: '2. Dados Autorizados',
      paragraphs: [
        'Ao aceitar este termo, você consente expressamente com a coleta e o tratamento dos seguintes dados: nome, e-mail, telefone/WhatsApp, endereço do imóvel atendido, histórico de vistorias e chamados técnicos, e dados de faturamento encaminhados ao processador de pagamentos.',
      ],
    },
    {
      title: '3. Finalidades Autorizadas',
      paragraphs: [
        'Prestação dos serviços contratados, incluindo agendamento de vistorias, atendimento técnico e emissão de relatórios patrimoniais.',
        'Comunicações operacionais relacionadas ao seu plano de assinatura, renovações e alterações contratuais.',
        'Processamento de pagamentos recorrentes por meio do gateway parceiro Mercado Pago.',
        'Cumprimento de obrigações legais e exercício regular de direitos em processos judiciais ou administrativos.',
      ],
    },
    {
      title: '4. Comunicações',
      paragraphs: [
        'Você autoriza o envio de comunicações por e-mail, WhatsApp e telefone exclusivamente para fins relacionados à execução do contrato e ao suporte técnico. Comunicações promocionais, quando enviadas, contarão com opção de descadastramento.',
      ],
    },
    {
      title: '5. Compartilhamento Autorizado',
      paragraphs: [
        'O titular está ciente e concorda que seus dados poderão ser compartilhados com prestadores de serviços técnicos credenciados e com o processador de pagamentos, exclusivamente para as finalidades descritas neste termo e na Política de Privacidade.',
      ],
    },
    {
      title: '6. Revogação do Consentimento',
      paragraphs: [
        'O consentimento pode ser revogado a qualquer momento, mediante solicitação ao e-mail contato@sosmanutencoes.com.br. A revogação não afeta a licitude do tratamento realizado com base no consentimento anterior, nem impede o tratamento necessário à execução do contrato vigente ou ao cumprimento de obrigação legal.',
        'A revogação durante a vigência de um plano ativo pode resultar na impossibilidade de continuidade dos serviços que dependam do tratamento dos dados autorizados.',
      ],
    },
    {
      title: '7. Declaração do Titular',
      paragraphs: [
        'Ao marcar a caixa de aceite no formulário de contratação, o titular declara ter lido, compreendido e concordado com este Termo de Consentimento, bem como com a Política de Privacidade e os demais documentos legais da plataforma.',
      ],
    },
  ],
};

export const CONTRATO_CONTENT: LegalDocument = {
  title: 'Contrato de Adesão',
  version: 'v1.0',
  lastUpdated: '30 de junho de 2026',
  sections: [
    {
      title: 'Cláusula 1ª — Das Partes e do Objeto',
      paragraphs: [
        'CONTRATADA: S.O.S Manutenções Patrimoniais Ltda., pessoa jurídica de direito privado, com sede na Av. Brigadeiro Faria Lima, 3477 — Torre Norte — São Paulo, SP.',
        'CONTRATANTE: pessoa física ou jurídica que adere a este contrato por meio da contratação digital de um dos planos de assinatura disponíveis na plataforma.',
        'O presente contrato tem por objeto a prestação de serviços de manutenção preventiva e corretiva de infraestrutura civil, elétrica e hidráulica residencial, conforme o plano e o ciclo de faturamento selecionados no ato da contratação.',
      ],
    },
    {
      title: 'Cláusula 2ª — Da Vigência e Renovação',
      paragraphs: [
        'Este contrato é celebrado por prazo determinado correspondente ao ciclo de faturamento escolhido: semestral (6 meses) ou anual (12 meses), contados a partir da confirmação do primeiro pagamento.',
        'Ao término do período contratual, a assinatura será renovada automaticamente pelo mesmo ciclo, salvo cancelamento expresso pelo CONTRATANTE com antecedência mínima de 30 (trinta) dias do vencimento.',
      ],
    },
    {
      title: 'Cláusula 3ª — Do Pagamento',
      paragraphs: [
        'O faturamento é realizado de forma recorrente por meio do gateway de pagamentos Mercado Pago, na periodicidade correspondente ao plano contratado.',
        'A falta de pagamento por mais de 5 (cinco) dias úteis após o vencimento suspende automaticamente o atendimento técnico, sem prejuízo da cobrança dos valores em aberto e da aplicação de encargos previstos na legislação aplicável.',
        'Os valores dos planos estão sujeitos a reajuste anual pelo IPCA ou índice que vier a substituí-lo, mediante comunicação prévia de 30 dias.',
      ],
    },
    {
      title: 'Cláusula 4ª — Das Obrigações da Contratada',
      paragraphs: [
        'Executar os serviços previstos no plano contratado com equipe técnica qualificada, dentro dos prazos de atendimento informados na contratação.',
        'Realizar vistorias preventivas periódicas conforme especificado em cada plano.',
        'Manter registro documentado (prontuário patrimonial) das intervenções realizadas no imóvel.',
        'Comunicar ao CONTRATANTE sobre serviços que extrapolem o escopo do plano, com orçamento prévio para aprovação.',
      ],
    },
    {
      title: 'Cláusula 5ª — Das Obrigações do Contratante',
      paragraphs: [
        'Fornecer livre acesso ao imóvel nos dias e horários agendados para vistorias e intervenções técnicas.',
        'Manter os dados cadastrais atualizados e comunicar alterações de titularidade ou endereço do imóvel.',
        'Declarar ser proprietário, inquilino ou representante legal autorizado do imóvel para fins de realização das manutenções.',
        'Efetuar o pagamento das mensalidades nas datas de vencimento.',
      ],
    },
    {
      title: 'Cláusula 6ª — Da Rescisão',
      paragraphs: [
        'O CONTRATANTE poderá rescindir o contrato a qualquer momento, mediante solicitação pelos canais oficiais de atendimento.',
        'Em planos anuais, o cancelamento antecipado está sujeito a multa compensatória de 20% (vinte por cento) sobre o valor restante das parcelas do contrato.',
        'A CONTRATADA poderá rescindir o contrato em caso de inadimplência superior a 30 dias, descumprimento grave das obrigações contratuais ou fornecimento de informações falsas pelo CONTRATANTE.',
      ],
    },
    {
      title: 'Cláusula 7ª — Das Limitações',
      paragraphs: [
        'Serviços fora do escopo do plano contratado, reformas estruturais, danos decorrentes de mau uso, desastres naturais ou atos de terceiros não estão cobertos e serão orçados separadamente.',
        'A CONTRATADA não se responsabiliza por objetos de valor, obras de arte ou bens não relacionados à infraestrutura do imóvel coberta pelo plano.',
      ],
    },
    {
      title: 'Cláusula 8ª — Disposições Gerais',
      paragraphs: [
        'Este contrato é celebrado eletronicamente, com validade jurídica nos termos da Medida Provisória nº 2.200-2/2001 e da Lei nº 14.063/2020.',
        'Fica eleito o foro da Comarca de São Paulo, SP, para dirimir quaisquer controvérsias decorrentes deste contrato, com renúncia a qualquer outro, por mais privilegiado que seja.',
      ],
    },
  ],
};

export const TERMOS_CONTENT: LegalDocument = {
  title: 'Termos de Serviço',
  version: 'v1.0',
  lastUpdated: '30 de junho de 2026',
  sections: [
    {
      title: '1. Objeto',
      paragraphs: [
        'A S.O.S Manutenções presta serviços preventivos e emergenciais de infraestrutura civil, elétrica e hidráulica residencial, bem como regulagem e manutenção de móveis planejados, conforme o plano de assinatura contratado pelo cliente.',
      ],
    },
    {
      title: '2. Escopo dos Serviços',
      paragraphs: [
        'Estão inclusas vistorias técnicas periódicas e atendimento de chamados sob demanda, dentro dos limites e frequências definidos em cada plano.',
        'Serviços fora do escopo do plano — incluindo reformas, substituição de materiais e intervenções não previstas — serão orçados e cobrados separadamente, mediante aprovação prévia do cliente.',
      ],
    },
    {
      title: '3. Acesso ao Imóvel',
      paragraphs: [
        'O cliente se compromete a fornecer livre acesso ao imóvel nos dias e horários agendados para vistorias e intervenções técnicas.',
        'Reagendamentos devem ser solicitados com antecedência mínima de 24 horas úteis, salvo em casos de emergência.',
      ],
    },
    {
      title: '4. Prazos de Atendimento',
      paragraphs: [
        'Chamados de emergência (vazamentos ativos, falhas elétricas com risco) serão atendidos em até 4 horas úteis para clientes dos planos Premium e Completo, e em até 8 horas úteis para o plano Essencial.',
        'Chamados não emergenciais serão agendados em até 5 dias úteis, conforme disponibilidade da equipe técnica na região.',
      ],
    },
    {
      title: '5. Responsabilidades',
      paragraphs: [
        'A S.O.S Manutenções garante a execução dos serviços por profissionais qualificados, utilizando materiais adequados para cada intervenção.',
        'O cliente é responsável por informar corretamente as condições do imóvel e por garantir que o acesso seja seguro para a equipe técnica.',
      ],
    },
    {
      title: '6. Rescisão',
      paragraphs: [
        'O cancelamento antecipado de planos anuais está sujeito a multa compensatória de 20% do valor restante das parcelas do contrato, conforme previsto no Contrato de Adesão.',
        'Planos semestrais podem ser cancelados sem multa ao final do ciclo de 6 meses, mediante solicitação com 30 dias de antecedência.',
      ],
    },
    {
      title: '7. Propriedade Intelectual',
      paragraphs: [
        'Todo o conteúdo do site, incluindo textos, logotipos, imagens e metodologias operacionais, é de propriedade da S.O.S Manutenções e protegido pela legislação aplicável. É vedada a reprodução sem autorização prévia.',
      ],
    },
    {
      title: '8. Aceitação',
      paragraphs: [
        'Ao contratar qualquer plano de assinatura, o cliente declara ter lido, compreendido e aceito integralmente estes Termos de Serviço, a Política de Privacidade, o Termo de Consentimento e o Contrato de Adesão.',
      ],
    },
  ],
};
