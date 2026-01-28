import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, ExternalLink, Check } from 'lucide-react';
import { buildLovableURL, copyToClipboard } from '@/lib/urlBuilder';
import { TEMPLATES, getAllCategories, getTemplatesByCategory } from '@/lib/templates';
import { toast } from 'sonner';

/**
 * Lovable Link Generator - Main Application
 * 
 * This component provides a user interface to:
 * 1. Select or create prompts for Lovable app generation
 * 2. Generate hybrid URLs combining referral links with Build with URL parameters
 * 3. Copy and share generated links with conversion guidance
 */
export default function Home() {
  // State management
  const [referralId, setReferralId] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [generatedUrl, setGeneratedUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [showConversionGuide, setShowConversionGuide] = useState(false);

  // Get the current prompt (from template or custom)
  const currentPrompt = selectedTemplate
    ? TEMPLATES.find((t) => t.id === selectedTemplate)?.prompt || ''
    : customPrompt;

  // Generate URL handler
  const handleGenerateUrl = () => {
    if (!referralId.trim()) {
      toast.error('Please enter your Lovable referral ID');
      return;
    }

    if (!currentPrompt.trim()) {
      toast.error('Please select a template or enter a custom prompt');
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
      toast.success('URL generated successfully!');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to generate URL');
    }
  };

  // Copy URL handler
  const handleCopyUrl = async () => {
    if (!generatedUrl) return;

    const success = await copyToClipboard(generatedUrl);
    if (success) {
      setCopied(true);
      toast.success('URL copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error('Failed to copy URL');
    }
  };

  // Open URL handler
  const handleOpenUrl = () => {
    if (generatedUrl) {
      window.open(generatedUrl, '_blank');
    }
  };

  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container py-8 md:py-12">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-2">
            Lovable Link Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Create shareable links that automatically generate Lovable apps with your referral code.
            Maximize conversions and earn bonus credits.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Generator */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Referral ID Input */}
              <section className="border-t-4 border-accent pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Referral ID</h2>
                <p className="text-muted-foreground mb-4">
                  Enter your Lovable referral ID to track conversions and earn bonus credits.
                </p>
                <input
                  type="text"
                  value={referralId}
                  onChange={(e) => setReferralId(e.target.value)}
                  placeholder="your-referral-id"
                  className="w-full px-4 py-3 border border-border rounded-md bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </section>

              {/* Prompt Selection */}
              <section className="border-t-4 border-accent pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Select or Create Prompt</h2>
                <Tabs defaultValue="templates" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="templates">Templates</TabsTrigger>
                    <TabsTrigger value="custom">Custom Prompt</TabsTrigger>
                  </TabsList>

                  {/* Templates Tab */}
                  <TabsContent value="templates" className="space-y-4">
                    <div className="space-y-4">
                      {categories.map((category) => (
                        <div key={category}>
                          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">
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
                                className={`p-4 text-left border-2 rounded-md transition-all ${
                                  selectedTemplate === template.id
                                    ? 'border-accent bg-secondary'
                                    : 'border-border hover:border-muted-foreground'
                                }`}
                              >
                                <p className="font-bold text-foreground">{template.name}</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {template.description}
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Custom Prompt Tab */}
                  <TabsContent value="custom" className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      Write a detailed prompt describing the app you want to create. Maximum 50,000 characters.
                    </p>
                    <textarea
                      value={customPrompt}
                      onChange={(e) => {
                        setCustomPrompt(e.target.value);
                        setSelectedTemplate(null);
                      }}
                      placeholder="Describe the app you want to create..."
                      className="w-full h-48 px-4 py-3 border border-border rounded-md bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                    <div className="text-xs text-muted-foreground">
                      {customPrompt.length} / 50,000 characters
                    </div>
                  </TabsContent>
                </Tabs>
              </section>

              {/* Generate Button */}
              <Button
                onClick={handleGenerateUrl}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6"
              >
                Generate Link
              </Button>
            </div>
          </div>

          {/* Right Column - Results & Guide */}
          <div className="lg:col-span-1">
            {generatedUrl ? (
              <div className="space-y-6">
                {/* Generated URL Display */}
                <div className="bg-foreground text-accent-foreground p-6 rounded-md space-y-4">
                  <h3 className="font-bold text-lg">Your Generated Link</h3>
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
                      {copied ? 'Copied!' : 'Copy'}
                    </Button>
                    <Button
                      onClick={handleOpenUrl}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open
                    </Button>
                  </div>
                </div>

                {/* Conversion Guide */}
                {showConversionGuide && (
                  <div className="border-l-4 border-accent bg-secondary p-6 rounded-md space-y-4">
                    <h3 className="font-bold text-lg text-foreground">📋 Conversion Checklist</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex gap-3">
                        <div className="text-accent font-bold">1</div>
                        <div>
                          <p className="font-bold text-foreground">Share the link</p>
                          <p className="text-muted-foreground">Send it to friends or embed on your site</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-accent font-bold">2</div>
                        <div>
                          <p className="font-bold text-foreground">App generates automatically</p>
                          <p className="text-muted-foreground">Lovable will create the app from your prompt</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-accent font-bold">3</div>
                        <div>
                          <p className="font-bold text-foreground">User publishes the app</p>
                          <p className="text-muted-foreground">
                            <strong>Critical:</strong> They must click "Publish" to activate your bonus
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-accent font-bold">✓</div>
                        <div>
                          <p className="font-bold text-foreground">Earn 10 credits!</p>
                          <p className="text-muted-foreground">Both you and the user get bonus credits</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-secondary p-6 rounded-md text-center space-y-4">
                <div className="text-4xl">🔗</div>
                <p className="font-bold text-foreground">Generate a link to get started</p>
                <p className="text-sm text-muted-foreground">
                  Fill in your referral ID and select or create a prompt above
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>
            Lovable Link Generator • Maximize conversions with automated app creation
          </p>
        </div>
      </footer>
    </div>
  );
}
