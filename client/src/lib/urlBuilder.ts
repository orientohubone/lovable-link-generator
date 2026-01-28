/**
 * Construtor de URL para Gerador de Links Lovable
 * Constrói URLs híbridas combinando links de indicação com parâmetros de Build with URL
 */

export interface BuildURLOptions {
  prompt: string;
  images?: string[];
  referralId: string;
  autosubmit?: boolean;
}

export interface GeneratedURL {
  full: string;
  base: string;
  query: string;
  fragment: string;
}

/**
 * Codifica uma string de prompt para transmissão segura via URL
 * Lida com caracteres especiais e prompts longos (até 50k caracteres)
 */
export function encodePrompt(prompt: string): string {
  return encodeURIComponent(prompt);
}

/**
 * Valida URLs de imagens para compatibilidade com Lovable
 * - Devem ser publicamente acessíveis
 * - Formatos suportados: JPEG, PNG, WebP
 * - Máximo de 10 imagens
 */
export function validateImageUrls(urls: string[]): { valid: string[]; errors: string[] } {
  const errors: string[] = [];
  const valid: string[] = [];
  const supportedFormats = ['jpg', 'jpeg', 'png', 'webp'];

  if (urls.length > 10) {
    errors.push(`Máximo de 10 imagens permitidas. Você forneceu ${urls.length}.`);
    return { valid: urls.slice(0, 10), errors };
  }

  urls.forEach((url, index) => {
    try {
      new URL(url);
      const extension = url.split('.').pop()?.toLowerCase() || '';
        if (!supportedFormats.includes(extension)) {
        errors.push(`Imagem ${index + 1}: Formato não suportado. Use JPEG, PNG ou WebP.`);
      } else {
        valid.push(url);
      }
    } catch {
      errors.push(`Imagem ${index + 1}: Formato de URL inválido.`);
    }
  });

  return { valid, errors };
}

/**
 * Constrói um link híbrido completo de Build with URL da Lovable
 * Combina rastreamento de indicação com geração automática de app
 *
 * Estrutura: https://lovable.dev/?via=ID&autosubmit=true#prompt=ENCODED_PROMPT&images=URL1&images=URL2
 */
export function buildLovableURL(options: BuildURLOptions): GeneratedURL {
  const { prompt, images = [], referralId, autosubmit = true } = options;

  // Validar entradas
  if (!prompt.trim()) {
    throw new Error('O prompt não pode estar vazio');
  }

  if (prompt.length > 50000) {
    throw new Error('O prompt excede o comprimento máximo de 50.000 caracteres');
  }

  if (!referralId.trim()) {
    throw new Error('ID de indicação é obrigatório');
  }

  // Construir URL base
  const base = 'https://lovable.dev/';

  // Construir query string (processamento no servidor)
  const queryParams = new URLSearchParams();
  queryParams.append('via', referralId);
  if (autosubmit) {
    queryParams.append('autosubmit', 'true');
  }
  const query = `?${queryParams.toString()}`;

  // Construir fragmento (processamento no cliente)
  const fragmentParams = new URLSearchParams();
  fragmentParams.append('prompt', prompt);

  // Adicionar imagens ao fragmento
  images.forEach((imageUrl) => {
    fragmentParams.append('images', imageUrl);
  });

  const fragment = `#${fragmentParams.toString()}`;

  // Combinar todas as partes
  const full = base + query + fragment;

  // Validar comprimento da URL (limite do navegador é tipicamente 2048-8192 caracteres)
  if (full.length > 2048) {
    console.warn(
      `A URL gerada tem ${full.length} caracteres. Alguns navegadores podem truncar URLs com mais de 2048 caracteres.`
    );
  }

  return { full, base, query, fragment };
}

/**
 * Copia uma URL para a área de transferência e retorna o status de sucesso
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    }
  } catch (error) {
    console.error('Falha ao copiar para a área de transferência:', error);
    return false;
  }
}

/**
 * Gera um texto de preview de link compartilhável
 */
export function generatePreviewText(prompt: string, referralId: string): string {
  const truncatedPrompt = prompt.length > 100 ? prompt.substring(0, 100) + '...' : prompt;
  return `🔗 Gerador de Apps Lovable\n\n"${truncatedPrompt}"\n\nGerado por: ${referralId}`;
}

/**
 * Extrai parâmetros de uma URL gerada para exibição/edição
 */
export function parseGeneratedURL(url: string): Partial<BuildURLOptions> | null {
  try {
    const urlObj = new URL(url);
    const referralId = urlObj.searchParams.get('via') || '';
    const autosubmit = urlObj.searchParams.get('autosubmit') === 'true';

    // Parse fragment (client-side params)
    const fragment = urlObj.hash.substring(1);
    const fragmentParams = new URLSearchParams(fragment);
    const prompt = fragmentParams.get('prompt') || '';
    const images = fragmentParams.getAll('images');

    return {
      prompt,
      images: images.length > 0 ? images : undefined,
      referralId,
      autosubmit,
    };
  } catch {
    return null;
  }
}
