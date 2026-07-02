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
  lastUpdated: '02 de Julho de 2026',
  sections: [
    {
      title: '1. Introdução e Identificação do Controlador',
      paragraphs: [
        'A S.O.S Manutenções Patrimoniais Ltda., com sede operacional em Ipirá, Bahia, ainda em fase de formalização cadastral, doravante denominada simplesmente "S.O.S Manutenções", "nós" ou "nossa", valoriza a privacidade e a proteção dos dados pessoais de clientes, visitantes, usuários da plataforma, parceiros e demais titulares de dados.',
        'Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos, compartilhamos, protegemos e eliminamos dados pessoais em razão do uso do nosso site, da contratação de planos de assinatura, do atendimento técnico, da comunicação com o cliente e de qualquer outra interação com a nossa operação.',
        'Ao acessar o site, preencher formulários, contratar planos, aceitar documentos digitais ou utilizar nossos canais de atendimento, o titular declara ciência desta Política e concorda com o tratamento de dados pessoais aqui descrito, naquilo que for aplicável.',
      ],
    },
    {
      title: '2. Dados Pessoais que Coletamos',
      paragraphs: [
        'Podemos coletar dados de identificação, tais como nome completo ou razão social, CPF ou CNPJ, endereço residencial ou comercial, e-mail, telefone, WhatsApp e outras informações cadastrais fornecidas pelo titular.',
        'Podemos coletar dados necessários à execução contratual, incluindo informações sobre o imóvel atendido, histórico de vistorias, ordens de serviço, chamados técnicos, relatório de manutenção, preferências de agendamento e observações relevantes para a prestação do serviço.',
        'Podemos coletar dados de pagamento e faturamento, tais como identificação do plano contratado, status da assinatura, transações processadas, meios de pagamento utilizados e dados necessários para conciliação financeira, observando-se que os dados completos de cartão e informações sensíveis de pagamento ficam sob responsabilidade da instituição intermediadora de pagamentos, sempre que aplicável.',
        'Podemos coletar dados de navegação e uso da plataforma, como endereço IP, data e hora de acesso, tipo de navegador, dispositivo utilizado, páginas visitadas, tempo de permanência, cookies essenciais e registros técnicos necessários à segurança e ao funcionamento do sistema.',
        'Podemos coletar dados enviados voluntariamente pelo titular por meio de formulários, mensagens, e-mails, WhatsApp ou outros canais de suporte, inclusive fotos, vídeos e descrições de problemas relacionados aos móveis ou ao imóvel atendido.',
      ],
    },
    {
      title: '3. Finalidades do Tratamento',
      paragraphs: [
        'Tratamos os dados pessoais para identificar o titular, criar cadastro, validar contratação, processar assinatura recorrente, administrar planos, emitir comprovantes, registrar aceite eletrônico e manter o relacionamento contratual.',
        'Tratamos os dados para executar os serviços contratados, realizar agendamentos, confirmar visitas, registrar histórico técnico, emitir relatórios, orientar sobre o uso correto dos móveis e fornecer suporte ao cliente.',
        'Tratamos os dados para processar pagamentos, realizar cobranças, conciliar transações, prevenir fraudes, confirmar elegibilidade de benefícios e controlar a situação da assinatura.',
        'Tratamos os dados para comunicação operacional, envio de avisos sobre o plano, lembretes de visita, notificações de cobrança, atualização contratual, suporte técnico e informações diretamente relacionadas à execução do contrato.',
        'Tratamos os dados para cumprir obrigações legais e regulatórias, atender solicitações de autoridades competentes, preservar direitos da empresa em eventual processo administrativo, judicial ou arbitral e manter registros necessários à atividade empresarial.',
        'Quando houver base legal adequada, poderemos utilizar dados para melhoria da experiência do usuário, análise de uso da plataforma, prevenção de erros operacionais, desenvolvimento de funcionalidades e otimização dos nossos processos internos.',
      ],
    },
    {
      title: '4. Bases Legais',
      paragraphs: [
        'O tratamento de dados pessoais poderá ocorrer com fundamento na execução de contrato e de procedimentos preliminares relacionados ao contrato, no cumprimento de obrigação legal ou regulatória, no exercício regular de direitos, no legítimo interesse, quando aplicável e compatível, e no consentimento, quando exigido pela natureza do tratamento.',
        'Dados pessoais estritamente necessários para contratação, cobrança, execução do serviço, agendamento, atendimento e manutenção do relacionamento contratual poderão ser tratados sem necessidade de consentimento autônomo, desde que haja base legal adequada.',
        'Sempre que o tratamento depender de consentimento, o titular será informado de forma clara, destacada e inequívoca, podendo revogá-lo nos termos desta Política e da legislação aplicável.',
      ],
    },
    {
      title: '5. Compartilhamento de Dados',
      paragraphs: [
        'Os dados pessoais poderão ser compartilhados com prestadores de serviço e parceiros estritamente necessários à operação, incluindo instituição intermediadora de pagamentos, fornecedores de tecnologia, hospedagem, e-mail, armazenamento em nuvem, suporte técnico, contabilidade e equipe operacional autorizada.',
        'Os dados pessoais poderão ser compartilhados com profissionais técnicos credenciados ou designados para a execução dos serviços contratados, quando isso for necessário para agendamento, atendimento, diagnóstico, emissão de relatório ou cumprimento do contrato.',
        'Os dados pessoais poderão ser compartilhados com autoridades públicas, órgãos reguladores, autoridades policiais, judiciais ou administrativas, quando houver obrigação legal, determinação formal, exercício regular de direitos ou necessidade de defesa da empresa em processo ou procedimento.',
        'Não vendemos, alugamos, cedemos ou comercializamos dados pessoais para fins de marketing de terceiros.',
        'Sempre que possível, compartilhamos apenas o mínimo necessário de dados para cada finalidade específica, observando princípios de necessidade e adequação.',
      ],
    },
    {
      title: '6. Dados de Pagamento',
      paragraphs: [
        'Os pagamentos da assinatura poderão ser processados por plataforma intermediadora de pagamento, como Mercado Pago ou solução equivalente.',
        'A S.O.S Manutenções não deve armazenar dados completos de cartão de crédito, senha, código de segurança ou outras informações sensíveis de pagamento além do estritamente necessário para identificação da transação, prova da contratação e conciliação financeira.',
        'O uso de plataforma intermediadora não exclui a necessidade de observar esta Política nem as regras de segurança e sigilo aplicáveis ao tratamento dos dados operacionais vinculados à cobrança.',
      ],
    },
    {
      title: '7. Cookies, Logs e Tecnologias Semelhantes',
      paragraphs: [
        'Nosso site pode utilizar cookies essenciais, cookies de sessão, identificadores técnicos, logs de acesso, pixels ou tecnologias semelhantes para fins de autenticação, funcionamento, segurança, estatística e melhoria da experiência do usuário.',
        'Cookies essenciais são necessários para que partes da plataforma funcionem corretamente e não podem ser desativados sem comprometer funcionalidades básicas.',
        'Quando utilizarmos ferramentas de análise ou rastreamento não essenciais, o titular será informado de forma adequada e, quando necessário, poderá gerenciar suas preferências por meio dos recursos disponibilizados na plataforma.',
      ],
    },
    {
      title: '8. Armazenamento e Retenção',
      paragraphs: [
        'Os dados pessoais serão armazenados pelo tempo necessário para atingir as finalidades informadas nesta Política, para execução do contrato, para cumprimento de obrigações legais, para preservação de prova documental e para exercício regular de direitos em processos administrativos, judiciais ou arbitrais.',
        'Quando o período de retenção não for mais necessário e inexistir obrigação legal de conservação, os dados poderão ser eliminados, anonimizados ou bloqueados, conforme a natureza da informação e os requisitos legais aplicáveis.',
        'A conservação de registros de aceite, contratação, cobrança, atendimento e comunicação poderá ser mantida pelo prazo necessário à segurança jurídica da empresa e à observância de prazos prescricionais ou decadenciais aplicáveis.',
      ],
    },
    {
      title: '9. Segurança da Informação',
      paragraphs: [
        'Adotamos medidas técnicas e administrativas razoáveis e compatíveis com a natureza dos dados tratados, incluindo controle de acesso, autenticação, segregação de permissões, registros de auditoria, backups, proteção contra acesso não autorizado e procedimentos internos de segurança.',
        'Apesar dos nossos esforços, nenhum sistema é totalmente imune a incidentes. Caso ocorra evento de segurança relevante, adotaremos medidas de contenção, investigação, correção e comunicação, quando cabível, conforme a legislação aplicável.',
        'O titular também possui papel importante na segurança, devendo proteger suas credenciais, não compartilhar senhas e manter atualizados seus meios de contato.',
      ],
    },
    {
      title: '10. Direitos do Titular',
      paragraphs: [
        'O titular poderá, nos termos da legislação aplicável, solicitar confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou desatualizados, anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos, portabilidade, informação sobre compartilhamento e revogação do consentimento, quando essa for a base legal utilizada.',
        'Também poderá solicitar a revisão de decisões automatizadas, quando aplicável, e apresentar reclamação perante a autoridade competente, observadas as regras legais.',
        'O exercício dos direitos poderá ser solicitado pelos canais oficiais de atendimento informados nesta Política ou na plataforma.',
      ],
    },
    {
      title: '11. Comunicações Operacionais e Promocionais',
      paragraphs: [
        'Poderemos enviar comunicações operacionais por e-mail, WhatsApp, SMS ou telefone para tratar de contratação, cobrança, agendamento, suporte, alterações contratuais, confirmação de visita e informações indispensáveis à execução do serviço.',
        'Mensagens promocionais, quando enviadas, deverão respeitar a base legal aplicável e poderão conter mecanismos de descadastramento ou oposição ao recebimento, conforme o caso.',
        'O titular compreende que comunicações indispensáveis para execução do contrato ou para cumprimento de obrigação legal não se confundem com mensagens promocionais.',
      ],
    },
    {
      title: '12. Dados de Menores de Idade',
      paragraphs: [
        'A plataforma não é destinada a menores de idade sem a devida representação ou assistência legal, quando exigida pela legislação aplicável.',
        'Caso haja coleta incidental de dados de menores, adotaremos os cuidados compatíveis com a lei e com a natureza do serviço, limitando o tratamento ao necessário e observando o melhor interesse da criança e do adolescente.',
      ],
    },
    {
      title: '13. Transferência e Hospedagem de Dados',
      paragraphs: [
        'Os dados poderão ser armazenados em servidores próprios ou de terceiros contratados para hospedagem, computação em nuvem, mensageria, automação, análise ou suporte técnico.',
        'Quando houver transferência internacional de dados, a operação deverá observar os requisitos legais e contratuais aplicáveis, garantindo nível adequado de proteção.',
      ],
    },
    {
      title: '14. Responsável pelo Tratamento e Canal de Contato',
      paragraphs: [
        'Até a formalização completa da empresa, o tratamento de dados será realizado pelos responsáveis legais do projeto S.O.S Manutenções, com atualização das informações cadastrais assim que o CNPJ e os dados empresariais estiverem devidamente constituídos.',
        'Canal de contato para assuntos de privacidade e proteção de dados: contato@sosmanutencoes.com.br',
      ],
    },
    {
      title: '15. Alterações desta Política',
      paragraphs: [
        'Esta Política de Privacidade poderá ser atualizada a qualquer tempo para refletir mudanças legais, técnicas, operacionais ou comerciais.',
        'A versão vigente permanecerá sempre disponível nesta página, com indicação da data da última atualização.',
        'Alterações relevantes poderão ser comunicadas aos clientes por e-mail, WhatsApp, aviso na plataforma ou outro meio contratualmente válido.',
      ],
    },
    {
      title: '16. Foro e Legislação Aplicável',
      paragraphs: [
        'Esta Política é regida pelas leis da República Federativa do Brasil.',
        'Fica eleito o foro da Comarca de Ipirá, Estado da Bahia, para dirimir quaisquer controvérsias oriundas desta Política, ressalvadas as hipóteses de competência absoluta previstas em lei.',
      ],
    },
  ],
};

export const CONSENTIMENTO_CONTENT: LegalDocument = {
  title: 'Termo de Consentimento',
  version: 'v1.0',
  lastUpdated: '02 de Julho de 2026',
  sections: [
    {
      title: '1. Objeto do Consentimento',
      paragraphs: [
        'Este Termo de Consentimento formaliza a autorização do titular dos dados pessoais para que a S.O.S Manutenções trate as informações necessárias à contratação, execução, cobrança, agendamento, atendimento e gestão dos serviços oferecidos por meio de assinatura digital.',
        'O consentimento aqui descrito é concedido de forma livre, informada e inequívoca, exclusivamente para as finalidades expressamente indicadas neste documento e na Política de Privacidade da plataforma.',
      ],
    },
    {
      title: '2. Dados Autorizados',
      paragraphs: [
        'Ao aceitar este termo, você consente com a coleta, o armazenamento e o tratamento dos seguintes dados, quando fornecidos voluntariamente: nome, e-mail, telefone ou WhatsApp, endereço do imóvel atendido, informações de cadastro, histórico de vistorias, chamados técnicos, relatórios de manutenção, fotos, vídeos e dados de faturamento necessários à contratação.',
        'Quando necessário para a prestação do serviço, também poderão ser tratados dados sobre o imóvel, os móveis atendidos, preferências de agendamento e observações técnicas relacionadas ao atendimento.',
      ],
    },
    {
      title: '3. Finalidades Autorizadas',
      paragraphs: [
        'Os dados pessoais autorizados por este termo poderão ser utilizados para a prestação dos serviços contratados, incluindo agendamento de vistorias, execução de manutenções, emissão de relatórios, atendimento técnico e suporte ao cliente.',
        'Também poderão ser utilizados para comunicações operacionais relacionadas ao plano de assinatura, como avisos de cobrança, confirmação de pagamento, renovação, reagendamento, atualização contratual e mensagens de suporte.',
        'Quando houver necessidade, os dados poderão ser utilizados para cumprimento de obrigações legais, exercício regular de direitos e defesa da S.O.S Manutenções em processos administrativos, judiciais ou extrajudiciais.',
      ],
    },
    {
      title: '4. Comunicações',
      paragraphs: [
        'Você autoriza o envio de comunicações por e-mail, WhatsApp, telefone ou outro canal informado no cadastro, desde que relacionadas à execução do contrato, ao suporte técnico, ao andamento da assinatura ou à comunicação operacional da plataforma.',
        'Mensagens promocionais, se forem enviadas, deverão observar a legislação aplicável e poderão conter opção de descadastramento ou oposição ao recebimento, quando cabível.',
        'A recusa em receber mensagens promocionais não impede a continuidade das comunicações necessárias à execução do contrato ou ao cumprimento de obrigação legal.',
      ],
    },
    {
      title: '5. Compartilhamento Autorizado',
      paragraphs: [
        'O titular declara estar ciente de que seus dados poderão ser compartilhados, estritamente quando necessário, com prestadores de serviços de pagamento, equipe técnica autorizada, fornecedores de tecnologia, hospedagem, armazenamento, comunicação e suporte operacional.',
        'O compartilhamento também poderá ocorrer com autoridades públicas, órgãos reguladores ou terceiros legitimados, quando houver obrigação legal, ordem formal, exercício regular de direitos ou necessidade de defesa da empresa.',
        'A S.O.S Manutenções não comercializa dados pessoais para fins de marketing de terceiros.',
      ],
    },
    {
      title: '6. Revogação do Consentimento',
      paragraphs: [
        'O consentimento pode ser revogado a qualquer momento, mediante solicitação ao canal oficial de atendimento ou ao e-mail [inserir e-mail de contato].',
        'A revogação não afeta a licitude do tratamento realizado com base no consentimento anteriormente concedido, nem impede o tratamento necessário à execução do contrato vigente, ao cumprimento de obrigação legal, ao exercício regular de direitos ou a outras bases legais aplicáveis.',
        'Caso a revogação inviabilize o tratamento de dados indispensáveis à execução do serviço contratado, a continuidade de determinados benefícios poderá ser comprometida até a regularização da situação ou até o término do vínculo contratual.',
      ],
    },
    {
      title: '7. Declaração do Titular',
      paragraphs: [
        'Ao marcar a caixa de aceite no formulário de contratação, o titular declara que leu, compreendeu e concordou com este Termo de Consentimento, com a Política de Privacidade, com os Termos de Uso e com o Contrato de Assinatura da S.O.S Manutenções.',
        'O titular declara ainda que teve oportunidade de tirar dúvidas antes da contratação e que compreende que este consentimento é um dos fundamentos do tratamento de dados pessoais na plataforma.',
      ],
    },
  ],
};

export const CONTRATO_CONTENT: LegalDocument = {
  title: 'Contrato de Adesão',
  version: 'v1.0',
  lastUpdated: '02 de Julho de 2026',
  sections: [
    {
  title: 'Cláusula 1ª — Das Partes e do Objeto',
  paragraphs: [
    'CONTRATADA: S.O.S Manutenções, neste ato representada na forma de seus atos constitutivos, doravante denominada simplesmente CONTRATADA;',
    'CONTRATANTE: pessoa física ou jurídica devidamente identificada no momento da contratação eletrônica, doravante denominada simplesmente CONTRATANTE;',
    'têm entre si justo e contratado o presente Contrato de Assinatura de Serviços, que se regerá pelas cláusulas e condições abaixo, bem como pelos Termos de Uso e pela Política de Privacidade da plataforma.',
    'O presente contrato tem por objeto a prestação, pela CONTRATADA, de serviços recorrentes de manutenção preventiva, corretiva limitada, inspeção técnica, regulagem, pequenos reparos, suporte operacional e benefícios acessórios, conforme o plano de assinatura escolhido pelo CONTRATANTE no momento da contratação.',
    'Os serviços contratados possuem natureza de assinatura com cobrança recorrente e benefícios periódicos, não se confundindo com seguro, garantia ilimitada, cobertura irrestrita, contrato de resultado ou prestação de serviço avulso sem vínculo de permanência.',
    'O plano escolhido, o valor da mensalidade, a periodicidade, a vigência mínima, os limites de cobertura, a quantidade de visitas, a franquia de mão de obra, os descontos e demais benefícios constarão da oferta exibida ao CONTRATANTE antes da contratação e integrarão este contrato para todos os fins.',
  ],
},
{
  title: 'Cláusula 2ª — Das Definições',
  paragraphs: [
    'Para fins deste contrato, considera-se:',
    'Plataforma: site, painel do cliente, sistema de contratação, sistema de pagamento, canais de atendimento e demais interfaces digitais da CONTRATADA.',
    'Plano de Assinatura: conjunto de serviços, limites, vantagens e condições comerciais ofertados pela CONTRATADA.',
    'Visita Técnica: deslocamento de profissional autorizado até o local indicado pelo CONTRATANTE para inspeção, avaliação, manutenção, regulagem ou reparo, conforme a cobertura do plano.',
    'Peças e Materiais: ferragens, dobradiças, corrediças, parafusos, puxadores, amortecedores, suportes, calços, batentes, lubrificantes, cola, silicone, itens de fixação e outros componentes necessários à execução do serviço.',
    'Mobiliário Coberto: móveis, ambientes e itens expressamente informados e aceitos no cadastro inicial, observadas as condições do plano.',
    'Mau Uso: qualquer dano, desgaste ou avaria decorrente de utilização inadequada, negligência, sobrecarga, instalação por terceiros, intervenção indevida, exposição a umidade excessiva, infiltração, impacto, incêndio, enchente, cupins, pragas, acidentes ou outras causas externas não relacionadas ao desgaste natural.',
  ],
},
{
  title: 'Cláusula 3ª — Da Adesão e do Aceite Eletrônico',
  paragraphs: [
    'A contratação será realizada de forma eletrônica, por meio da Plataforma, mediante escolha do plano, preenchimento dos dados cadastrais, leitura e aceite do presente contrato, dos Termos de Uso e da Política de Privacidade, e confirmação do pagamento ou da autorização de cobrança recorrente, conforme o meio disponível.',
    'O aceite eletrônico poderá ser comprovado por registros técnicos, incluindo, sem limitação: data e hora, endereço IP, versão dos documentos aceitos, e-mail cadastrado, identificação do dispositivo, navegador utilizado, hash do documento, protocolo de pagamento e demais metadados compatíveis com a operação.',
    'O CONTRATANTE declara que teve oportunidade de ler integralmente este contrato antes de concluir a contratação.',
  ],
},
{
  title: 'Cláusula 4ª — Da Vigência e da Fidelidade',
  paragraphs: [
    'A contratação será celebrada por prazo determinado, correspondente ao ciclo escolhido pelo CONTRATANTE, podendo ser de 6 (seis) meses ou 12 (doze) meses, conforme a oferta disponível no momento da adesão.',
    'Durante a vigência mínima contratada, o CONTRATANTE se compromete a permanecer no plano contratado até o término do período escolhido, salvo hipóteses legais imperativas, rescisão por descumprimento da CONTRATADA ou exercício válido do direito de arrependimento no prazo legal.',
    'Ao final da vigência mínima, o contrato poderá ser renovado automaticamente, se essa condição estiver expressamente indicada na oferta aceita, ou encerrado conforme as regras da Plataforma e o aviso prévio informado.',
  ],
},
{
  title: 'Cláusula 5ª — Do Direito de Arrependimento',
  paragraphs: [
    'Nas contratações realizadas fora do estabelecimento físico da CONTRATADA, inclusive por internet, telefone ou meio eletrônico, o CONTRATANTE poderá exercer o direito de arrependimento no prazo legal de 7 (sete) dias, contados da contratação, observada a legislação consumerista aplicável.',
    'Exercido o direito de arrependimento dentro do prazo legal, a contratação será desfeita conforme as regras legais e operacionais aplicáveis, inclusive quanto a eventual serviço já iniciado mediante solicitação expressa do CONTRATANTE.',
    'Após o prazo legal de arrependimento, não haverá cancelamento antecipado imotivado antes do término da vigência mínima contratada, salvo nas hipóteses legais imperativas, descumprimento contratual da CONTRATADA ou outra situação prevista em lei.',
  ],
},
    {
  title: 'Cláusula 6ª — Do Pagamento',
  paragraphs: [
    'O valor da assinatura corresponderá ao plano escolhido pelo CONTRATANTE no momento da contratação, sendo exibido de forma clara antes da conclusão da compra.',
    'Os pagamentos serão processados por intermédio do Mercado Pago ou outra instituição de pagamento autorizada que venha a substituí-lo, não sendo armazenados pela CONTRATADA dados completos de cartões de crédito ou outros meios de pagamento.',
    'A cobrança ocorrerá de forma recorrente durante toda a vigência do contrato, conforme o ciclo de cobrança informado na contratação.',
    'A eventual recusa da operadora do cartão, insuficiência de saldo, expiração do cartão ou qualquer outro problema relacionado ao meio de pagamento é de responsabilidade do CONTRATANTE.',
    'A CONTRATADA poderá realizar novas tentativas automáticas de cobrança em caso de falha no pagamento, conforme as regras do processador de pagamentos.',
  ],
},
{
  title: 'Cláusula 7ª — Da Inadimplência',
  paragraphs: [
    'O atraso no pagamento poderá ocasionar a suspensão imediata dos benefícios do plano até a regularização da pendência financeira.',
    'Enquanto permanecer inadimplente, o CONTRATANTE não terá direito ao agendamento de visitas preventivas, corretivas, utilização de descontos exclusivos, sorteios, benefícios promocionais ou qualquer outra vantagem prevista no plano.',
    'Persistindo a inadimplência, a CONTRATADA poderá cancelar definitivamente a assinatura, sem prejuízo da cobrança judicial ou extrajudicial dos valores devidos.',
    'O cancelamento por inadimplência não exime o CONTRATANTE da obrigação de quitar os valores vencidos durante a vigência contratual.',
  ],
},
{
  title: 'Cláusula 8ª — Das Visitas Técnicas',
  paragraphs: [
    'As visitas preventivas e corretivas serão realizadas conforme a quantidade prevista no plano contratado.',
    'A primeira visita será agendada após a confirmação da contratação, respeitando a disponibilidade operacional da CONTRATADA.',
    'As datas das visitas poderão ser ajustadas em comum acordo entre as partes.',
    'Caso o CONTRATANTE não esteja presente no horário agendado ou impeça a execução do serviço sem aviso prévio, a visita será considerada realizada para todos os efeitos contratuais, podendo haver nova visita apenas mediante disponibilidade da agenda.',
    'As visitas possuem caráter preventivo e corretivo limitado, não sendo destinadas à execução de reformas completas ou serviços extraordinários.',
  ],
},
{
  title: 'Cláusula 9ª — Dos Serviços Incluídos',
  paragraphs: [
    'Os serviços incluídos dependerão exclusivamente do plano contratado pelo cliente.',
    'Poderão estar incluídos inspeções preventivas, regulagem de dobradiças, regulagem de corrediças, aperto de parafusos, alinhamentos, lubrificação técnica, limpeza de ferragens, pequenos ajustes, emissão de relatório técnico, atendimento prioritário, descontos em serviços extras, mão de obra corretiva e substituição de pequenas ferragens, respeitados os limites de cada plano.',
    'Os benefícios não são cumulativos entre visitas nem geram crédito financeiro caso não sejam utilizados.',
  ],
},
{
  title: 'Cláusula 10ª — Dos Serviços Não Cobertos',
  paragraphs: [
    'Não fazem parte da assinatura reformas completas, fabricação de móveis, troca integral de armários, substituição de chapas de MDF, recuperação estrutural, pintura, vidros, pedras, tampos, instalações elétricas ou hidráulicas, serviços de alvenaria ou qualquer atividade não expressamente prevista no plano contratado.',
    'Também não estão cobertos danos causados por enchentes, incêndios, infiltrações, cupins, pragas, acidentes, vandalismo, mau uso, modificações realizadas por terceiros ou desgaste decorrente de utilização inadequada.',
    'Os serviços não cobertos poderão ser executados mediante orçamento específico aprovado previamente pelo CONTRATANTE.',
  ],
},
{
  title: 'Cláusula 11ª — Das Peças e Materiais',
  paragraphs: [
    'A substituição de peças somente será realizada quando expressamente prevista no plano contratado.',
    'As peças incluídas estarão limitadas aos valores, quantidades e categorias informadas na descrição comercial de cada plano.',
    'Peças não contempladas pelo plano poderão ser adquiridas diretamente da CONTRATADA ou por outro fornecedor escolhido pelo CONTRATANTE.',
    'Quando houver cobertura apenas da mão de obra, todos os materiais utilizados serão de responsabilidade financeira do CONTRATANTE.',
  ],
},
{
  title: 'Cláusula 12ª — Dos Serviços Extras',
  paragraphs: [
    'Sempre que forem identificados serviços não cobertos pela assinatura, será apresentado orçamento separado para aprovação do CONTRATANTE.',
    'Os descontos previstos em cada plano serão aplicados exclusivamente sobre a mão de obra, salvo quando houver previsão diversa na oferta comercial.',
    'A recusa do orçamento pelo CONTRATANTE não gera qualquer obrigação adicional para a CONTRATADA além dos serviços originalmente contratados.',
  ],
},
{
  title: 'Cláusula 13ª — Dos Agendamentos',
  paragraphs: [
    'Os agendamentos serão realizados pelos canais oficiais de atendimento da CONTRATADA.',
    'Pedidos de reagendamento deverão ser feitos com antecedência mínima de 24 (vinte e quatro) horas, salvo situações excepcionais.',
    'A CONTRATADA poderá reagendar visitas em razão de condições climáticas, problemas operacionais, motivos de força maior ou outras circunstâncias que impeçam a execução segura do serviço.',
  ],
},
{
  title: 'Cláusula 14ª — Da Garantia dos Serviços',
  paragraphs: [
    'Os serviços executados pela CONTRATADA possuem garantia apenas sobre a mão de obra realizada, pelo prazo informado na ordem de serviço correspondente.',
    'A garantia não cobre danos provocados por terceiros, uso inadequado, desgaste natural, impactos, modificações posteriores ou defeitos em peças fornecidas pelo próprio CONTRATANTE.',
    'Constatado defeito decorrente da execução da mão de obra da CONTRATADA durante o prazo de garantia, será realizada nova visita para correção sem cobrança adicional.',
  ],
},
{
  title: 'Cláusula 15ª — Das Promoções e Benefícios',
  paragraphs: [
    'A CONTRATADA poderá oferecer sorteios, brindes, kits de limpeza, campanhas promocionais e outros benefícios exclusivos aos assinantes.',
    'Tais benefícios possuem caráter promocional, podendo ser alterados, substituídos ou encerrados a qualquer momento para novas contratações, sem prejuízo dos direitos adquiridos durante campanhas específicas.',
    'A participação em promoções observará regulamento próprio quando exigido pela legislação.',
  ],
},
  ],
};

export const TERMOS_CONTENT: LegalDocument = {
  title: 'Termos de Serviço',
  version: 'v1.0',
  lastUpdated: '2 de Julho de 2026',
  sections: [
    {
      title: '1. Identificação',
      paragraphs: [
        'Os presentes Termos de Uso regulam a utilização do site, da plataforma de contratação e dos serviços oferecidos pela S.O.S Manutenções.',
        'A empresa encontra-se estabelecida no município de Ipirá, Estado da Bahia. Todas as referências à CONTRATADA dizem respeito aos responsáveis legais pelo empreendimento, sendo os dados cadastrais completos informados assim que houver o registro empresarial.',
        'Ao utilizar este site ou contratar qualquer plano, o usuário declara ter lido e aceitado integralmente estes Termos de Uso.',
      ],
    },
    {
      title: '2. Objeto',
      paragraphs: [
        'A plataforma destina-se à contratação de planos de assinatura para manutenção preventiva de móveis, inspeções técnicas, pequenos reparos e demais benefícios descritos em cada plano.',
        'Os serviços serão prestados exclusivamente dentro da área de atendimento definida pela CONTRATADA.',
        'Serviços não previstos no plano poderão ser contratados separadamente mediante orçamento prévio.',
      ],
    },
    {
      title: '3. Cadastro',
      paragraphs: [
        'O usuário deverá fornecer informações verdadeiras, completas e atualizadas durante o cadastro.',
        'É responsabilidade do cliente manter seus dados atualizados, especialmente telefone, e-mail e endereço do imóvel atendido.',
        'O fornecimento de informações falsas poderá resultar na suspensão ou cancelamento da assinatura.',
      ],
    },
    {
      title: '4. Contratação',
      paragraphs: [
        'A contratação ocorre exclusivamente por meio eletrônico.',
        'Antes da conclusão da assinatura, o cliente terá acesso ao Contrato de Assinatura, Política de Privacidade e Termo de Consentimento.',
        'O aceite eletrônico possui validade jurídica e produz todos os efeitos legais previstos na legislação brasileira.',
      ],
    },
    {
      title: '5. Planos de Assinatura',
      paragraphs: [
        'Cada plano possui benefícios, limites de atendimento, quantidade de visitas, descontos e demais condições próprias.',
        'Os benefícios estão descritos na página oficial dos planos e passam a integrar o contrato após a contratação.',
        'Benefícios não utilizados durante a vigência não geram crédito, reembolso ou acumulação para períodos posteriores.',
      ],
    },
    {
      title: '6. Pagamentos',
      paragraphs: [
        'Os pagamentos são processados por empresa especializada em meios de pagamento, atualmente o Mercado Pago.',
        'A S.O.S Manutenções não armazena dados completos de cartões de crédito ou outros meios de pagamento.',
        'Falhas decorrentes da operadora do cartão, instituição financeira ou insuficiência de saldo são de responsabilidade do cliente.',
      ],
    },
    {
      title: '7. Cancelamento',
      paragraphs: [
        'O cliente poderá exercer o direito de arrependimento no prazo legal de 7 (sete) dias, quando aplicável às contratações realizadas pela internet.',
        'Após esse período, não será permitido o cancelamento antecipado antes do término da vigência contratada.',
        'Ao final do período contratado, o cliente poderá optar por renovar ou encerrar sua assinatura.',
      ],
    },
    {
      title: '8. Responsabilidades do Cliente',
      paragraphs: [
        'Permitir o acesso da equipe técnica ao imóvel nos horários previamente agendados.',
        'Manter ambiente seguro para execução dos serviços.',
        'Comunicar qualquer alteração de endereço ou dados cadastrais.',
        'Utilizar os serviços de boa-fé, observando todas as condições previstas neste documento.',
      ],
    },
    {
      title: '9. Responsabilidades da S.O.S Manutenções',
      paragraphs: [
        'Executar os serviços previstos no plano contratado com zelo, qualidade e dentro das condições estabelecidas.',
        'Manter equipe devidamente treinada para realização das inspeções e manutenções.',
        'Informar previamente qualquer serviço que não esteja coberto pela assinatura antes da execução.',
      ],
    },
    {
      title: '10. Limitação dos Serviços',
      paragraphs: [
        'A assinatura contempla apenas os serviços expressamente previstos no plano contratado.',
        'Não estão incluídas reformas completas, fabricação de móveis, substituição integral de mobiliário, obras civis ou qualquer serviço não descrito na contratação.',
        'A substituição de peças observará os limites previstos em cada plano.',
      ],
    },
    {
      title: '11. Propriedade Intelectual',
      paragraphs: [
        'Todo o conteúdo deste site, incluindo textos, imagens, identidade visual, logotipos, códigos, ilustrações, documentos e materiais institucionais pertence à S.O.S Manutenções ou aos seus respectivos licenciantes.',
        'É proibida a reprodução, distribuição ou utilização sem autorização prévia e por escrito.',
      ],
    },
    {
      title: '12. Disponibilidade da Plataforma',
      paragraphs: [
        'A plataforma poderá passar por manutenções, atualizações ou indisponibilidades temporárias.',
        'A CONTRATADA envidará esforços para manter o serviço disponível, mas não garante funcionamento ininterrupto da plataforma.',
      ],
    },
    {
      title: '13. Alterações',
      paragraphs: [
        'Os presentes Termos de Uso poderão ser atualizados sempre que necessário.',
        'A versão vigente permanecerá disponível nesta página, contendo a data da última atualização.',
      ],
    },
    {
      title: '14. Legislação Aplicável e Foro',
      paragraphs: [
        'Os presentes Termos de Uso são regidos pelas leis da República Federativa do Brasil.',
        'Fica eleito o foro da Comarca de Ipirá, Estado da Bahia, para dirimir quaisquer controvérsias oriundas destes Termos, ressalvadas as hipóteses de competência absoluta previstas em lei.',
      ],
    },
  ],
};
