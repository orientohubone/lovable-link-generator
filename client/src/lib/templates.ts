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
