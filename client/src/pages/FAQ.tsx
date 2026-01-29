import { useState } from 'react';
import { ChevronDown, Sparkles, Zap, MessageCircle, Mail, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    answer: 'Sim! Você pode usar qualquer um dos templates pré-definidos ou criar um prompt completamente customizado. A aba "Prompt Livre" permite que você escreva uma descrição detalhada do app que deseja criar, com até 50.000 caracteres. Quanto mais específico e detalhado for seu prompt, melhor será o app gerado.',
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
    answer: 'O sistema de bônus funciona em etapas: (1) Você compartilha um link gerado com seu código de indicação; (2) Um novo usuário clica no link e a Lovable cria automaticamente o app; (3) O usuário publica o app na plataforma; (4) Quando o app é publicado, você e o novo usuário recebem 10 créditos bônus cada.',
  },
  {
    id: 'faq-6',
    category: 'Sistema de Bônus',
    question: 'Quanto crédito ganho por cada indicação?',
    answer: 'Você ganha 10 créditos bônus por cada novo usuário que publica um app através de seu link de indicação. O novo usuário também recebe 10 créditos como bônus de boas-vindas.',
  },
  {
    id: 'faq-7',
    category: 'Sistema de Bônus',
    question: 'O que é necessário para ativar o bônus?',
    answer: 'O novo usuário deve clicar no link, aguardar a geração e clicar em "Publish". O bônus é ativado apenas quando o app é publicado oficialmente na plataforma Lovable.',
  },
  {
    id: 'faq-8',
    category: 'Sistema de Bônus',
    question: 'Posso ganhar bônus infinitamente?',
    answer: 'Sim! Não há limite de indicações bem-sucedidas. Cada novo usuário que publicar um app através do seu link gera créditos para ambos.',
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />

      {/* Header */}
      <nav className="sticky top-0 z-50 glass border-b border-white/5 px-6 py-4">
        <div className="container flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center shadow-[0_0_15px_var(--glow-primary)]">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="font-black text-xl tracking-tighter text-glow">LOVABLE GEN</span>
          </motion.div>
          <div className="flex gap-8">
            <a href="/" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all">PRODUTO</a>
            <a href="/faq" className="text-sm font-bold text-primary">FAQ</a>
          </div>
        </div>
      </nav>

      <main className="container py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Central de Ajuda.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Tudo o que você precisa saber sobre o Gerador de Links e o ecossistema Lovable.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {categories.map((category, idx) => (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={category}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <h2 className="text-xs font-black tracking-[0.3em] text-primary uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20 shadow-sm">
                  {category}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>

              <div className="grid gap-4">
                {faqItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div
                      key={item.id}
                      className={`group transition-all duration-300 rounded-3xl border ${expandedId === item.id
                          ? 'bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(101,31,255,0.1)]'
                          : 'bg-black/20 border-white/5 hover:border-white/20'
                        }`}
                    >
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left"
                      >
                        <h3 className={`font-black tracking-tight text-lg transition-colors ${expandedId === item.id ? 'text-primary' : 'text-white/90 group-hover:text-white'
                          }`}>
                          {item.question}
                        </h3>
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${expandedId === item.id ? 'bg-primary text-white rotate-180' : 'bg-white/5 text-white/40'
                          }`}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {expandedId === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8">
                              <div className="h-px w-full bg-white/5 mb-6" />
                              <p className="text-muted-foreground leading-relaxed font-medium">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Sparkles className="w-48 h-48" />
          </div>

          <h2 className="text-3xl font-black mb-4 tracking-tighter">Ainda com dúvidas?</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto font-medium">
            Nossa equipe técnica e comunidade estão prontas para ajudar você a escalar suas criações.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://help.manus.im"
              className="flex flex-col items-center gap-4 p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="font-black text-xs tracking-widest uppercase">Centro de Ajuda</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:support@lovable.dev"
              className="flex flex-col items-center gap-4 p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-black text-xs tracking-widest uppercase">E-mail Suporte</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://twitter.com/lovable_dev"
              className="flex flex-col items-center gap-4 p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6" />
              </div>
              <span className="font-black text-xs tracking-widest uppercase">Comunidade X</span>
            </motion.a>
          </div>
        </motion.section>
      </main>

      <footer className="py-20 border-t border-white/5 mt-20 bg-black/20 relative z-10">
        <div className="container text-center">
          <p className="text-[10px] tracking-[0.4em] font-black text-muted-foreground/30 uppercase">
            LOVABLE GEN • REVISÃO DE SISTEMA 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
