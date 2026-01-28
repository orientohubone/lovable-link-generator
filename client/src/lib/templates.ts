/**
 * Templates pré-definidos para geração de apps na Lovable
 * Cada template inclui um prompt e imagens de referência opcionais
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
  {
    id: 'design-system-builder',
    name: 'Construtor de Design System',
    category: 'Ferramentas de Design',
    description: 'Ferramenta completa para criar, visualizar e exportar sistemas de design consistentes.',
    prompt: `Crie uma ferramenta profissional de construção de Design System com os seguintes recursos:
- Editor de tokens de design (cores, tipografia, espaçamento, sombras)
- Visualização em tempo real dos componentes baseados nos tokens
- Gerador automático de documentação de componentes
- Exportação de tokens para CSS, SCSS, JSON e Tailwind config
- Seção de acessibilidade com verificador de contraste WCAG
- Biblioteca de componentes interativos (botões, inputs, cards, modais)
- Suporte a múltiplos temas (claro, escuro, alto contraste)
- Interface de drag-and-drop para organizar componentes
- Histórico de versões do sistema de design
- Design minimalista e focado na produtividade`,
  },
  {
    id: 'saas-landing-page',
    name: 'Landing Page SaaS',
    category: 'Marketing',
    description: 'Template de alta conversão para produtos SaaS com seções essenciais.',
    prompt: `Desenvolva uma Landing Page para SaaS otimizada para conversão com:
- Hero section impactante com título, subtítulo e CTA duplo
- Seção de logos de clientes (social proof) com animação de scroll infinito
- Grid de recursos (features) com ícones e descrições curtas
- Seção "Como funciona" com passos ilustrados
- Tabela de preços interativa com alternância mensal/anual
- Depoimentos de clientes em carrossel
- FAQ com accordion expansível
- Rodapé completo com links úteis e newsletter
- Design responsivo e performance otimizada (Core Web Vitals)
- Animações de entrada (fade-in) ao rolar a página`,
  },
  {
    id: 'e-commerce-dashboard',
    name: 'Dashboard E-commerce',
    category: 'Negócios',
    description: 'Painel administrativo completo para gestão de loja virtual.',
    prompt: `Crie um Dashboard Administrativo para E-commerce com:
- Visão geral com KPIs (Vendas totais, Pedidos, Ticket médio)
- Gráficos de vendas por período (Chart.js ou Recharts)
- Tabela de gestão de pedidos com status e filtros avançados
- Gestão de inventário com alertas de baixo estoque
- Lista de clientes com histórico de compras
- Notificações de atividades recentes em tempo real
- Sidebar de navegação colapsável
- Modo escuro/claro alternável
- Design responsivo adaptável a tablets e desktops
- Interface limpa focada em dados e usabilidade`,
  },
  {
    id: 'ai-chat-interface',
    name: 'Interface de Chat AI',
    category: 'Inteligência Artificial',
    description: 'Interface moderna para aplicações de chat baseadas em LLMs.',
    prompt: `Desenvolva uma interface de chat para IA moderna e fluida com:
- Área de chat com bolhas de mensagem diferenciadas (usuário vs IA)
- Suporte a renderização de Markdown e blocos de código com syntax highlighting
- Input de mensagem com auto-resize e suporte a envio com Enter
- Sidebar de histórico de conversas com agrupamento por data
- Botão de "Nova Conversa" e opções de limpar histórico
- Indicadores de "digitando..." e estados de carregamento
- Botões de feedback (like/dislike) e copiar resposta
- Design similar ao ChatGPT/Claude com foco na legibilidade
- Temas claro e escuro com transição suave
- Responsividade total para uso em mobile`,
  },
  {
    id: 'fitness-tracker',
    name: 'Rastreador Fitness',
    category: 'Saúde & Bem-estar',
    description: 'App para monitoramento de treinos, dieta e progresso físico.',
    prompt: `Crie um aplicativo de Rastreador Fitness completo com:
- Dashboard diário com resumo de calorias, passos e água
- Registro de treinos com exercícios, séries, repetições e carga
- Diário alimentar com busca de alimentos e cálculo de macros
- Gráficos de progresso de peso e medidas corporais
- Timer de descanso entre séries integrado
- Calendário de atividades para visualização de consistência
- Gamificação com conquistas e badges
- Calculadora de IMC e TMB integrada
- Interface energética e motivadora
- Otimizado para uso mobile durante os treinos`,
  },
  {
    id: 'todo-app',
    name: 'App de Tarefas',
    category: 'Produtividade',
    description: 'Uma aplicação simples de gerenciamento de tarefas com funcionalidades de adicionar, editar e deletar.',
    prompt: `Crie uma aplicação moderna de gerenciamento de tarefas com os seguintes recursos:
- Adicionar novas tarefas com um campo de texto e botão de envio
- Exibir tarefas em um formato de lista limpa
- Marcar tarefas como concluídas com um checkbox
- Deletar tarefas com um ícone de lixeira
- Mostrar contagem de tarefas (total e concluídas)
- Armazenar tarefas no armazenamento local
- Usar um design moderno e minimalista com fundo claro
- Incluir transições suaves e efeitos de hover`,
  },
  {
    id: 'weather-app',
    name: 'Dashboard de Clima',
    category: 'Utilitários',
    description: 'Uma aplicação de clima que exibe condições atuais e previsões.',
    prompt: `Construa um dashboard de clima com estes recursos:
- Buscar cidades pelo nome
- Exibir clima atual (temperatura, condição, umidade, velocidade do vento)
- Mostrar previsão de 5 dias
- Usar ícones de clima para representar condições
- Exibir temperatura em Celsius e Fahrenheit
- Incluir um layout limpo e moderno baseado em cards
- Adicionar um fundo com gradiente que muda conforme o clima
- Implementar animações suaves para carregamento de dados`,
  },
  {
    id: 'expense-tracker',
    name: 'Rastreador de Despesas',
    category: 'Finanças',
    description: 'Rastreie despesas pessoais com categorias e visualizações.',
    prompt: `Crie uma aplicação de rastreamento de despesas com:
- Adicionar despesas com valor, categoria, data e descrição
- Exibir despesas em uma tabela ordenável
- Mostrar despesas totais e divisão por categoria
- Incluir um gráfico de pizza mostrando distribuição de despesas
- Filtrar despesas por categoria e intervalo de datas
- Deletar despesas individuais
- Exportar dados como CSV
- Usar um esquema de cores profissional com tipografia clara
- Implementar design responsivo para mobile e desktop`,
  },
  {
    id: 'portfolio-site',
    name: 'Site de Portfólio',
    category: 'Portfólio',
    description: 'Um site de portfólio profissional para showcasear projetos e habilidades.',
    prompt: `Construa um site de portfólio pessoal com:
- Seção hero com nome, título e chamada para ação
- Seção sobre com biografia profissional
- Showcase de projetos com cards (imagem, título, descrição, link)
- Seção de habilidades com tags ou barras de progresso
- Seção de contato com formulário de email
- Menu de navegação com scroll suave
- Design responsivo para todos os dispositivos
- Alternância de tema claro/escuro
- Animações e transições suaves
- Tipografia profissional e espaçamento`,
  },
  {
    id: 'note-app',
    name: 'App de Anotações',
    category: 'Produtividade',
    description: 'Uma aplicação simples de anotações com edição de texto rico.',
    prompt: `Crie uma aplicação de anotações com:
- Criar, ler, atualizar e deletar anotações
- Editor de texto rico com opções de formatação (negrito, itálico, sublinhado)
- Buscar anotações por título ou conteúdo
- Organizar anotações com tags ou categorias
- Fixar anotações importantes no topo
- Suporte a modo escuro
- Funcionalidade de auto-save
- Persistência de armazenamento local
- Interface limpa e sem distrações
- Atalhos de teclado para usuários avançados`,
  },
  {
    id: 'calculator',
    name: 'Calculadora Avançada',
    category: 'Utilitários',
    description: 'Uma calculadora científica com funções matemáticas avançadas.',
    prompt: `Construa uma calculadora científica com:
- Operações básicas (adição, subtração, multiplicação, divisão)
- Funções avançadas (raiz quadrada, potência, trigonométricas)
- Exibição de histórico de cálculos
- Botões de limpar e deletar
- Suporte a entrada por teclado
- Display grande e legível
- Layout de grade de botões com organização clara
- Tratamento de erros para operações inválidas
- Design moderno com bom contraste
- Responsivo para diferentes tamanhos de tela`,
  },
  {
    id: 'kanban-board',
    name: 'Quadro Kanban',
    category: 'Produtividade',
    description: 'Um quadro kanban com drag-and-drop para gerenciamento de tarefas.',
    prompt: `Crie uma aplicação de quadro kanban com:
- Três colunas: A Fazer, Em Progresso, Concluído
- Adicionar cards com título e descrição da tarefa
- Arrastar e soltar cards entre colunas
- Deletar cards com um botão de delete
- Editar conteúdo do card inline
- Mostrar contagem de cards em cada coluna
- Armazenamento persistente usando armazenamento local
- Animações suaves de drag
- Design limpo e profissional
- Funcionalidade de adicionar nova coluna`,
  },
  {
    id: 'color-palette',
    name: 'Gerador de Paleta de Cores',
    category: 'Ferramentas de Design',
    description: 'Gere e gerencie paletas de cores para projetos de design.',
    prompt: `Construa um gerador de paleta de cores com:
- Gerar paletas de cores aleatórias
- Exibir cores em formatos hex, RGB e HSL
- Bloquear cores individuais para mantê-las ao regenerar
- Copiar valores de cores para a área de transferência
- Exportar paleta como JSON ou CSS
- Salvar paletas favoritas
- Buscar por nomes de cores
- Sugestões de harmonia de cores (complementar, análoga, tríade)
- Ajustar saturação e brilho da paleta
- Interface visualmente atraente e limpa`,
  },
  {
    id: 'timer-app',
    name: 'Timer Pomodoro',
    category: 'Produtividade',
    description: 'Um timer Pomodoro para sessões de trabalho focado.',
    prompt: `Crie uma aplicação de timer Pomodoro com:
- Timer de sessão de trabalho (padrão 25 minutos)
- Timer de pausa (padrão 5 minutos)
- Opção de pausa longa (15 minutos)
- Controles de iniciar, pausar e resetar
- Notificação sonora quando o timer termina
- Exibir tipo de sessão atual
- Contador de sessões (rastrear sessões concluídas)
- Durações de timer customizáveis
- Indicador de progresso circular
- Atalhos de teclado para controles`,
  },
  {
    id: 'qr-code-gen',
    name: 'Gerador de Código QR',
    category: 'Utilitários',
    description: 'Gere códigos QR a partir de texto ou URLs.',
    prompt: `Construa um gerador de código QR com:
- Campo de entrada para texto ou URL
- Geração de código QR em tempo real
- Download do código QR como PNG ou SVG
- Ajustar tamanho do código QR
- Mudar cor do código QR (primeiro plano e fundo)
- Adicionar logo/imagem ao centro do código QR
- Seleção de nível de correção de erro
- Preview do código QR gerado
- Copiar dados do código QR para a área de transferência
- Histórico de códigos QR gerados recentemente`,
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
