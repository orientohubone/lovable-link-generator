import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Sobre o Gerador',
    question: 'O que é o Gerador de Links Lovable?',
    answer: 'O Gerador de Links Lovable é uma ferramenta que cria links compartilháveis que automaticamente geram aplicações na plataforma Lovable. Cada link combina seu código de indicação com um prompt de app, permitindo que você compartilhe ideias de aplicações e ganhe créditos bônus quando os usuários publicam os apps gerados.',
  },
  {
    id: 'faq-2',
    category: 'Sobre o Gerador',
    question: 'Como funciona o gerador?',
    answer: 'O processo é simples: (1) Insira seu ID de indicação da Lovable; (2) Selecione um template pré-definido ou escreva um prompt customizado descrevendo o app desejado; (3) Clique em "Gerar Link"; (4) Copie e compartilhe o link gerado. Quando alguém clica no link, a Lovable cria automaticamente o app baseado no seu prompt.',
  },
  {
    id: 'faq-3',
    category: 'Sobre o Gerador',
    question: 'Posso customizar completamente o prompt?',
    answer: 'Sim! Você pode usar qualquer um dos 10 templates pré-definidos ou criar um prompt completamente customizado. A aba "Prompt Customizado" permite que você escreva uma descrição detalhada do app que deseja criar, com até 50.000 caracteres. Quanto mais específico e detalhado for seu prompt, melhor será o app gerado.',
  },
  {
    id: 'faq-4',
    category: 'Sobre o Gerador',
    question: 'Qual é o tamanho máximo do prompt?',
    answer: 'O tamanho máximo do prompt é de 50.000 caracteres. Isso é mais que suficiente para descrever praticamente qualquer aplicação, incluindo funcionalidades detalhadas, requisitos de design e comportamentos específicos.',
  },
  {
    id: 'faq-5',
    category: 'Sistema de Bônus',
    question: 'Como funciona o sistema de bônus da Lovable?',
    answer: 'O sistema de bônus funciona em etapas: (1) Você compartilha um link gerado com seu código de indicação; (2) Um novo usuário clica no link e a Lovable cria automaticamente o app; (3) O usuário publica o app na plataforma; (4) Quando o app é publicado, você e o novo usuário recebem 10 créditos bônus cada. O bônus só é ativado quando o app é publicado, não apenas criado.',
  },
  {
    id: 'faq-6',
    category: 'Sistema de Bônus',
    question: 'Quanto crédito ganho por cada indicação bem-sucedida?',
    answer: 'Você ganha 10 créditos bônus por cada novo usuário que publica um app através de seu link de indicação. O novo usuário também recebe 10 créditos como bônus de boas-vindas. Portanto, ambos ganham com a transação.',
  },
  {
    id: 'faq-7',
    category: 'Sistema de Bônus',
    question: 'O que é necessário para ativar o bônus?',
    answer: 'Para ativar o bônus, o novo usuário deve: (1) Clicar no link gerado; (2) Deixar a Lovable gerar o app automaticamente; (3) Revisar o app gerado; (4) Clicar no botão "Publicar" para publicar o app. O bônus é ativado apenas quando o app é publicado, não durante a criação.',
  },
  {
    id: 'faq-8',
    category: 'Sistema de Bônus',
    question: 'Posso ganhar bônus infinitamente?',
    answer: 'Sim, você pode ganhar bônus infinitamente! Cada novo usuário que publica um app através de seu link gera 10 créditos para você. Não há limite de indicações bem-sucedidas. Quanto mais pessoas você indicar, mais créditos você ganha.',
  },
  {
    id: 'faq-9',
    category: 'Sistema de Bônus',
    question: 'Como encontro meu ID de indicação?',
    answer: 'Seu ID de indicação está disponível na sua conta Lovable, geralmente na seção de "Referral" ou "Indicações". Se você não conseguir encontrar, entre em contato com o suporte da Lovable em support@lovable.dev ou acesse https://lovable.dev/referral.',
  },
  {
    id: 'faq-10',
    category: 'Sistema de Bônus',
    question: 'Há alguma restrição para ganhar bônus?',
    answer: 'Sim, existem algumas restrições: (1) O novo usuário deve ser realmente novo (não pode ter conta anterior na Lovable); (2) O email do novo usuário não pode ser de um serviço de email descartável ou de alto risco; (3) A Lovable monitora atividades suspeitas e pode reter bônus se detectar fraude; (4) Cada novo usuário gera apenas um bônus (sem "stacking").',
  },
  {
    id: 'faq-11',
    category: 'Dicas de Otimização',
    question: 'Qual é o melhor tipo de prompt para conversão?',
    answer: 'Os melhores prompts são aqueles que: (1) Descrevem apps úteis e práticos (tarefas, notas, calculadoras); (2) São específicos e detalhados sobre funcionalidades; (3) Incluem requisitos de design claros; (4) Mencionam a experiência do usuário desejada. Prompts vagos ou muito genéricos resultam em apps menos interessantes, reduzindo a probabilidade de publicação.',
  },
  {
    id: 'faq-12',
    category: 'Dicas de Otimização',
    question: 'Como aumentar minha taxa de conversão?',
    answer: 'Para aumentar conversões: (1) Escolha prompts para apps que resolvem problemas reais; (2) Use templates pré-definidos que já foram testados; (3) Compartilhe com públicos relevantes (desenvolvedores, designers, empreendedores); (4) Explique brevemente o que o app faz antes de compartilhar o link; (5) Crie múltiplos links com diferentes prompts para testar qual converte melhor.',
  },
  {
    id: 'faq-13',
    category: 'Dicas de Otimização',
    question: 'Posso usar os templates pré-definidos?',
    answer: 'Sim! Os 10 templates pré-definidos são otimizados para conversão e incluem: App de Tarefas, Dashboard de Clima, Rastreador de Despesas, Site de Portfólio, App de Anotações, Calculadora Avançada, Quadro Kanban, Gerador de Paleta de Cores, Timer Pomodoro e Gerador de Código QR. Esses templates já foram testados e tendem a ter boas taxas de conversão.',
  },
  {
    id: 'faq-14',
    category: 'Dicas de Otimização',
    question: 'Onde devo compartilhar meus links?',
    answer: 'Você pode compartilhar seus links em: (1) Redes sociais (Twitter, LinkedIn, Facebook); (2) Comunidades de desenvolvedores (Reddit, Discord, Slack); (3) Fóruns de tecnologia; (4) Seu blog ou site pessoal; (5) Email para contatos; (6) Grupos de interesse específico. Quanto mais relevante for o público, melhor será a taxa de conversão.',
  },
  {
    id: 'faq-15',
    category: 'Segurança e Conformidade',
    question: 'Meus dados estão seguros?',
    answer: 'Sim, seus dados estão seguros. O Gerador de Links Lovable não armazena dados pessoais sensíveis. Seu ID de indicação é usado apenas para rastrear conversões legítimas. A Lovable utiliza verificação de reputação de email e monitoramento antifraude para garantir que apenas usuários legítimos recebam bônus.',
  },
  {
    id: 'faq-16',
    category: 'Segurança e Conformidade',
    question: 'A Lovable detecta atividades suspeitas?',
    answer: 'Sim, a Lovable possui algoritmos avançados que monitoram atividades suspeitas, incluindo: (1) Múltiplas contas criadas com o mesmo email; (2) Padrões de criação de apps anormais; (3) Emails de serviços descartáveis; (4) Tentativas de fraude ou "stacking" de bônus. Se atividade suspeita for detectada, a Lovable pode reter ou cancelar bônus.',
  },
  {
    id: 'faq-17',
    category: 'Segurança e Conformidade',
    question: 'O que acontece se eu tentar fraudar o sistema?',
    answer: 'A Lovable leva a fraude muito a sério. Se você tentar: (1) Criar múltiplas contas falsas; (2) Usar emails descartáveis; (3) Fazer "stacking" de bônus; (4) Compartilhar links de forma abusiva; a Lovable pode: (1) Reter seus bônus; (2) Desativar seu link de indicação; (3) Suspender sua conta. Sempre use o sistema de forma legítima e ética.',
  },
  {
    id: 'faq-18',
    category: 'Problemas Técnicos',
    question: 'O que fazer se o link não funcionar?',
    answer: 'Se o link não funcionar: (1) Verifique se copiou o link completo (incluindo a parte após o "#"); (2) Tente abrir em um navegador diferente; (3) Limpe o cache do navegador; (4) Certifique-se de que seu ID de indicação está correto; (5) Se o problema persistir, entre em contato com o suporte da Lovable.',
  },
  {
    id: 'faq-19',
    category: 'Problemas Técnicos',
    question: 'Por que o app não é gerado automaticamente?',
    answer: 'Se o app não é gerado automaticamente: (1) Certifique-se de que o prompt não está vazio; (2) Verifique se o prompt tem menos de 50.000 caracteres; (3) Tente novamente em alguns segundos (pode haver delay); (4) Se o problema persistir, a Lovable pode estar com manutenção. Entre em contato com o suporte se o problema continuar.',
  },
  {
    id: 'faq-20',
    category: 'Problemas Técnicos',
    question: 'Como entro em contato com o suporte?',
    answer: 'Para suporte: (1) Visite https://help.manus.im para enviar uma solicitação; (2) Email: support@lovable.dev; (3) Comunidade Lovable no Discord; (4) Twitter: @lovable_dev. Descreva seu problema em detalhes para receber ajuda mais rápida.',
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cabeçalho */}
      <header className="border-b border-border">
        <div className="container py-8 md:py-12">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-2">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Encontre respostas para as perguntas mais comuns sobre o Gerador de Links Lovable e o sistema de bônus.
          </p>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container py-12">
        <div className="space-y-12">
          {categories.map((category) => (
            <section key={category} className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b-4 border-accent pb-3">
                {category}
              </h2>

              <div className="space-y-3">
                {faqItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="border border-border rounded-md overflow-hidden transition-all hover:border-muted-foreground"
                    >
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-secondary hover:bg-muted transition-colors text-left"
                      >
                        <h3 className="font-bold text-foreground pr-4">{item.question}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                            expandedId === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {expandedId === item.id && (
                        <div className="px-6 py-4 bg-white border-t border-border">
                          <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>

        {/* Seção de Contato */}
        <section className="mt-16 bg-secondary border-l-4 border-accent p-8 rounded-md">
          <h2 className="text-2xl font-bold text-foreground mb-4">Não encontrou sua resposta?</h2>
          <p className="text-muted-foreground mb-6">
            Se você não encontrou a resposta para sua pergunta, entre em contato conosco através dos canais de suporte:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://help.manus.im"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-accent text-accent-foreground font-bold rounded-md hover:bg-accent/90 transition-colors text-center"
            >
              📧 Centro de Ajuda
            </a>
            <a
              href="mailto:support@lovable.dev"
              className="px-4 py-3 bg-accent text-accent-foreground font-bold rounded-md hover:bg-accent/90 transition-colors text-center"
            >
              ✉️ Email de Suporte
            </a>
            <a
              href="https://twitter.com/lovable_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-accent text-accent-foreground font-bold rounded-md hover:bg-accent/90 transition-colors text-center"
            >
              𝕏 Twitter
            </a>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-border mt-16">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>
            Gerador de Links Lovable • Maximize conversões com criação automática de apps
          </p>
        </div>
      </footer>
    </div>
  );
}
