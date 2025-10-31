# Uverest Starter Monorepo

Starter monorepo para projetos **React + MUI**, organizado com **pnpm workspaces**.  
Versão: **v0.2**

---

## 🚀 Setup inicial

### 1. Habilitar o Corepack
```bash
corepack enable
```

### 2. Garantir versão correta do PNPM
```bash
corepack prepare pnpm@10.17.0 --activate
pnpm -v   # deve exibir 10.17.0
```

### 3. Instalar dependências
Na raiz do projeto:
```bash
pnpm install
```

### 4. Rodar app de exemplo (website)
```bash
pnpm dev:website
```

---

## 📂 Estrutura de pastas

```plaintext
apps/                # Aplicações finais (website, admin, etc.)
  └── website/       # Website de exemplo (Default App)

packages/            # Pacotes compartilhados
  ├── design-system/ # Componentes React/MUI (atoms, molecules, organisms, wrappers)
  ├── shared/        # Hooks, utils e helpers (agnósticos)
  ├── themes/        # Definições de temas (default, grayscale, etc.)
  └── services/      # Serviços de API, data fetching (futuro)

tools/               # Scripts e utilitários (atualmente vazio)

docs/                # Documentação adicional (se necessário)

pnpm-workspace.yaml
package.json         # Configurações do workspace e deps core
jsconfig.json        # Imports absolutos
```

---

## 🧩 Concepções básicas

### Design System
- **Atoms** → componentes básicos (ex.: `HighlightText`)  
- **Molecules** → combinações simples (ex.: `ThemeToggleButton`)  
- **Organisms** → componentes mais complexos (ex.: `DataTable`)  
- **Wrappers** → providers, contextos e integradores de UI  

### Shared
- **hooks/** → hooks reutilizáveis (`useColorMode`, `useScrollRestoration`)  
- **background-patterns/** → helpers de CSS para patterns  
- **utils/** → funções utilitárias agnósticas  

### Themes
Cada tema possui:
- `palette.js` → definições de cores (com lighten/darken automáticos)  
- `typography.js`, `shape.js`, `transitions.js` → configs visuais  
- `_config.js` → metadados (`id`, `supportedModes`, `allowUserToggle`, etc.)  
- `index.js` → função `getThemeOptions(mode)` que gera o objeto MUI Theme  

---

## ⚙️ Scripts principais

Executados a partir da raiz:

```bash
pnpm dev:website     # Rodar website em modo dev
pnpm build:website   # Build de produção
pnpm preview:website # Preview do build
```

---

## 🔑 Variáveis de ambiente

Arquivos `.env` ficam dentro do app (ex.: `apps/website/.env`).  
Exemplo:

```env
VITE_APP_NAME="Uverest Monorepo Website Template"
VITE_API_URL="http://localhost:3000"
VITE_BASE_PATH="/"
VITE_ENABLE_OBSERVABILITY="false"
```

- `.env` → base default  
- `.env.production` → sobrescreve na build  
- `.env.example` → apenas referência para devs  

Validação e parsing feitos via **envalid** em `src/app/config/env.js`.  

---

## 🛣️ Roadmap

- **v0.2** → Estrutura base, theme provider, design system inicial, pages exemplo.  
- **v0.3** → CLI para gerar temas/templates + meta centralizado em rotas.  
- **v1.0** → Typescript + docs completas + serviços/admin.