# Portfolio Pessoal

## 🚀 Tecnologias

- React 18
- Vite
- TailwindCSS
- EmailJS
- ESLint

## 📦 Estrutura do Projeto

```
src/
├── components/     # Componentes React reutilizáveis
├── App.jsx        # Componente principal da aplicação
├── main.jsx       # Ponto de entrada da aplicação
└── index.css      # Estilos globais
```

## 🛠️ Configuração do Ambiente

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter
- `npm run deploy` - Faz deploy para o GitHub Pages

## 🔧 Arquitetura

O projeto é construído com React e utiliza Vite como bundler. A estrutura é organizada da seguinte forma:

### Estrutura de Componentes
```
src/
├── components/
│   ├── sections/           # Seções principais do portfólio
│   │   ├── Home.jsx       # Página inicial com apresentação
│   │   ├── About.jsx      # Seção sobre mim
│   │   ├── Projects.jsx   # Portfólio de projetos
│   │   └── Contact.jsx    # Formulário de contato
│   ├── Navbar.jsx         # Barra de navegação responsiva
│   ├── MobileMenu.jsx     # Menu mobile com animações
│   ├── LoadingScreen.jsx  # Tela de carregamento inicial
│   ├── RevealOnScroll.jsx # Componente de animação no scroll
│   └── LanguageContext.jsx # Gerenciamento de idiomas
```

### Padrões e Tecnologias

- **Gerenciamento de Estado**:
  - Context API para internacionalização
  - Props para comunicação entre componentes
  - Hooks personalizados para lógica reutilizável

- **Estilização**:
  - TailwindCSS para estilos utilitários
  - Animações com CSS transitions
  - Design responsivo com breakpoints personalizados

- **Performance**:
  - Lazy loading de componentes
  - Otimização de imagens
  - Code splitting com Vite

- **Integrações**:
  - EmailJS para formulário de contato
  - GitHub Pages para deploy
  - ESLint para qualidade de código

### Fluxo de Dados

1. **Inicialização**:
   - Carregamento do `main.jsx`
   - Configuração do `LanguageProvider`
   - Renderização do `App.jsx`

2. **Navegação**:
   - Sistema de rolagem suave
   - Menu mobile com animações
   - Transições entre seções

3. **Interatividade**:
   - Animações no scroll
   - Formulário de contato com validação
   - Troca de idiomas em tempo real

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages através do pacote `gh-pages`.

## 🔍 Linting e Formatação

- ESLint configurado com regras específicas para React
- Plugins incluídos:
  - eslint-plugin-react
  - eslint-plugin-react-hooks
  - eslint-plugin-react-refresh

## 📝 Notas de Desenvolvimento

- O projeto utiliza React 18 com Strict Mode ativado
- Implementa Context API para gerenciamento de estado global
- Otimizado para performance com Vite
- Responsivo e acessível por padrão

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request com melhorias.

## 📄 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).
