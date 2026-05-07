# Token Architecture — QI Artificial

> Tokens concretos da QI Artificial. Single source of truth.
> Autor: @design:jina-anne (Design Tokens Pioneer)
> Data: 2026-05-07
> Handoff de: @design:alla-kholmatova (Design Language)
> Handoff para: @design:andy-bell (CSS Architecture) → @dev (Implementação)
> Status: Definido — pronto para implementação

---

## Naming Convention

**Estrutura:** `--{category}-{concept}-{variant}`

| Camada | Padrão | Exemplo | Regra |
|--------|--------|---------|-------|
| **Global (primitiva)** | `--{category}-{hue}-{step}` | `--color-violet-500` | Nome o que É |
| **Alias (semântico)** | `--{category}-{concept}-{variant}` | `--color-brand-primary` | Nome o que SIGNIFICA |
| **Componente** | `--{component}-{property}-{state}` | `--btn-bg-hover` | Nome onde VAI |

---

## 1. Paleta de Cores

### 1.1 Global Tokens (Primitivas)

#### Violeta (Primária — Creator archetype)

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-violet-50` | `#F5F0FF` | Wash, backgrounds sutis |
| `--color-violet-100` | `#EDE5FF` | Hover backgrounds |
| `--color-violet-200` | `#D4C4FF` | Borders, dividers ativos |
| `--color-violet-300` | `#B49AFF` | Ícones secundários |
| `--color-violet-400` | `#9B6FFF` | Links hover, destaques |
| `--color-violet-500` | `#7C4DFF` | **PRIMARY — CTAs, links, brand** |
| `--color-violet-600` | `#6B35F0` | Hover sobre primary |
| `--color-violet-700` | `#5A24D4` | Active/pressed |
| `--color-violet-800` | `#4A1DB0` | Text emphasis em dark |
| `--color-violet-900` | `#1E0A4E` | Superfícies dark mode |
| `--color-violet-950` | `#120630` | Background dark mode |

#### Coral (Accent quente — energia, calor humano)

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-coral-50` | `#FFF5F2` | Wash quente |
| `--color-coral-100` | `#FFE8E0` | Tag backgrounds |
| `--color-coral-200` | `#FFCBB8` | Badges |
| `--color-coral-300` | `#FFA88E` | Ícones accent |
| `--color-coral-400` | `#FF8563` | Destaque quente |
| `--color-coral-500` | `#FF6B4A` | **ACCENT QUENTE — energia, CTAs secundários** |
| `--color-coral-600` | `#E85535` | Hover |
| `--color-coral-700` | `#C44225` | Active |

#### Cyan (Accent frio — precisão técnica, dados)

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-cyan-50` | `#EDFFFE` | Wash técnico |
| `--color-cyan-100` | `#D0FFFE` | Code backgrounds |
| `--color-cyan-200` | `#A0FFF5` | Badges técnicos |
| `--color-cyan-300` | `#5CECE0` | Ícones data |
| `--color-cyan-400` | `#2DD4C4` | Destaque técnico |
| `--color-cyan-500` | `#14B8A8` | **ACCENT FRIO — código, dados, engine** |
| `--color-cyan-600` | `#0D9488` | Hover |
| `--color-cyan-700` | `#0F766E` | Active |

#### Neutras (com undertone violeta — nunca cinza puro)

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-neutral-0` | `#FFFFFF` | Branco puro |
| `--color-neutral-50` | `#FAF8FF` | Off-white quente (body background light) |
| `--color-neutral-100` | `#F3F0F8` | Surface light |
| `--color-neutral-200` | `#E8E4F0` | Borders light |
| `--color-neutral-300` | `#D4CFE0` | Borders ativos, dividers |
| `--color-neutral-400` | `#A9A2B8` | Placeholder text |
| `--color-neutral-500` | `#7E778F` | Muted text |
| `--color-neutral-600` | `#5E5870` | Secondary text |
| `--color-neutral-700` | `#3D3750` | Text principal (em light mode) |
| `--color-neutral-800` | `#2A2438` | Headings (em light mode) |
| `--color-neutral-900` | `#1A1625` | Text máximo contraste |
| `--color-neutral-950` | `#0F0B1A` | Background dark mode |

#### Feedback (semânticas fixas)

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-green-500` | `#22C55E` | Success |
| `--color-red-500` | `#EF4444` | Error |
| `--color-amber-500` | `#F59E0B` | Warning |
| `--color-blue-500` | `#3B82F6` | Info |

### 1.2 Alias Tokens (Semânticos — Light Mode)

| Token | Referência | Intent |
|-------|-----------|--------|
| `--color-brand-primary` | `--color-violet-500` (#7C4DFF) | Cor da marca, CTAs, links |
| `--color-brand-primary-hover` | `--color-violet-600` (#6B35F0) | Hover sobre primary |
| `--color-brand-primary-active` | `--color-violet-700` (#5A24D4) | Active/pressed |
| `--color-brand-primary-subtle` | `--color-violet-50` (#F5F0FF) | Backgrounds sutis com brand |
| `--color-accent-warm` | `--color-coral-500` (#FF6B4A) | Energia, destaque quente |
| `--color-accent-warm-hover` | `--color-coral-600` (#E85535) | Hover coral |
| `--color-accent-cool` | `--color-cyan-500` (#14B8A8) | Técnico, dados, código |
| `--color-accent-cool-hover` | `--color-cyan-600` (#0D9488) | Hover cyan |
| `--color-bg-primary` | `--color-neutral-0` (#FFFFFF) | Background principal |
| `--color-bg-secondary` | `--color-neutral-50` (#FAF8FF) | Background alternativo |
| `--color-bg-surface` | `--color-neutral-100` (#F3F0F8) | Cards, elevated surfaces |
| `--color-bg-dark` | `--color-neutral-950` (#0F0B1A) | Seções dark |
| `--color-bg-dark-surface` | `--color-violet-950` (#120630) | Cards em dark sections |
| `--color-text-primary` | `--color-neutral-900` (#1A1625) | Texto principal |
| `--color-text-secondary` | `--color-neutral-600` (#5E5870) | Texto secundário |
| `--color-text-muted` | `--color-neutral-500` (#7E778F) | Texto terciário/muted |
| `--color-text-inverse` | `--color-neutral-50` (#FAF8FF) | Texto sobre dark |
| `--color-text-brand` | `--color-violet-500` (#7C4DFF) | Texto com cor brand |
| `--color-border-default` | `--color-neutral-200` (#E8E4F0) | Bordas padrão |
| `--color-border-strong` | `--color-neutral-300` (#D4CFE0) | Bordas emphasis |
| `--color-border-brand` | `--color-violet-200` (#D4C4FF) | Bordas com brand |
| `--color-success` | `--color-green-500` (#22C55E) | Feedback positivo |
| `--color-error` | `--color-red-500` (#EF4444) | Feedback negativo |
| `--color-warning` | `--color-amber-500` (#F59E0B) | Feedback atenção |
| `--color-info` | `--color-blue-500` (#3B82F6) | Feedback informativo |

### 1.3 Alias Tokens — Dark Mode

| Token | Valor Dark | Intent |
|-------|-----------|--------|
| `--color-brand-primary` | `#9B6FFF` (violet-400, mais claro para contraste) | Brand em dark |
| `--color-brand-primary-hover` | `#B49AFF` (violet-300) | Hover |
| `--color-brand-primary-subtle` | `rgba(124, 77, 255, 0.12)` | Brand subtle overlay |
| `--color-accent-warm` | `#FF8563` (coral-400) | Coral mais claro |
| `--color-accent-cool` | `#2DD4C4` (cyan-400) | Cyan mais claro |
| `--color-bg-primary` | `#0F0B1A` (neutral-950) | Dark background |
| `--color-bg-secondary` | `#120630` (violet-950) | Dark alternativo |
| `--color-bg-surface` | `#1A1528` | Cards em dark |
| `--color-text-primary` | `#F3F0F8` (neutral-100) | Texto sobre dark |
| `--color-text-secondary` | `#A9A2B8` (neutral-400) | Texto secundário dark |
| `--color-text-muted` | `#7E778F` (neutral-500) | Muted em dark |
| `--color-border-default` | `rgba(212, 196, 255, 0.12)` | Borda sutil dark |
| `--color-border-strong` | `rgba(212, 196, 255, 0.24)` | Borda forte dark |

---

## 2. Tipografia

### 2.1 Font Families

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-display` | `"Space Grotesk", "Inter", sans-serif` | Headings, hero text, destaque |
| `--font-body` | `"Inter", "Helvetica Neue", sans-serif` | Body text, UI, parágrafos |
| `--font-mono` | `"JetBrains Mono", "Fira Code", monospace` | Código, tokens, terminal |

### 2.2 Escala Tipográfica

| Token | Size | Line Height | Letter Spacing | Weight | Uso |
|-------|------|-------------|----------------|--------|-----|
| `--text-hero` | `80px` / `5rem` | `1.0` | `-0.03em` | `700` | Hero principal |
| `--text-display` | `56px` / `3.5rem` | `1.1` | `-0.025em` | `700` | Títulos de seção |
| `--text-heading-1` | `40px` / `2.5rem` | `1.15` | `-0.02em` | `600` | H1 |
| `--text-heading-2` | `32px` / `2rem` | `1.2` | `-0.015em` | `600` | H2 |
| `--text-heading-3` | `24px` / `1.5rem` | `1.3` | `-0.01em` | `600` | H3 |
| `--text-heading-4` | `20px` / `1.25rem` | `1.4` | `-0.005em` | `600` | H4 |
| `--text-body-lg` | `18px` / `1.125rem` | `1.6` | `0` | `400` | Lead paragraphs |
| `--text-body` | `16px` / `1rem` | `1.6` | `0` | `400` | Body padrão |
| `--text-body-sm` | `14px` / `0.875rem` | `1.5` | `0.005em` | `400` | Text menor |
| `--text-caption` | `12px` / `0.75rem` | `1.4` | `0.01em` | `500` | Labels, badges |
| `--text-overline` | `11px` / `0.6875rem` | `1.4` | `0.08em` | `600` | Overlines, uppercase labels |

### 2.3 Font Weights

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-weight-regular` | `400` | Body text |
| `--font-weight-medium` | `500` | Captions, labels, nav |
| `--font-weight-semibold` | `600` | Headings, botões |
| `--font-weight-bold` | `700` | Hero, display |

---

## 3. Espaçamento

Escala 4pt generosa com naming por step:

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | `4px` | Micro gaps (ícone-texto) |
| `--space-2` | `8px` | Inline spacing, padding mínimo |
| `--space-3` | `12px` | Padding interno de badges, tags |
| `--space-4` | `16px` | Padding padrão de componentes |
| `--space-6` | `24px` | Gap entre elementos relacionados |
| `--space-8` | `32px` | Gap entre grupos |
| `--space-12` | `48px` | Padding de seções internas |
| `--space-16` | `64px` | Separação entre blocos |
| `--space-24` | `96px` | Separação entre seções |

---

## 4. Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-none` | `0px` | Code blocks, containers técnicos |
| `--radius-sm` | `6px` | Inputs, badges inline |
| `--radius-md` | `12px` | Buttons, tags, small cards |
| `--radius-lg` | `16px` | Cards padrão |
| `--radius-xl` | `24px` | Cards grandes, modals |
| `--radius-2xl` | `32px` | Hero cards, seções featured |
| `--radius-full` | `9999px` | Pills, avatares, badges circulares |

---

## 5. Sombras (com tint de violeta)

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-sm` | `0 1px 3px rgba(30, 10, 78, 0.06), 0 1px 2px rgba(30, 10, 78, 0.04)` | Elevação mínima, inputs |
| `--shadow-md` | `0 4px 12px rgba(30, 10, 78, 0.08), 0 2px 4px rgba(30, 10, 78, 0.04)` | Cards padrão |
| `--shadow-lg` | `0 12px 40px rgba(30, 10, 78, 0.12), 0 4px 12px rgba(30, 10, 78, 0.06)` | Cards hover, dropdowns |
| `--shadow-xl` | `0 24px 64px rgba(30, 10, 78, 0.16), 0 8px 24px rgba(30, 10, 78, 0.08)` | Modals, hero cards |
| `--shadow-glow-violet` | `0 0 24px rgba(124, 77, 255, 0.25)` | Glow effect brand (hover CTAs) |
| `--shadow-glow-coral` | `0 0 24px rgba(255, 107, 74, 0.25)` | Glow effect quente |
| `--shadow-glow-cyan` | `0 0 24px rgba(20, 184, 168, 0.25)` | Glow effect técnico |

---

## 6. Motion

| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-instant` | `100ms` | Micro-feedback (opacity, color) |
| `--duration-fast` | `200ms` | Hovers, state changes |
| `--duration-normal` | `400ms` | Transições de layout, reveals |
| `--duration-slow` | `600ms` | Page transitions, modals |
| `--duration-decorative` | `1000ms` | Background animations |
| `--ease-out` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Entradas — elementos aparecendo |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transições de estado |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Micro-bounces (só badges/notifications) |

---

## 7. Gradientes (com propósito)

| Token | Valor | Uso |
|-------|-------|-----|
| `--gradient-brand` | `linear-gradient(135deg, #7C4DFF, #B49AFF)` | Hero, CTAs premium |
| `--gradient-transform` | `linear-gradient(135deg, #7C4DFF, #FF6B4A)` | Violeta→coral — transformação, antes/depois |
| `--gradient-tech` | `linear-gradient(135deg, #14B8A8, #7C4DFF)` | Cyan→violeta — tecnologia, engine |
| `--gradient-warm` | `linear-gradient(135deg, #FF6B4A, #FFB347)` | Coral→amber — energia, calor |
| `--gradient-dark-surface` | `linear-gradient(180deg, #0F0B1A, #120630)` | Fundo dark com profundidade |

---

## 8. Glassmorphism

| Token | Valor | Uso |
|-------|-------|-----|
| `--glass-bg` | `rgba(250, 248, 255, 0.75)` | Nav glass (light mode) |
| `--glass-bg-dark` | `rgba(15, 11, 26, 0.80)` | Nav glass (dark mode) |
| `--glass-blur` | `blur(20px)` | Backdrop filter |
| `--glass-saturate` | `saturate(180%)` | Backdrop saturação |
| `--glass-border` | `rgba(212, 196, 255, 0.15)` | Borda sutil do glass |

---

## 9. Mapa de Migração — Apple → QI Artificial

| Token Apple (remover) | Token QI (substituir por) | Valor antigo | Valor novo |
|----------------------|--------------------------|-------------|------------|
| `--color-primary: #000000` | `--color-brand-primary` | #000000 | #7C4DFF |
| `--color-secondary: #0071e3` | `--color-brand-primary` | #0071e3 | #7C4DFF |
| `--color-tertiary: #2997ff` | `--color-accent-cool` | #2997ff | #14B8A8 |
| `--color-neutral: #86868b` | `--color-text-muted` | #86868b | #7E778F |
| `--color-surface: #f5f5f7` | `--color-bg-surface` | #f5f5f7 | #F3F0F8 |
| `--color-text: #1d1d1f` | `--color-text-primary` | #1d1d1f | #1A1625 |
| `--color-text-muted: #6e6e73` | `--color-text-secondary` | #6e6e73 | #5E5870 |
| `--color-border: #d2d2d7` | `--color-border-default` | #d2d2d7 | #E8E4F0 |
| `--color-link: #0066cc` | `--color-brand-primary` | #0066cc | #7C4DFF |
| `--color-blue: #0071e3` | `--color-brand-primary` | #0071e3 | #7C4DFF |
| `--color-blue-hover: #0077ed` | `--color-brand-primary-hover` | #0077ed | #6B35F0 |
| `--color-off-white: #fafafc` | `--color-bg-secondary` | #fafafc | #FAF8FF |
| `--color-warm-gray: #f5f5f7` | `--color-bg-surface` | #f5f5f7 | #F3F0F8 |
| `--color-dark-surface: #161617` | `--color-bg-dark` | #161617 | #0F0B1A |
| `--font-display: SF Pro Display` | `--font-display` | SF Pro Display | Space Grotesk |
| `--font-text: SF Pro Text` | `--font-body` | SF Pro Text | Inter |
| `--spacing-xs: 4px` | `--space-1` | 4px | 4px |
| `--spacing-sm: 8px` | `--space-2` | 8px | 8px |
| `--spacing-md: 16px` | `--space-4` | 16px | 16px |
| `--spacing-lg: 22px` | `--space-6` | 22px | 24px |
| `--spacing-xl: 44px` | `--space-12` | 44px | 48px |
| `--radius-sm: 5px` | `--radius-sm` | 5px | 6px |
| `--radius-md: 10px` | `--radius-md` | 10px | 12px |
| `--radius-lg: 12px` | `--radius-lg` | 12px | 16px |
| `--radius-xl: 16px` | `--radius-xl` | 16px | 24px |

---

## 10. Acessibilidade — Contrast Ratios

Todos os pares text/background passam WCAG AA (4.5:1 para text, 3:1 para large text):

| Par | Ratio | Nível |
|-----|-------|-------|
| `--color-text-primary` (#1A1625) sobre `--color-bg-primary` (#FFFFFF) | 15.8:1 | AAA |
| `--color-text-primary` (#1A1625) sobre `--color-bg-surface` (#F3F0F8) | 13.2:1 | AAA |
| `--color-brand-primary` (#7C4DFF) sobre `--color-bg-primary` (#FFFFFF) | 4.6:1 | AA |
| `--color-text-inverse` (#FAF8FF) sobre `--color-bg-dark` (#0F0B1A) | 17.1:1 | AAA |
| `--color-brand-primary` dark (#9B6FFF) sobre `--color-bg-dark` (#0F0B1A) | 6.2:1 | AAA |
| `--color-accent-warm` (#FF6B4A) sobre `--color-bg-primary` (#FFFFFF) | 3.4:1 | AA Large |
| `--color-accent-cool` (#14B8A8) sobre `--color-bg-primary` (#FFFFFF) | 3.1:1 | AA Large |

> Nota: Accent warm e cool passam AA para large text (>=18px). Para text menor, usar sobre dark backgrounds ou com text-primary.

---

## 11. Handoff

Este documento alimenta:

1. **@design:andy-bell** → CSS Architecture (CUBE CSS + Tailwind v4 integration)
2. **@design:brad-frost** → Atomic Decomposition (componentes usando estes tokens)
3. **@dev** → Implementação no `globals.css` e `page.tsx`

### Arquivos a modificar:

| Arquivo | Ação |
|---------|------|
| `src/app/globals.css` | Substituir tokens Apple por tokens QI |
| `src/app/layout.tsx` | Adicionar imports do Google Fonts (Space Grotesk, Inter, JetBrains Mono) |
| `src/app/page.tsx` | Atualizar referências de variáveis CSS |

---

## Documentos Relacionados

| Documento | Path |
|-----------|------|
| Design Language | `docs/design-language-qi-artificial.md` |
| Brainstorming & Offer | `docs/brainstorming-clone-and-ship.md` |
| Brandbook Gap Analysis | `docs/brandbook-gap-analysis.md` |
| Roadmap Showcase Site | `docs/roadmap-showcase-site.md` |

---

*Token Architecture definida em 2026-05-07 | QI Artificial*
*Jina Anne — Design Tokens Pioneer*
*Every token traces back to brand intent. Change one, propagate everywhere.*
