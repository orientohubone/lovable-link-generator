import { useState, useRef, useLayoutEffect, useCallback, forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Copy, ExternalLink, Check, Sparkles, Zap, Shield, ArrowRight, ChevronDown, ChevronRight, ArrowLeft, LayoutGrid, MessageSquarePlus } from 'lucide-react';
import { buildLovableURL, copyToClipboard } from '@/lib/urlBuilder';
import { TEMPLATES, getAllCategories, getTemplatesByCategory } from '@/lib/templates';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200";

interface TemplateFolderCardProps {
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  totalCount: number;
  gradient?: string;
}

const TemplateFolderCard = forwardRef<HTMLDivElement, TemplateFolderCardProps>(
  ({ title, delay, isVisible, index, totalCount, gradient }, ref) => {
    const middleIndex = (totalCount - 1) / 2;
    const factor = totalCount > 1 ? (index - middleIndex) / middleIndex : 0;

    const rotation = factor * 25;
    const translationX = factor * 85;
    const translationY = Math.abs(factor) * 12;

    return (
      <div
        ref={ref}
        className="absolute w-20 h-28 cursor-pointer group/card"
        style={{
          transform: isVisible
            ? `translateY(calc(-100px + ${translationY}px)) translateX(${translationX}px) rotate(${rotation}deg) scale(1)`
            : "translateY(0px) translateX(0px) rotate(0deg) scale(0.4)",
          opacity: isVisible ? 1 : 0,
          transition: `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          zIndex: 10 + index,
          left: "-40px",
          top: "-56px",
        }}
      >
        <div className={cn(
          "w-full h-full rounded-lg overflow-hidden shadow-xl border border-white/5 relative",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover/card:-translate-y-6 group-hover/card:shadow-2xl group-hover/card:shadow-primary/40 group-hover/card:ring-2 group-hover/card:ring-primary group-hover/card:scale-125",
          gradient || "bg-card"
        )}>
          <img
            src={PLACEHOLDER_IMAGE}
            alt={title}
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <p className="absolute bottom-1.5 left-1.5 right-1.5 text-[8px] font-black uppercase tracking-tighter text-white/80 leading-tight line-clamp-2">
            {title}
          </p>
        </div>
      </div>
    );
  }
);
TemplateFolderCard.displayName = "TemplateFolderCard";

interface CategoryFolderProps {
  title: string;
  count: number;
  previews: string[];
  onClick: () => void;
  gradientBack?: string;
  gradientFront?: string;
  gradientTab?: string;
}

const CategoryFolder: React.FC<CategoryFolderProps> = ({
  title, count, previews, onClick, gradientBack, gradientFront, gradientTab
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isOuro = title.includes('Ouro');
  const isElite = title.includes('Elite');

  const backBg = gradientBack || "rgba(255,255,255,0.05)";
  const tabBg = gradientTab || "rgba(255,255,255,0.1)";
  const frontBg = gradientFront || "rgba(255,255,255,0.08)";

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative flex flex-col items-center justify-center p-8 rounded-3xl cursor-pointer bg-black/20 border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-2xl group",
        isOuro ? "hover:border-amber-500/40 hover:shadow-amber-500/10" : isElite ? "hover:border-primary/40 hover:shadow-primary/10" : "hover:border-white/20"
      )}
      style={{
        minHeight: "280px",
        perspective: "1200px",
        transform: isHovered ? "scale(1.02) rotate(-1deg)" : "scale(1) rotate(0deg)"
      }}
    >
      <div
        className="absolute inset-0 rounded-3xl transition-opacity duration-700"
        style={{
          background: isOuro
            ? "radial-gradient(circle at 50% 70%, rgba(245,158,11,0.15) 0%, transparent 70%)"
            : isElite
              ? "radial-gradient(circle at 50% 70%, rgba(99,102,241,0.15) 0%, transparent 70%)"
              : "radial-gradient(circle at 50% 70%, rgba(255,255,255,0.05) 0%, transparent 70%)",
          opacity: isHovered ? 1 : 0
        }}
      />

      <div className="relative flex items-center justify-center mb-6" style={{ height: "140px", width: "180px" }}>
        {/* Back of folder */}
        <div
          className="absolute w-32 h-24 rounded-lg shadow-md border border-white/10"
          style={{
            background: backBg,
            transformOrigin: "bottom center",
            transform: isHovered ? "rotateX(-20deg) scaleY(1.05)" : "rotateX(0deg) scaleY(1)",
            transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 10
          }}
        />

        {/* Tab */}
        <div
          className="absolute w-12 h-4 rounded-t-md border-t border-x border-white/10"
          style={{
            background: tabBg,
            top: "calc(50% - 48px - 12px)",
            left: "calc(50% - 64px + 16px)",
            transformOrigin: "bottom center",
            transform: isHovered ? "rotateX(-30deg) translateY(-3px)" : "rotateX(0deg) translateY(0)",
            transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 10
          }}
        />

        {/* Preview Cards */}
        <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 20 }}>
          {previews.map((templateName, index) => (
            <TemplateFolderCard
              key={index}
              title={templateName}
              delay={index * 40}
              isVisible={isHovered}
              index={index}
              totalCount={previews.length}
              gradient={isOuro ? "bg-gradient-to-br from-amber-500/20 to-yellow-500/20" : isElite ? "bg-gradient-to-br from-primary/20 to-purple-500/20" : "bg-white/10"}
            />
          ))}
        </div>

        {/* Front of folder */}
        <div
          className="absolute w-32 h-24 rounded-lg shadow-lg border border-white/20"
          style={{
            background: frontBg,
            top: "calc(50% - 48px + 4px)",
            transformOrigin: "bottom center",
            transform: isHovered ? "rotateX(35deg) translateY(12px)" : "rotateX(0deg) translateY(0)",
            transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 30
          }}
        />

        {/* Gloss glass effect on front */}
        <div
          className="absolute w-32 h-24 rounded-lg overflow-hidden pointer-events-none"
          style={{
            top: "calc(50% - 48px + 4px)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%)",
            transformOrigin: "bottom center",
            transform: isHovered ? "rotateX(35deg) translateY(12px)" : "rotateX(0deg) translateY(0)",
            transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 31
          }}
        />
      </div>

      <div className="text-center relative z-40">
        <h3 className={cn(
          "text-base font-black uppercase tracking-widest mb-1 transition-all duration-500 flex items-center justify-center gap-2",
          isOuro ? "text-yellow-400" : isElite ? "text-primary" : "text-white/60"
        )}>
          {isOuro && <Sparkles className="w-4 h-4" />}
          {title}
        </h3>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{count} BLUEPRINTS</p>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-white/20 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
        <span>Preview</span>
      </div>
    </div>
  );
};

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
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Alta Escala: Ouro do Builder']);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('templates');

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

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
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="relative grid w-full grid-cols-2 bg-black/60 p-1.5 rounded-2xl mb-12 border border-white/5 h-[68px]">
                  <TabsTrigger
                    value="templates"
                    className="relative z-10 h-full rounded-xl font-black text-[10px] tracking-[0.2em] transition-all data-[state=active]:text-white data-[state=inactive]:text-white/30 group"
                  >
                    <div className="flex items-center gap-3 relative z-20">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500",
                        activeTab === 'templates' ? "bg-white/20" : "bg-white/5 group-hover:bg-white/10"
                      )}>
                        <LayoutGrid className="w-4 h-4" />
                      </div>
                      TEMPLATES DE ELITE
                    </div>
                    {activeTab === 'templates' && (
                      <motion.div
                        layoutId="active-tab-indicator"
                        className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-xl shadow-[0_0_30px_rgba(101,31,255,0.3)] border border-white/20"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                      />
                    )}
                  </TabsTrigger>
                  <TabsTrigger
                    value="custom"
                    className="relative z-10 h-full rounded-xl font-black text-[10px] tracking-[0.2em] transition-all data-[state=active]:text-white data-[state=inactive]:text-white/30 group"
                  >
                    <div className="flex items-center gap-3 relative z-20">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500",
                        activeTab === 'custom' ? "bg-white/20" : "bg-white/5 group-hover:bg-white/10"
                      )}>
                        <MessageSquarePlus className="w-4 h-4" />
                      </div>
                      PROMPT LIVRE
                    </div>
                    {activeTab === 'custom' && (
                      <motion.div
                        layoutId="active-tab-indicator"
                        className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-xl shadow-[0_0_30px_rgba(101,31,255,0.3)] border border-white/20"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                      />
                    )}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="templates" className="mt-0 outline-none">
                  <div className="relative group/scroll min-h-[600px]">
                    <AnimatePresence mode="wait">
                      {!activeCategory ? (
                        <motion.div
                          key="folders"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8"
                        >
                          {categories.map((cat, idx) => {
                            const templates = getTemplatesByCategory(cat);
                            return (
                              <motion.div
                                key={cat}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <CategoryFolder
                                  title={cat}
                                  count={templates.length}
                                  previews={templates.slice(0, 5).map(t => t.name)}
                                  onClick={() => setActiveCategory(cat)}
                                  gradientBack={cat.includes('Ouro') ? 'rgba(245, 158, 11, 0.1)' : cat.includes('Elite') ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.03)'}
                                  gradientFront={cat.includes('Ouro') ? 'rgba(245, 158, 11, 0.05)' : cat.includes('Elite') ? 'rgba(99, 102, 241, 0.05)' : 'rgba(255, 255, 255, 0.05)'}
                                  gradientTab={cat.includes('Ouro') ? '#f59e0b' : cat.includes('Elite') ? '#6366f1' : '#4b5563'}
                                />
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="templates"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="flex flex-col space-y-8 py-8">
                            <div className="flex items-center justify-between">
                              <button
                                onClick={() => setActiveCategory(null)}
                                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-white transition-colors group/back"
                              >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Voltar para Categorias
                              </button>
                              <div className={cn(
                                "px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest",
                                activeCategory.includes('Ouro') ? "border-amber-500/50 text-yellow-400 bg-amber-500/10" :
                                  activeCategory.includes('Elite') ? "border-primary/50 text-primary bg-primary/10" :
                                    "border-white/10 text-white/50 bg-white/5"
                              )}>
                                {activeCategory}
                              </div>
                            </div>

                            <ScrollArea className="h-[600px] -mx-4 px-6 [mask-image:linear-gradient(to_bottom,transparent,black_2%,black_98%,transparent)]">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20 pt-2">
                                {getTemplatesByCategory(activeCategory).map(t => (
                                  <motion.button
                                    key={t.id}
                                    whileHover={{ scale: 1.02, translateY: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => { setSelectedTemplate(t.id); setCustomPrompt(''); }}
                                    className={`p-6 text-left rounded-2xl border transition-all relative overflow-hidden group/card ${selectedTemplate === t.id
                                      ? 'bg-primary/20 border-primary ring-1 ring-primary shadow-[0_0_40px_rgba(101,31,255,0.25)]'
                                      : activeCategory.includes('Ouro')
                                        ? 'bg-amber-500/5 border-amber-500/10 hover:border-amber-500/40 hover:bg-amber-500/10'
                                        : activeCategory.includes('Elite')
                                          ? 'bg-primary/5 border-primary/10 hover:border-primary/40 hover:bg-primary/10'
                                          : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'
                                      }`}
                                  >
                                    {selectedTemplate === t.id && (
                                      <div className="absolute top-0 right-0 w-12 h-12 bg-primary/20 blur-2xl rounded-full" />
                                    )}
                                    <div className="flex justify-between items-start mb-3">
                                      <span className={cn(
                                        "font-black text-base leading-tight",
                                        selectedTemplate === t.id ? 'text-white' : 'text-white/80 group-hover/card:text-white'
                                      )}>{t.name}</span>
                                      {selectedTemplate === t.id && <Zap className="w-4 h-4 text-primary fill-current drop-shadow-[0_0_8px_var(--glow-primary)]" />}
                                    </div>
                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed line-clamp-2 font-medium">{t.description}</p>
                                  </motion.button>
                                ))}
                              </div>
                            </ScrollArea>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
