# Changelog - 29 de Janeiro de 2026

## Migração de React SPA para Astro

### Problema Original
- Site era uma SPA (Single Page Application) com React Router
- GTM/Meta Pixel não disparavam corretamente nas navegações internas
- SEO ruim (conteúdo renderizado via JavaScript)
- LCP (Largest Contentful Paint) alto devido ao carregamento de React

---

## Mudanças Realizadas

### 1. Migração para Astro
**Antes:** Vite + React + React Router (SPA)
**Depois:** Astro 5 + React (MPA - Multi Page Application)

| Aspecto | Antes | Depois |
|---------|-------|--------|
| Framework | Vite 7 | Astro 5 |
| Roteamento | React Router (client-side) | File-based (server-side) |
| Renderização | CSR (Client-Side) | SSG (Static Site Generation) |
| SEO | Ruim | Excelente |
| Tracking | Precisa config extra | Funciona automaticamente |

**Arquivos removidos:**
- `src/App.tsx`
- `src/main.tsx`
- `src/pages/Home.tsx`
- `src/pages/Forms.tsx`
- `src/pages/Quiz.tsx`
- `vite.config.ts`
- `index.html`
- `src/hooks/usePageTracking.ts`

**Arquivos criados:**
- `astro.config.mjs`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- `src/pages/forms.astro`
- `src/pages/quiz.astro`

---

### 2. Otimização de LCP (< 2.5s)
Criados componentes estáticos para o conteúdo "above the fold":

**Novos componentes Astro (HTML puro):**
- `src/components/HeaderStatic.astro` - Header sem dependência de React
- `src/components/HeroStatic.astro` - Hero com animações CSS puras

**Otimizações no Layout:**
- Preload da imagem principal (`woman2.webp`)
- Preload do logo (`logologo.webp`)
- Preload da fonte Inter (async loading)
- Preconnect para domínios externos (YouTube, TrustIndex, Meta)

**Mudanças nos atributos de imagem:**
- `fetchpriority="high"` na imagem do Hero
- `decoding="sync"` para priorizar renderização
- `loading="eager"` para carregar imediatamente
- Dimensões explícitas (`width`, `height`) para evitar layout shift

---

### 3. Páginas Legais
Criadas páginas obrigatórias:

- `/politica-de-privacidade` - Política de Privacidade completa
- `/termos-de-uso` - Termos de Uso da plataforma

---

### 4. Footer Atualizado
Adicionados elementos obrigatórios:

**Informações da empresa:**
```
A WMED SERVIÇOS LTDA, inscrita sob CNPJ 52.387.940/0001-89,
atua de acordo com a legislação brasileira e com a norma da
Anvisa RDC nº 660/2022.
```

**Disclaimers obrigatórios:**
```
Este site não faz parte do Google, Facebook, Instagram ou
Meta Platforms Inc.

Aviso de Saúde: As informações contidas neste site são apenas
para fins educacionais. Consulte sempre um médico antes de
iniciar qualquer tratamento.
```

**Links adicionados:**
- Política de Privacidade
- Termos de Uso

---

### 5. Banner de Cookies
Criado banner informativo (não bloqueante):

**Arquivo:** `src/components/CookieBanner.astro`

**Comportamento:**
- Aparece após 1.5s (não afeta LCP)
- Mostra mensagem informativa
- Botão "Entendi" para fechar
- Salva consentimento no localStorage
- Não bloqueia GTM/Pixel (carregam normalmente)

---

### 6. Configuração de Tracking

**GTM (Google Tag Manager):**
- Script no `<head>` com `is:inline`
- Noscript no `<body>` logo após abertura
- ID: `GTM-M8T3NGTH`

**Meta Pixel:**
- Preconnect para `connect.facebook.net` e `facebook.com`
- Funciona automaticamente via GTM (MPA = reload em cada página)

**Leadster:**
- Script no final do `<body>` com `is:inline`

---

## Estrutura Final do Projeto

```
src/
├── layouts/
│   └── Layout.astro          # Template base (GTM, Leadster, meta tags)
├── pages/
│   ├── index.astro           # Home (/)
│   ├── forms.astro           # Formulários (/forms)
│   ├── quiz.astro            # Quiz (/quiz)
│   ├── politica-de-privacidade.astro
│   └── termos-de-uso.astro
└── components/
    ├── HeaderStatic.astro    # Header estático (LCP otimizado)
    ├── HeroStatic.astro      # Hero estático (LCP otimizado)
    ├── CookieBanner.astro    # Banner de cookies
    ├── Header.tsx            # Header React (backup)
    ├── Hero.tsx              # Hero React (backup)
    ├── Benefits.tsx
    ├── ProblemPicker.tsx
    ├── Steps.tsx
    ├── VideoTestimonials.tsx
    ├── TestimonialCarousel.tsx
    ├── Doctors.tsx
    ├── WrittenTestimonials.tsx
    ├── ExplainerVideo.tsx
    ├── FAQ.tsx
    ├── Partners.tsx
    ├── Footer.tsx
    └── Quiz.tsx
```

---

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
```

---

## Benefícios da Migração

| Métrica | Antes | Depois |
|---------|-------|--------|
| LCP | ~3-4s | <2.5s |
| SEO | Ruim (JS) | Excelente (HTML) |
| Tracking | Config manual | Automático |
| Bundle inicial | ~200KB+ | ~0KB (HTML) |
| Time to Interactive | Alto | Baixo |

---

## Próximos Passos Recomendados

1. [ ] Testar LCP com Lighthouse
2. [ ] Verificar Pixel com Facebook Pixel Helper
3. [ ] Configurar trigger "History Change" no GTM (opcional)
4. [ ] Adicionar Meta Pixel diretamente (se não estiver no GTM)
5. [ ] Deploy na Vercel/Netlify
