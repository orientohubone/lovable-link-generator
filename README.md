# Gerador de Links Lovable 🔗

Uma ferramenta moderna para criar links compartilháveis que geram automaticamente aplicações na plataforma Lovable. Combine indicação (referral) com Build with URL para maximizar conversões e ganhar créditos bônus.

**Status**: MVP Pronto para Produção ✅

---

## 🎯 O que é?

O Gerador de Links Lovable permite que você:

- **Crie links compartilháveis** que geram automaticamente apps na Lovable
- **Ganhe créditos bônus** quando novos usuários publicam apps através de seus links
- **Escolha entre templates** pré-definidos ou crie prompts customizados
- **Rastreie conversões** com um guia interativo de ações necessárias

### Exemplo de Fluxo

1. Você cria um link com seu código de indicação
2. Compartilha o link com amigos ou comunidades
3. Novo usuário clica no link
4. Lovable gera automaticamente um app baseado no seu prompt
5. Usuário publica o app
6. Você ganha 10 créditos! 🎉

---

## ✨ Features

### Front-end
- ✅ Interface minimalista e intuitiva (Swiss International Design)
- ✅ 10 templates pré-definidos de apps
- ✅ Suporte a prompts customizados (até 50.000 caracteres)
- ✅ Geração de URLs híbridas (referral + Build with URL)
- ✅ Cópia de URL para área de transferência
- ✅ Guia de conversão interativo
- ✅ Página FAQ com 20 perguntas
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Totalmente em português brasileiro

### Design
- 🎨 Paleta minimalista: Preto, Branco, Vermelho
- 📐 Tipografia em escala: Inter 900, 700, 400
- 🎯 Hierarquia visual clara
- ♿ Acessibilidade otimizada

### Documentação
- 📚 Análise técnica do Build with URL
- 📚 Análise do sistema de bônus
- 📚 Estudo de arquitetura de jobs
- 📚 Guia de deploy no Vercel
- 📚 Roadmap de implementação

---

## 🚀 Quick Start

### Desenvolvimento Local

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/lovable-link-generator.git
cd lovable-link-generator

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:5173
```

### Build para Produção

```bash
# Fazer build
pnpm build

# Testar build localmente
pnpm preview

# Fazer deploy no Vercel (automático via GitHub)
git push origin main
```

---

## 📋 Estrutura do Projeto

```
lovable-link-generator/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx     # Página principal do gerador
│   │   │   ├── FAQ.tsx      # Página de perguntas frequentes
│   │   │   └── NotFound.tsx # Página 404
│   │   ├── components/      # Componentes reutilizáveis (shadcn/ui)
│   │   ├── lib/
│   │   │   ├── urlBuilder.ts    # Lógica de construção de URLs
│   │   │   └── templates.ts     # Templates de apps
│   │   ├── contexts/        # Contextos React
│   │   ├── hooks/           # Hooks customizados
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entrada da aplicação
│   │   └── index.css        # Estilos globais
│   └── index.html           # HTML principal
├── server/                  # Placeholder para backend (não usado em MVP)
├── shared/                  # Tipos compartilhados
├── package.json             # Dependências
├── vite.config.ts           # Configuração Vite
├── tsconfig.json            # Configuração TypeScript
├── tailwind.config.ts       # Configuração Tailwind CSS
├── vercel.json              # Configuração Vercel
└── README.md                # Este arquivo
```

---

## 🛠️ Tecnologias

### Frontend
- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - Componentes acessíveis
- **Wouter** - Roteamento leve
- **Lucide React** - Ícones
- **Sonner** - Toast notifications

### Ferramentas
- **pnpm** - Package manager rápido
- **Prettier** - Code formatter
- **TypeScript** - Linting de tipos

### Deployment
- **Vercel** - Hosting e CI/CD
- **GitHub** - Versionamento

---

## 📖 Documentação

### Guias Principais
- [Guia de Deploy no Vercel](./GUIA_DEPLOY_VERCEL.md) - Passo a passo para publicar
- [Estudo de Sistema de Jobs](./estudo_sistema_jobs_creditos.md) - Arquitetura de processamento de créditos
- [Relatório de Validação](./relatorio_validacao_solucao.md) - Status da solução e roadmap

### Arquivos de Estudo
- `analise_lovable_build_with_url.md` - Análise técnica do Build with URL
- `analise_mecanismo_bonus_lovable.md` - Análise do sistema de bônus
- `estudo_fluxo_automatico_lovable.md` - Estudo de fluxo automático
- `ideas.md` - Brainstorm de design

---

## 🎨 Como Usar

### Gerar um Link

1. Acesse o gerador
2. Insira seu ID de indicação da Lovable
3. Selecione um template ou crie um prompt customizado
4. Clique em "Gerar Link"
5. Copie o link e compartilhe

### Compartilhar

- **WhatsApp**: Cole o link em conversas
- **Twitter/X**: Compartilhe com sua rede
- **LinkedIn**: Publique para profissionais
- **Email**: Envie para contatos
- **Blog**: Incorpore no seu site

### Acompanhar Conversões

Use o guia de conversão interativo para entender:
1. Quando compartilhar o link
2. Como o app é gerado automaticamente
3. Por que o usuário precisa publicar
4. Como você ganha créditos

---

## 🔐 Segurança

- ✅ Validação de entrada em todos os campos
- ✅ Proteção contra XSS (Cross-Site Scripting)
- ✅ Headers de segurança configurados
- ✅ HTTPS obrigatório no Vercel
- ✅ Sem armazenamento de dados sensíveis no cliente

---

## 📊 Roadmap

### Fase 1: MVP ✅ (Completo)
- [x] Front-end do gerador
- [x] Página FAQ
- [x] Design e UX
- [x] Documentação técnica

### Fase 2: Backend Básico (Próximo)
- [ ] API Node.js/Python
- [ ] Banco de dados PostgreSQL
- [ ] Integração com Lovable API
- [ ] Webhooks para eventos

### Fase 3: Sistema de Jobs (Futuro)
- [ ] Fila de mensagens (Bull/Redis)
- [ ] Worker de processamento
- [ ] Retry logic
- [ ] Dead letter queue

### Fase 4: Auditoria & Monitoramento (Futuro)
- [ ] Logging estruturado
- [ ] Detecção de fraude
- [ ] Dashboard de monitoramento
- [ ] Alertas em tempo real

### Fase 5: Otimização & Escala (Futuro)
- [ ] Performance tuning
- [ ] Cache distribuído
- [ ] Multi-região
- [ ] Preparar para escala

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🆘 Suporte

### FAQ
Acesse a página de FAQ no gerador para encontrar respostas a perguntas comuns.

### Documentação
Consulte a pasta de documentação para guias detalhados.

### Problemas
Se encontrar um bug:
1. Verifique a página de FAQ
2. Procure em issues existentes
3. Crie uma nova issue com detalhes do problema

---

## 📞 Contato

- **Email**: support@lovable.dev
- **Twitter**: @lovable_dev
- **Website**: https://lovable.dev
- **Centro de Ajuda**: https://help.manus.im

---

## 🙏 Agradecimentos

- Lovable por fornecer a plataforma e Build with URL
- shadcn/ui pela biblioteca de componentes
- Vercel pelo hosting e CI/CD
- Comunidade React e TypeScript

---

## 📈 Status do Projeto

- **Versão**: 1.0.0
- **Status**: MVP Pronto para Produção
- **Última Atualização**: 28 de Janeiro de 2026
- **Mantido por**: Manus AI

---

## 🚀 Começar Agora

1. **Desenvolvimento Local**: `pnpm install && pnpm dev`
2. **Deploy no Vercel**: Siga o [Guia de Deploy](./GUIA_DEPLOY_VERCEL.md)
3. **Compartilhar**: Comece a usar o gerador e ganhe créditos!

---

**Feito com ❤️ para a comunidade Lovable**
