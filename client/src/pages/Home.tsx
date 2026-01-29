import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Copy, ExternalLink, Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';
import { buildLovableURL, copyToClipboard } from '@/lib/urlBuilder';
import { TEMPLATES, getAllCategories, getTemplatesByCategory } from '@/lib/templates';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Gerador de Links Lovable - Midnight AI Edition
 */
export default function Home() {
  const [referralId, setReferralId] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [generatedUrl, setGeneratedUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [showConversionGuide, setShowConversionGuide] = useState(false);

  const currentPrompt = selectedTemplate
    ? TEMPLATES.find((t) => t.id === selectedTemplate)?.prompt || ''
    : customPrompt;

  const handleGenerateUrl = () => {
    if (!referralId.trim()) {
      toast.error('Insira seu ID da Lovable', {
        className: 'glass border-destructive/50 text-foreground',
      });
      return;
    }

    if (!currentPrompt.trim()) {
      toast.error('Selecione um template ou crie um prompt', {
        className: 'glass border-destructive/50 text-foreground',
      });
      return;
    }

    try {
      const result = buildLovableURL({
        prompt: currentPrompt,
        referralId,
        autosubmit: true,
      });

      setGeneratedUrl(result.full);
      setShowConversionGuide(true);
      toast.success('Link gerado com sucesso!', {
        icon: <Sparkles className="w-4 h-4 text-primary" />,
        className: 'glass border-primary/50 text-foreground font-bold',
      });
    } catch (error) {
      toast.error('Falha ao gerar URL');
    }
  };

  const handleCopyUrl = async () => {
    if (!generatedUrl) return;
    const success = await copyToClipboard(generatedUrl);
    if (success) {
      setCopied(true);
      toast.success('Copiado para o clipboard!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const categories = getAllCategories();

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Background Decor Removed */}


      {/* Header */}
      <nav className="sticky top-0 z-50 glass border-b border-white/5 px-6 py-4">
        <div className="container flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center border border-white/20">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="font-black text-xl tracking-tighter text-glow">LOVABLE GEN</span>
          </motion.div>
          <div className="flex gap-8">
            <a href="/" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all">PRODUTO</a>
            <a href="/faq" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all">FAQ</a>
          </div>
        </div>
      </nav>

      <main className="px-6 py-20 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none text-white">
              Crie Apps Lovable <br /> Num Único Click.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Vá além dos prompts simples. Gere <span className="text-primary font-bold">Blueprints de Elite</span> validados para escala e dominância de mercado através do poder do Lovable Engine.
            </p>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-[1600px] mx-auto">
          {/* Editor Area */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 xl:col-span-8 space-y-16"
          >
            {/* Step 1: ID */}
            <div className="glass p-8 rounded-[2rem] relative overflow-hidden group border-white/10">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-32 h-32" />
              </div>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-sm font-black border border-primary/30">01</span>
                Identificação Lovable
              </h2>
              <input
                type="text"
                value={referralId}
                onChange={(e) => setReferralId(e.target.value)}
                placeholder="Insira seu ID (ex: john-doe-123)"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted-foreground/50"
              />
              <p className="mt-4 text-xs text-muted-foreground/60 px-2 font-medium">Seu ID é necessário para que você receba os créditos de indicação.</p>
            </div>

            {/* Step 2: Content */}
            <div className="glass p-12 rounded-[3rem] border-white/10">
              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-sm font-black border border-primary/30">02</span>
                Defina sua Aplicação
              </h2>
              <Tabs defaultValue="templates" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-black/40 p-1.5 rounded-2xl mb-8 border border-white/5">
                  <TabsTrigger value="templates" className="rounded-xl py-3 font-black text-xs tracking-widest data-[state=active]:bg-primary data-[state=active]:shadow-lg">TEMPLATES</TabsTrigger>
                  <TabsTrigger value="custom" className="rounded-xl py-3 font-black text-xs tracking-widest data-[state=active]:bg-primary data-[state=active]:shadow-lg">PROMPT LIVRE</TabsTrigger>
                </TabsList>

                <TabsContent value="templates" className="mt-0 outline-none">
                  <div className="relative group/scroll">
                    <ScrollArea className="h-[600px] -mx-4 px-6 [mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)]">
                      <div className="py-8 px-6">
                        {categories.map(cat => (
                          <div key={cat} className="mb-12 last:mb-0">
                            <div className="flex items-center gap-4 mb-6 sticky top-0 z-20 py-2">
                              {(() => {
                                const isOuro = cat.includes('Ouro');
                                const isElite = cat.includes('Elite');
                                const isEssencial = cat.includes('Essencial');

                                return (
                                  <div className={`
                                    backdrop-blur-md px-5 py-2 rounded-full border shadow-lg transition-all
                                    ${isOuro
                                      ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-yellow-500/50 shadow-yellow-500/10'
                                      : isElite
                                        ? 'bg-primary/10 border-primary/20 shadow-primary/5'
                                        : 'bg-white/5 border-white/10'
                                    }
                                  `}>
                                    <h3 className={`
                                      text-[11px] font-black tracking-[0.25em] uppercase flex items-center gap-2
                                      ${isOuro ? 'text-yellow-400' : isElite ? 'text-primary' : 'text-muted-foreground'}
                                    `}>
                                      {isOuro && <Sparkles className="w-3 h-3" />}
                                      {cat}
                                    </h3>
                                  </div>
                                );
                              })()}
                              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/5 to-transparent" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {getTemplatesByCategory(cat).map(t => (
                                <motion.button
                                  whileHover={{ scale: 1.02, translateY: -2 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => { setSelectedTemplate(t.id); setCustomPrompt(''); }}
                                  className={`p-6 text-left rounded-2xl border transition-all relative overflow-hidden group/card ${selectedTemplate === t.id
                                    ? 'bg-primary/20 border-primary ring-1 ring-primary shadow-[0_0_40px_rgba(101,31,255,0.25)]'
                                    : cat.includes('Ouro')
                                      ? 'bg-amber-500/5 border-amber-500/10 hover:border-amber-500/40 hover:bg-amber-500/10'
                                      : cat.includes('Elite')
                                        ? 'bg-primary/5 border-primary/10 hover:border-primary/40 hover:bg-primary/10'
                                        : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'
                                    }`}
                                >
                                  {selectedTemplate === t.id && (
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-primary/20 blur-2xl rounded-full" />
                                  )}
                                  <div className="flex justify-between items-start mb-3">
                                    <span className={`font-black text-base leading-tight ${selectedTemplate === t.id ? 'text-white' : 'text-white/80 group-hover/card:text-white'}`}>{t.name}</span>
                                    {selectedTemplate === t.id && <Zap className="w-4 h-4 text-primary fill-current drop-shadow-[0_0_8px_var(--glow-primary)]" />}
                                  </div>
                                  <p className="text-[11px] text-muted-foreground/80 leading-relaxed line-clamp-2 font-medium">{t.description}</p>
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="custom" className="mt-0 outline-none">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[1.6rem] blur opacity-0 group-focus-within:opacity-20 transition duration-500" />
                    <textarea
                      value={customPrompt}
                      onChange={(e) => { setCustomPrompt(e.target.value); setSelectedTemplate(null); }}
                      placeholder="Descreva a aplicação dos seus sonhos nos mínimos detalhes..."
                      className="relative w-full h-64 bg-black/40 border border-white/10 rounded-[1.5rem] px-6 py-6 text-lg focus:ring-2 focus:ring-primary outline-none resize-none transition-all placeholder:text-muted-foreground/30 font-medium"
                    />
                    <div className="absolute bottom-6 right-6 text-[10px] font-black tracking-widest text-muted-foreground/40 bg-black/60 px-3 py-1 rounded-full border border-white/5">
                      {customPrompt.length} / 50.000
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Button
                onClick={handleGenerateUrl}
                className="w-full py-10 text-2xl font-black rounded-[2rem] bg-primary hover:bg-primary/90 shadow-[0_20px_50px_rgba(101,31,255,0.4)] transition-all group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-3">
                  GERAR ENGINE LINK <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Sidebar Area */}
          <div className="lg:col-span-5 xl:col-span-4">
            <AnimatePresence mode="wait">
              {generatedUrl ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  className="sticky top-28 space-y-8"
                >
                  <div className="glass p-8 rounded-[2.5rem] border-primary/40 relative overflow-hidden shadow-[0_0_50px_rgba(101,31,255,0.15)] bg-gradient-to-br from-primary/5 to-transparent">
                    <div className="absolute top-0 right-0 p-8">
                      <Sparkles className="w-8 h-8 text-primary animate-pulse opacity-50" />
                    </div>
                    <h3 className="text-2xl font-black mb-8 tracking-tight">System Link <span className="text-primary text-glow">Ready.</span></h3>
                    <div className="bg-black/60 p-5 rounded-2xl mb-8 font-mono text-[10px] break-all border border-white/5 text-primary/90 leading-relaxed shadow-inner">
                      {generatedUrl}
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button onClick={handleCopyUrl} variant="outline" className="w-full rounded-2xl h-14 border-primary/30 hover:bg-primary/10 font-black text-xs tracking-widest border-2">
                        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        {copied ? 'COPIADO' : 'COPIAR LINK'}
                      </Button>
                      <Button onClick={() => window.open(generatedUrl, '_blank')} className="w-full rounded-2xl h-14 font-black text-xs tracking-widest shadow-xl">
                        ABRIR AGORA <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>

                  {showConversionGuide && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="glass p-10 rounded-[2.5rem] space-y-8 border-white/5"
                    >
                      <h3 className="font-black text-lg flex items-center gap-3">
                        <Zap className="w-6 h-6 text-accent fill-current" /> GROWTH ENGINE
                      </h3>
                      <div className="space-y-6">
                        {[
                          { step: '01', title: 'Viralização Local', desc: 'Distribua o link em canais de tecnologia e produtividade.' },
                          { step: '02', title: 'Instant Build', desc: 'A engine Lovable processa o prompt e injeta o código automaticamente.' },
                          { step: '03', title: 'The Activation', desc: 'Crítico: O usuário deve realizar o "Publish" para validar o ciclo.' },
                          { step: '⚡', title: 'Credit Reward', desc: 'O sistema audita a publicação e credita ambas as contas.' },
                        ].map((item, i) => (
                          <div key={i} className="flex gap-5 items-start group">
                            <span className="text-sm font-black text-accent w-6 flex-shrink-0 group-hover:scale-125 transition-transform">{item.step}</span>
                            <div className="space-y-1">
                              <p className="font-black text-xs uppercase tracking-wider text-white/90">{item.title}</p>
                              <p className="text-[11px] text-muted-foreground/80 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="sticky top-28 glass p-20 rounded-[3rem] text-center flex flex-col items-center border-dashed border-white/10"
                >
                  <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mb-8 rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/5">
                    <Zap className="w-12 h-12 text-primary opacity-20" />
                  </div>
                  <h3 className="font-black text-xl mb-4 text-white/40 tracking-tight">Aguardando Parâmetros</h3>
                  <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-[200px] font-medium">Finalize a configuração à esquerda para ativar o motor de indução.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <footer className="py-32 border-t border-white/5 relative z-10 bg-black/20">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
              <Sparkles className="w-6 h-6 text-primary/40" />
            </div>
            <p className="text-[10px] tracking-[0.4em] font-black text-muted-foreground/50 uppercase mb-8">
              POWERED BY ORIENTOHUB & MANUS AI
            </p>
            <div className="flex flex-wrap justify-center gap-10 text-xs font-black tracking-widest opacity-40">
              <a href="#" className="hover:text-primary hover:opacity-100 transition-all">SYSTEM STATUS</a>
              <a href="#" className="hover:text-primary hover:opacity-100 transition-all">DOCUMENTATION</a>
              <a href="#" className="hover:text-primary hover:opacity-100 transition-all">COMMUNITY</a>
            </div>
            <p className="mt-16 text-[10px] text-muted-foreground/20 font-mono">
              v1.5.0-STABLE • MULTI-CLUSTER-READY
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
