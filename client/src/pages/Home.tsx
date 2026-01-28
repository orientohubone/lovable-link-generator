import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, ExternalLink, Check } from 'lucide-react';
import { buildLovableURL, copyToClipboard } from '@/lib/urlBuilder';
import { TEMPLATES, getAllCategories, getTemplatesByCategory } from '@/lib/templates';
import { toast } from 'sonner';

/**
 * Gerador de Links Lovable - Aplicação Principal
 * 
 * Este componente fornece uma interface para:
 * 1. Selecionar ou criar prompts para geração de apps na Lovable
 * 2. Gerar URLs híbridas combinando links de indicação com parâmetros de Build with URL
 * 3. Copiar e compartilhar links gerados com orientação de conversão
 */
export default function Home() {
  // Gerenciamento de estado
  const [referralId, setReferralId] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [generatedUrl, setGeneratedUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [showConversionGuide, setShowConversionGuide] = useState(false);

  // Obter o prompt atual (do template ou customizado)
  const currentPrompt = selectedTemplate
    ? TEMPLATES.find((t) => t.id === selectedTemplate)?.prompt || ''
    : customPrompt;

  // Handler para gerar URL
  const handleGenerateUrl = () => {
    if (!referralId.trim()) {
      toast.error('Por favor, insira seu ID de indicação da Lovable');
      return;
    }

    if (!currentPrompt.trim()) {
      toast.error('Por favor, selecione um template ou insira um prompt customizado');
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
      toast.success('URL gerada com sucesso!');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Falha ao gerar URL');
    }
  };

  // Handler para copiar URL
  const handleCopyUrl = async () => {
    if (!generatedUrl) return;

    const success = await copyToClipboard(generatedUrl);
    if (success) {
      setCopied(true);
      toast.success('URL copiada para a área de transferência!');
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error('Falha ao copiar URL');
    }
  };

  // Handler para abrir URL
  const handleOpenUrl = () => {
    if (generatedUrl) {
      window.open(generatedUrl, '_blank');
    }
  };

  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-white">
      {/* Cabeçalho com Navegação */}
      <header className="border-b border-border">
        <div className="container py-4 flex justify-between items-center mb-4">
          <a href="/" className="text-sm font-bold text-foreground hover:text-accent transition-colors">
            Início
          </a>
          <a href="/faq" className="text-sm font-bold text-foreground hover:text-accent transition-colors">
            FAQ
          </a>
        </div>
        <div className="container py-8 md:py-12">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-2">
            Gerador de Links Lovable
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Crie links compartilháveis que geram automaticamente apps na Lovable com seu código de indicação.
            Maximize conversões e ganhe créditos bônus.
          </p>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Esquerda - Gerador */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Input de ID de Indicação */}
              <section className="border-t-4 border-accent pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Seu ID de Indicação</h2>
                <p className="text-muted-foreground mb-4">
                  Insira seu ID de indicação da Lovable para rastrear conversões e ganhar créditos bônus.
                </p>
                <input
                  type="text"
                  value={referralId}
                  onChange={(e) => setReferralId(e.target.value)}
                  placeholder="seu-id-de-indicacao"
                  className="w-full px-4 py-3 border border-border rounded-md bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </section>

              {/* Seleção de Prompt */}
              <section className="border-t-4 border-accent pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Selecione ou Crie um Prompt</h2>
                <Tabs defaultValue="templates" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="templates">Templates</TabsTrigger>
                    <TabsTrigger value="custom">Prompt Customizado</TabsTrigger>
                  </TabsList>

                  {/* Aba de Templates */}
                  <TabsContent value="templates" className="space-y-4">
                    <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                      {categories.map((category) => (
                        <div key={category}>
                          <h3 className="text-sm font-bold text-accent uppercase tracking-wide mb-3 border-b border-border pb-2">
                            {category}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {getTemplatesByCategory(category).map((template) => (
                              <button
                                key={template.id}
                                onClick={() => {
                                  setSelectedTemplate(template.id);
                                  setCustomPrompt('');
                                }}
                                className={`p-4 text-left border-2 rounded-md transition-all hover:shadow-sm ${
                                  selectedTemplate === template.id
                                    ? 'border-accent bg-accent/5 ring-1 ring-accent'
                                    : 'border-border hover:border-accent/50'
                                }`}
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <p className={`font-bold ${selectedTemplate === template.id ? 'text-accent' : 'text-foreground'}`}>
                                    {template.name}
                                  </p>
                                  {selectedTemplate === template.id && (
                                    <Check className="w-4 h-4 text-accent" />
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {template.description}
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Aba de Prompt Customizado */}
                  <TabsContent value="custom" className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      Escreva um prompt detalhado descrevendo o app que deseja criar. Máximo de 50.000 caracteres.
                    </p>
                    <textarea
                      value={customPrompt}
                      onChange={(e) => {
                        setCustomPrompt(e.target.value);
                        setSelectedTemplate(null);
                      }}
                      placeholder="Descreva o app que deseja criar..."
                      className="w-full h-48 px-4 py-3 border border-border rounded-md bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                    <div className="text-xs text-muted-foreground">
                      {customPrompt.length} / 50.000 caracteres
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Botão de Geração */}
              <Button
                onClick={handleGenerateUrl}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6"
              >
                Gerar Link
              </Button>
            </div>
          </div>

          {/* Coluna Direita - Resultados e Guia */}
          <div className="lg:col-span-1">
            {generatedUrl ? (
              <div className="space-y-6">
                {/* Exibição da URL Gerada */}
                <div className="bg-foreground text-accent-foreground p-6 rounded-md space-y-4">
                  <h3 className="font-bold text-lg">Seu Link Gerado</h3>
                  <div className="bg-black p-3 rounded text-xs break-all font-mono text-accent overflow-auto max-h-32">
                    {generatedUrl}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleCopyUrl}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-foreground"
                    >
                      {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copied ? 'Copiado!' : 'Copiar'}
                    </Button>
                    <Button
                      onClick={handleOpenUrl}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Abrir
                    </Button>
                  </div>
                </div>

                {/* Guia de Conversão */}
                {showConversionGuide && (
                  <div className="border-l-4 border-accent bg-secondary p-6 rounded-md space-y-4">
                    <h3 className="font-bold text-lg text-foreground">📋 Checklist de Conversão</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex gap-3">
                        <div className="text-accent font-bold">1</div>
                        <div>
                          <p className="font-bold text-foreground">Compartilhe o link</p>
                          <p className="text-muted-foreground">Envie para amigos ou incorpore no seu site</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-accent font-bold">2</div>
                        <div>
                          <p className="font-bold text-foreground">App é gerado automaticamente</p>
                          <p className="text-muted-foreground">A Lovable criará o app a partir do seu prompt</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-accent font-bold">3</div>
                        <div>
                          <p className="font-bold text-foreground">Usuário publica o app</p>
                          <p className="text-muted-foreground">
                            <strong>Crítico:</strong> Ele deve clicar em "Publicar" para ativar seu bônus
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-accent font-bold">✓</div>
                        <div>
                          <p className="font-bold text-foreground">Ganhe 10 créditos!</p>
                          <p className="text-muted-foreground">Você e o usuário recebem créditos bônus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-secondary p-6 rounded-md text-center space-y-4">
                <div className="text-4xl">🔗</div>
                <p className="font-bold text-foreground">Gere um link para começar</p>
                <p className="text-sm text-muted-foreground">
                  Preencha seu ID de indicação e selecione ou crie um prompt acima
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-border mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-sm text-muted-foreground">
              Gerador de Links Lovable • Maximize conversões com criação automática de apps
            </p>
            <a
              href="/faq"
              className="text-sm font-bold text-accent hover:text-accent/90 transition-colors"
            >
              Perguntas Frequentes
            </a>
          </div>
          <div className="text-xs text-muted-foreground text-center border-t border-border pt-4">
            <p>© 2026 Gerador de Links Lovable. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
