/**
 * THE BUILDER'S GOLD - Elite & Essential Templates Library
 * 50+ Blueprints validados para escala, dominância e inovação global.
 */

export interface AppTemplate {
    id: string;
    name: string;
    category: string;
    description: string;
    prompt: string;
    images?: string[];
    icon?: string;
}

export const TEMPLATES: AppTemplate[] = [
    // --- ALTA ESCALA: OURO DO BUILDER (High-Impact SaaS & AI) ---
    {
        id: 'ai-search-perplexity',
        name: 'AI Search Engine (Perplexity Style)',
        category: 'Alta Escala: Ouro do Builder',
        description: 'Motor de busca semântica com RAG, citações de fontes reais e visualização de dados em tempo real.',
        prompt: `Crie um motor de busca de IA estilo Perplexity:
- Interface de busca minimalista com input central
- Sistema de resposta baseada em RAG (Retrieval-Augmented Generation) com citações numeradas
- Sidebar com fontes originais e links verificados
- Visualização de dados dinâmica (gráficos e tabelas) gerada a partir da busca
- Histórico de threads de pesquisa persistente
- Design Dark Premium com foco em tipografia e legibilidade extrema`,
    },
    {
        id: 'autonomous-dev-agent',
        name: 'Autonomous Dev Agent Dashboard',
        category: 'Alta Escala: Ouro do Builder',
        description: 'Interface de comando para agentes de codificação autônomos com visualização de logs e plano de ação.',
        prompt: `Desenvolva um dashboard para Agentes de Código Autônomos (estilo Devin):
- Terminal interativo para comando do agente
- Visualizador de plano de ação estruturado (passo a passo)
- Browser interno para o agente testar e debugar aplicações
- Logs de execução detalhados com status de sucesso/erro
- Integração visual com repositórios Git
- Design de alta tecnologia com elementos neon e layout multi-painel`,
    },
    {
        id: 'multi-tenant-saas-boilerplate',
        name: 'Multi-Tenant Micro-SaaS OS',
        category: 'Alta Escala: Ouro do Builder',
        description: 'A fundação completa para qualquer SaaS com gestão de workspaces, billing e subdomínios.',
        prompt: `Crie uma fundação robusta para Micro-SaaS Multi-Tenant:
- Dashboard de gestão de Workspaces (equipes e membros)
- Fluxo de Billing com planos Pro/Enterprise e checkout integrado (simulado)
- Sistema de permissões baseadas em roles (RBAC)
- Onboarding de usuário fluido com tour interativo
- Analytics de uso por cliente e por feature
- Interface limpa e escalável pronta para White-Label`,
    },
    {
        id: 'vertical-ai-crm-real-estate',
        name: 'Vertical AI CRM: Imobiliário',
        category: 'Alta Escala: Ouro do Builder',
        description: 'CRM especializado que usa IA para prever chances de fechamento e sugerir imóveis.',
        prompt: `Desenvolva um CRM de IA Vertical para o mercado imobiliário:
- Pipeline de vendas com lead scoring baseado em comportamento
- Sugestão automática de imóveis para leads usando matching semântico
- Agendador de visitas integrado com calendários de múltiplos corretores
- Gerador de contratos dinâmico com IA
- Dashboard de performance com filtros por região e tipo de imóvel
- UI focada em imagens de alta qualidade e mapas interativos`,
    },
    {
        id: 'ai-video-repurposing-engine',
        name: 'AI Video Repurposing Engine',
        category: 'Alta Escala: Ouro do Builder',
        description: 'Plataforma para transformar vídeos longos em clipes virais para Reels, TikTok e YouTube Shorts.',
        prompt: `Crie um motor de reciclagem de vídeo por IA:
- Interface de upload e player de vídeo original
- Segmentação automática de "momentos virais" usando análise de áudio e visual
- Editor de legendas dinâmicas e automáticas
- Gerador de títulos e descrições otimizados para cada rede social
- Calendário de publicação multiplataforma
- Dashboard de métricas de engajamento acumuladas das redes`,
    },
    {
        id: 'multi-agent-orchestrator',
        name: 'Multi-Agent Orchestrator',
        category: 'Alta Escala: Ouro do Builder',
        description: 'Orquestre múltiplos agentes (Dev, Copy, UX) para trabalharem em conjunto em um único objetivo.',
        prompt: `Desenvolva uma plataforma de Orquestração de Agentes:
- Workflow visual de agentes conectados (estilo LangGraph/n8n)
- Área de chat coletiva onde diferentes agentes colaboram
- Dashboard de alocação de tokens e custos por tarefa
- Biblioteca de Personas (templates de agentes especializados)
- Histórico de execuções com rastreabilidade de decisões
- Design focado em fluxo de trabalho e eficiência modular`,
    },
    {
        id: 'ai-financial-analyst',
        name: 'Hedge Fund AI Analyst',
        category: 'Alta Escala: Ouro do Builder',
        description: 'Painel financeiro de elite com análise de sentimentos de notícias e previsões algorítmicas.',
        prompt: `Crie um Dashboard de Analista Financeiro IA:
- Monitoramento de tickers em tempo real com gráficos técnicos
- Análise de sentimento (Sentiment Analysis) de notícias globais
- Alertas preditivos baseados em anomalias de mercado
- Gerador de relatórios semanais automáticos via IA
- Interface Estilo Bloomberg com dados densos e alta atualização
- Modo escuro profissional com cores de contraste financeiro`,
    },
    {
        id: 'personalized-ai-tutor',
        name: 'Personalized AI Tutor & LMS',
        category: 'Alta Escala: Ouro do Builder',
        description: 'Plataforma de ensino que cria currículos e exercícios customizados conforme o progresso do aluno.',
        prompt: `Desenvolva um Tutor de IA Personalizado:
- Avaliação de nível inicial automática
- Gerador de caminhos de aprendizado dinâmicos (Learning Paths)
- Chat interativo para dúvidas persistentes com memória de longo prazo do aluno
- Flashcards e exercícios gerados a partir do conteúdo estudado
- Dashboard de progresso por competências (Skill Mapping)
- Interface motivadora estilo Duolingo/Masterclass`,
    },
    {
        id: 'ai-voice-call-scheduler',
        name: 'AI Voice Call Scheduler',
        category: 'Alta Escala: Ouro do Builder',
        description: 'Integração de agentes de voz para agendamento de consultas e chamadas de vendas autônomas.',
        prompt: `Crie um sistema de agendamento por voz via IA:
- Configuração de "Script de Voz" para o agente
- Dashboard de chamadas realizadas com transcrições automáticas
- Calendário integrado para visualização de agendamentos confirmados pelo agente
- Integração visual com ferramentas de telefonia (Vapi/Twilio)
- Análise de conversão de chamadas por agente
- Interface limpa focada em controle de operação de telefonia`,
    },
    {
        id: 'saas-marketplace-builder',
        name: 'Multi-Vendor SaaS Marketplace',
        category: 'Alta Escala: Ouro do Builder',
        description: 'Plataforma para vender e gerenciar múltiplos produtos digitais de diferentes fornecedores.',
        prompt: `Desenvolva um Marketplace para SaaS:
- Área de fornecedor para listagem de produtos e gestão de vendas
- Sistema de comissões e pagamentos automatizado (Stripe style)
- Review e rating de produtos com verificação de compra
- Dashboard de comprador com gestão de assinaturas ativas
- Filtros avançados por categoria e modelo de pricing
- Design moderno estilo App Store ou Product Hunt`,
    },

    // --- ELITE: AI AGENTS ---
    {
        id: 'agente-vendas-cognitivo',
        name: 'Agente de Vendas Cognitivo',
        category: 'Elite: AI Agents',
        description: 'Especialista em fechamento high-ticket com análise de sentimento e persuasão avançada.',
        prompt: `Crie um Agente de Vendas Cognitivo: Interface de chat, análise de perfil em tempo real, roteiros dinâmicos, dashboard de conversão e sistema de handoff inteligente para humanos.`,
    },
    {
        id: 'customer-success-ai',
        name: 'CS AI com Memória Contextual',
        category: 'Elite: AI Agents',
        description: 'Agente de suporte que conhece todo o histórico do cliente e antecipa problemas (Churn Prevention).',
        prompt: `Desenvolva um Agente de CS IA: Integração com histórico do ticket, análise de risco de churn, sistema de tickets automático e base de conhecimento RAG integrada.`,
    },
    {
        id: 'hr-culture-sentiment-ai',
        name: 'HR Culture Sentiment Monitor',
        category: 'Elite: AI Agents',
        description: 'IA que monitora comunicações e feedbacks internos para medir o pulso da cultura e prever demissões.',
        prompt: `Crie um Monitor de Sentimento de RH: Dashboard anônimo de satisfação, análise de padrões de linguagem, alertas de burnout/insatisfação e sugestões de intervenção para gestores.`,
    },
    {
        id: 'legal-document-auditor-ai',
        name: 'Legal Document Auditor AI',
        category: 'Elite: AI Agents',
        description: 'Audite contratos e documentos legais procurando por cláusulas de risco e inconsistências.',
        prompt: `Desenvolva um Auditor Jurídico IA: Upload de PDF/Docx, marcação automática de riscos, resumo de obrigações e comparador de versões com destaque para alterações críticas.`,
    },
    {
        id: 'code-review-agent-ai',
        name: 'AI Code Auditor & Optimizer',
        category: 'Elite: AI Agents',
        description: 'Agente que revisa PRs, sugere refatorações e identifica gargalos de performance e segurança.',
        prompt: `Crie um Agente de Code Review IA: Listagem de vulnerabilidades, sugestão de refatoração para performance, verificação de padrões de design e dashboard de dívida técnica.`,
    },
    {
        id: 'medical-scribe-ai',
        name: 'AI Medical Scribe & Intake',
        category: 'Elite: AI Agents',
        description: 'Automatize a transcrição de consultas e o preenchimento de prontuários médicos com conformidade HIPAA.',
        prompt: `Desenvolva um Scribe Médico IA: Transcrição em tempo real, extração de sintomas e diagnósticos sugeridos, integração com prontuário e dashboard de histórico do paciente.`,
    },
    {
        id: 'ecommerce-upsell-agent',
        name: 'E-commerce Dynamic Upsell Agent',
        category: 'Elite: AI Agents',
        description: 'Agente de chat que personaliza ofertas de venda cruzada durante o suporte ao cliente.',
        prompt: `Crie um Agente de Upsell Dinâmico: Integração com catálogo de produtos, IA que recomenda itens complementares com base no carrinho e gatilhos de escassez inteligentes.`,
    },
    {
        id: 'deep-web-research-ai',
        name: 'AI Deep Research Assistant',
        category: 'Elite: AI Agents',
        description: 'Agente especializado em pesquisa técnica profunda, coleta de dados acadêmicos e síntese de mercado.',
        prompt: `Desenvolva um Assistente de Pesquisa IA: Busca em bases científicas, sintetizador de artigos longos, gerador de bibliografias e dashboard de tópicos relacionados.`,
    },
    {
        id: 'marketing-strategist-ai',
        name: 'GTM Strategist AI',
        category: 'Elite: AI Agents',
        description: 'IA que desenha o plano de Go-To-Market baseado no nicho, ICP e concorrência.',
        prompt: `Crie um Estrategista de Marketing IA: Gerador de ICP (Ideal Customer Profile), análise de concorrência SWOTT, sugestão de canais de aquisição e previsão de custos por lead.`,
    },
    {
        id: 'ai-lead-data-enrichment',
        name: 'AI Lead Data Enrichment',
        category: 'Elite: AI Agents',
        description: 'Enriqueça dados de leads automaticamente buscando informações em redes sociais e sites corporativos.',
        prompt: `Desenvolva uma ferramenta de Enriquecimento de Leads IA: Web scraping inteligente, consolidação de perfis sociais, validação de email e classificação de cargo/autoridade.`,
    },

    // --- ELITE: DOMINÂNCIA ---
    {
        id: 'dominancia-conteudo-ia',
        name: 'Motor de Dominância de Conteúdo',
        category: 'Elite: Dominância',
        description: 'Sistema que transforma ideias brutas em 30 dias de conteúdo multiplataforma usando IA.',
        prompt: `Crie uma ferramenta de Geração de Conteúdo Estratégico: Input de "Tópico de Autoridade", gerador de roteiros reels/threads/linkedin e calendário editorial interativo.`,
    },
    {
        id: 'funil-ia-personalizado',
        name: 'Funil Dinâmico de Conversão IA',
        category: 'Elite: Dominância',
        description: 'Landing pages que mudam em tempo real baseadas no comportamento e origem do usuário.',
        prompt: `Crie uma Engine de Landing Pages Dinâmicas: Hero que altera título via UTM, prova social dinâmica por nicho e chatbot de suporte contextual à oferta apresentada.`,
    },
    {
        id: 'omnichannel-viral-loops',
        name: 'Omnichannel Viral Loops Generator',
        category: 'Elite: Dominância',
        description: 'Crie e gerencie mecanismos de viralidade (indicação, recompensas) em todos os canais de venda.',
        prompt: `Desenvolva um Gerador de Loops Virais: Gestão de refer-a-friend, dashboard de recompensas, integrações com email/sms e analytics de propagação viral (K-factor).`,
    },
    {
        id: 'ai-influencer-strategy',
        name: 'AI Influencer Strategist',
        category: 'Elite: Dominância',
        description: 'Identifique influenciadores ideais e gere briefs personalizados automaticamente para cada um.',
        prompt: `Crie um Estrategista de Influenciadores IA: Busca por nicho e overlap de audiência, gerador de briefing de campanha e dashboard de ROI de influenciadores.`,
    },
    {
        id: 'personal-brand-os',
        name: 'Personal Brand Authority OS',
        category: 'Elite: Dominância',
        description: 'O sistema operacional completo para construir e gerenciar uma marca pessoal de autoridade.',
        prompt: `Desenvolva um OS de Marca Pessoal: Gestão de pilares de conteúdo, repositório de histórias (Story Bank), tracker de aparições em mídia e dashboard de métricas de autoridade social.`,
    },
    {
        id: 'seo-dominance-cluster',
        name: 'SEO Dominance Cluster Gen',
        category: 'Elite: Dominância',
        description: 'Gere clusters de tópicos e estruturas de silos para dominar o tráfego orgânico de qualquer nicho.',
        prompt: `Crie um Gerador de Clusters SEO: Identificação de Pillar Pages e Topic Clusters, gerador de estruturas de posts e mapa de links internos sugeridos por IA.`,
    },
    {
        id: 'podcast-to-dominance',
        name: 'Podcast-to-Dominance Engine',
        category: 'Elite: Dominância',
        description: 'Transforme episódios de áudio em uma máquina de tráfego, SEO e conteúdo social.',
        prompt: `Desenvolva o Podcast Engine: Transcrição inteligente, geração de Show Notes otimizados para SEO, corte de nuggets e snippets para redes sociais e gerador de newsletter do episódio.`,
    },
    {
        id: 'ad-creative-iteration-ai',
        name: 'AI Ad Creative Iteration Engine',
        category: 'Elite: Dominância',
        description: 'Gere centenas de variações de criativos de anúncios baseados em ganchos e copyvriting emocional.',
        prompt: `Crie um Motor de Criativos IA: Gerador de headlines de alta conversão, scripts de VSL curtos e variações de imagens para testes A/B rápidos (Feed/Stories).`,
    },

    // --- ELITE: OPERAÇÕES ---
    {
        id: 'onboarding-premium-saas',
        name: 'Onboarding Multi-Step Pro',
        category: 'Elite: Operações',
        description: 'Fluxo de entrada de clientes desenhado para reduzir churn e acelerar o "Time to Value".',
        prompt: `Desenvolva um Onboarding Premium: Passos gamificados, coleta inteligente de dados, vídeo player integrado e setup automático de workspace.`,
    },
    {
        id: 'dashboard-bi-cognitivo',
        name: 'Dashboard de Dominância Operacional',
        category: 'Elite: Operações',
        description: 'Painel de controle para negócios que operam com grandes volumes e precisam de clareza absoluta.',
        prompt: `Crie um Dashboard de Elite: KPIs financeiros, predict de IA para LTV/Churn, analytics de produtividade e interface estilo Command Center.`,
    },
    {
        id: 'supply-chain-ai-monitor',
        name: 'Supply Chain AI Forecaster',
        category: 'Elite: Operações',
        description: 'Monitore e preveja demandas de estoque e gargalos logísticos usando modelos preditivos.',
        prompt: `Desenvolva um Monitor de Supply Chain: Previsão de demanda (Demand Forecasting), alertas de quebra de estoque e otimização de rotas logísticas com visualização no mapa.`,
    },
    {
        id: 'ai-pm-project-discovery',
        name: 'Discovery & Scoping AI PM',
        category: 'Elite: Operações',
        description: 'Ferramenta que ajuda a definir escopos de projetos complexos, gerando PRDs e backlogs em segundos.',
        prompt: `Crie um Assistente de Discovery IA: Gerador de PRD (Product Requirement Document), estrutura de backlog de épicos/stories e estimativa de tempo e esforço baseada em IA.`,
    },
    {
        id: 'internal-rag-knowledge-base',
        name: 'Company RAG Knowledge Base',
        category: 'Elite: Operações',
        description: 'Base de conhecimento interna que permite aos funcionários conversarem com os documentos da empresa.',
        prompt: `Desenvolva uma Base RAG Interna: Indexação de múltiplos formatos (Docs/PDF/Slack/Notion), chat com permissões por setor e IA que cita a fonte interna da resposta.`,
    },
    {
        id: 'automated-billing-recovery',
        name: 'Revenue Recovery OS',
        category: 'Elite: Operações',
        description: 'Identifique e recupere faturas atrasadas e churn indesejado automaticamente via comunicação inteligente.',
        prompt: `Crie um OS de Recuperação de Receita: Monitor de churn (Failed Payments), régua de cobrança automática via IA e dashboard de receita recuperada vs perdida.`,
    },
    {
        id: 'team-velocity-monitor',
        name: 'Team Velocity & ROI Monitor',
        category: 'Elite: Operações',
        description: 'Mensure a eficiência operacional das equipes e o ROI de cada nova funcionalidade desenvolvida.',
        prompt: `Desenvolva um Monitor de Velocity: Integração com Jira/Github, cálculo automático de ROI por feature e monitor de bem-estar da equipe para evitar burnout técnico.`,
    },

    // --- ESSENCIAL: IA ---
    {
        id: 'ai-chat-interface',
        name: 'Interface de Chat AI Base',
        category: 'Essencial: IA',
        description: 'Interface moderna para aplicações de chat baseadas em LLMs.',
        prompt: `Desenvolva uma interface de chat para IA moderna e fluida com mensagens diferenciadas, Markdown e histórico de conversas.`,
    },
    {
        id: 'ai-image-studio',
        name: 'AI Image Creative Studio',
        category: 'Essencial: IA',
        description: 'Gerenciador de prompts e galeria para geração de imagens profissionais.',
        prompt: `Crie uma galeria de imagens IA: Gestão de prompts (Negative prompts/Styles), histórico de gerações e botões de download e compartilhamento.`,
    },
    {
        id: 'ai-transcription-bridge',
        name: 'Speech-to-Text Bridge',
        category: 'Essencial: IA',
        description: 'Converta áudios e vídeos em textos limpos e traduzidos instantaneamente.',
        prompt: `Desenvolva um Transcritor IA: Upload de áudio, geração de legendas formatadas, tradução automática e destaque de palavras-chave.`,
    },
    {
        id: 'ai-localization-tool',
        name: 'Localization & Translation Pro',
        category: 'Essencial: IA',
        description: 'Localize sites e apps para múltiplos idiomas preservando o contexto e o tom.',
        prompt: `Crie uma ferramenta de Localização IA: Tradução contextual de arquivos JSON/Markdown e dashboard para revisão humana de strings críticas.`,
    },
    {
        id: 'ai-summary-engine',
        name: 'Summary & Insight Engine',
        category: 'Essencial: IA',
        description: 'Resuma longos textos, vídeos do YouTube ou documentos em tópicos acionáveis.',
        prompt: `Desenvolva um Resumidor IA: Campo para URL/Texto longo, gerador de bullet points e exportação em formato de resumo executivo.`,
    },

    // --- ESSENCIAL: MARKETING & VENDAS ---
    {
        id: 'saas-landing-page',
        name: 'Landing Page SaaS Base',
        category: 'Essencial: Marketing',
        description: 'Template de alta conversão para produtos SaaS com seções básicas.',
        prompt: `Desenvolva uma Landing Page SaaS moderna com Hero, Features, Pricing e FAQ.`,
    },
    {
        id: 'newsletter-growth-dash',
        name: 'Newsletter Growth Dashboard',
        category: 'Essencial: Marketing',
        description: 'Painel para monitorar inscritos, taxas de abertura e crescimento orgânico de newsletters.',
        prompt: `Crie um Dashboard de Newsletter: Gráfico de novos inscritos, taxa de abertura por edição e gestão de lista de assinantes.`,
    },
    {
        id: 'link-tree-pro',
        name: 'Bio Link with Analytics',
        category: 'Essencial: Marketing',
        description: 'Página de links para bio de redes sociais com analytics e design premium.',
        prompt: `Desenvolva uma página de links (estilo Linktree) com botões animados, integração de pixels de tracking e dashboard de cliques simples.`,
    },
    {
        id: 'lead-capture-quiz',
        name: 'Lead Capture Quiz Funnel',
        category: 'Essencial: Marketing',
        description: 'Transforme visitantes em leads qualificados através de quizes interativos e lúdicos.',
        prompt: `Crie um Quiz de Captura de Leads: Sequência de perguntas interativas, lógica de caminhos baseada em respostas e formulário de captura final com oferta personalizada.`,
    },

    // --- ESSENCIAL: PRODUTIVIDADE & NEGÓCIOS ---
    {
        id: 'todo-app',
        name: 'App de Tarefas Pro',
        category: 'Essencial: Produtividade',
        description: 'Gerenciamento de tarefas limpo e funcional com persistência local.',
        prompt: `Crie uma aplicação de tarefas moderna com checkboxes, delete e persistência no localStorage.`,
    },
    {
        id: 'kanban-board',
        name: 'Quadro Kanban Base',
        category: 'Essencial: Produtividade',
        description: 'Quadro de produtividade com colunas e gestão de fluxo simples.',
        prompt: `Crie um quadro Kanban básico com colunas To-do, Doing, Done e Drag-and-drop.`,
    },
    {
        id: 'markdown-notes-app',
        name: 'Markdown Notes OS',
        category: 'Essencial: Produtividade',
        description: 'App de anotações com suporte total a Markdown e organização por tags.',
        prompt: `Desenvolva um App de Notas: Editor Markdown com preview em tempo real, busca rápida e sistema de pastas/tags para organização.`,
    },
    {
        id: 'e-commerce-dashboard',
        name: 'Dashboard de Vendas Base',
        category: 'Essencial: Negócios',
        description: 'Painel administrativo para controle simples de vendas e estoque.',
        prompt: `Crie um Dashboard básico com KPIs de vendas, listagem de pedidos e controle de estoque.`,
    },
    {
        id: 'inventory-manager-lite',
        name: 'Inventory Manager Lite',
        category: 'Essencial: Negócios',
        description: 'Gestão de estoque simplificada para pequenos negócios e e-commerce.',
        prompt: `Desenvolva um Gestor de Estoque: Cadastro de produtos com foto e preço, alertas de estoque baixo e histórico de entradas/saídas.`,
    },
    {
        id: 'invoice-quote-gen',
        name: 'Invoice & Quote Generator',
        category: 'Essencial: Negócios',
        description: 'Gere propostas e faturas profissionais em PDF em segundos para seus clientes.',
        prompt: `Crie um Gerador de Faturas: Formulário de dados do cliente e itens, cálculo automático de impostos/total e botão de download em PDF estilizado.`,
    },

    // --- ELITE: SEO & BRAND MONITORING ---
    {
        id: 'seo-authority-auditor',
        name: 'SEO Authority & Velocity Auditor',
        category: 'Elite: SEO',
        description: 'Auditor completo de SEO com análise de autoridade de domínio, velocidade (Core Web Vitals) e densidade de keywords.',
        prompt: `Crie uma ferramenta de Auditoria de SEO completa:
- Input de URL para análise profunda
- Dashboard de Core Web Vitals (LCP, FID, CLS)
- Análise de densidade de palavras-chave e identificação de termos negativos/prejudiciais para o algoritmo
- Verificador de autoridade de domínio e perfil de backlinks
- Relatório de erros técnicos (404, meta tags ausentes, estrutura de headings)
- Design focado em visualização de dados densos com gráficos de performance`,
    },
    {
        id: 'brand-mention-monitor',
        name: 'Global Brand Mention Monitor',
        category: 'Elite: SEO',
        description: 'Monitore menções à sua marca em tempo real em redes sociais, blogs e fóruns com análise de sentimento.',
        prompt: `Desenvolva um Monitor de Menções de Marca:
- Stream em tempo real de menções em toda a web
- Análise de sentimento automática das menções (Positivo/Negativo/Neutro)
- Alertas de crise de imagem baseados em picos de menções negativas
- Dashboard de Share of Voice em comparação com concorrentes
- Relatórios de tendências de tópicos associados à marca
- Interface de "Command Center" com live feed e mapas de calor`,
    },

    // --- ELITE: MULTICANAL & E-COMMERCE ---
    {
        id: 'multichannel-catalog-builder',
        name: 'Multichannel Catalog Master',
        category: 'Elite: Multicanal',
        description: 'Criação e gestão de catálogo completo sincronizado para múltiplos canais de venda e marketplaces.',
        prompt: `Crie um Construtor de Catálogo Multicanal:
- Gestão centralizada de produtos (foto, descrição, preço, estoque)
- Sincronização automática para diferentes marketplaces e redes sociais
- Gerador de descrições otimizadas para cada canal via IA
- Sistema de precificação dinâmica por canal
- Dashboard de performance de vendas unificado
- Interface intuitiva de arrastar e soltar para organização de coleções`,
    },

    // --- ELITE: CIBERSEGURANÇA ---
    {
        id: 'open-vpn-security-suite',
        name: 'Open VPN & Privacy Suite',
        category: 'Elite: Cibersegurança',
        description: 'Interface de alta segurança para serviços de VPN estilo Proton, com foco em privacidade e criptografia transparente.',
        prompt: `Desenvolva uma Suíte de Privacidade VPN (estilo Proton):
- Dashboard de conexão com mapa global de servidores
- Kill Switch visual e status de criptografia em tempo real
- Monitor de vazamento de DNS e proteção contra rastreadores
- Gestão de logs zero-knowledge
- Interface ultra-minimalista e segura com modo "Invisível"
- Design focado em confiança com cores sóbrias e tipografia técnica`,
    },
];

export function getTemplateById(id: string): AppTemplate | undefined {
    return TEMPLATES.find((template) => template.id === id);
}

export function getTemplatesByCategory(category: string): AppTemplate[] {
    return TEMPLATES.filter((template) => template.category === category);
}

export function getAllCategories(): string[] {
    return Array.from(new Set(TEMPLATES.map((template) => template.category)));
}

export function searchTemplates(query: string): AppTemplate[] {
    const lowerQuery = query.toLowerCase();
    return TEMPLATES.filter(
        (template) =>
            template.name.toLowerCase().includes(lowerQuery) ||
            template.description.toLowerCase().includes(lowerQuery) ||
            template.category.toLowerCase().includes(lowerQuery)
    );
}
