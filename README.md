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

- **Componentes**: Localizados em `src/components/`, seguem uma arquitetura modular
- **Estilização**: Utiliza TailwindCSS para estilos
- **Internacionalização**: Implementada através do LanguageContext
- **Formulário de Contato**: Integrado com EmailJS para envio de emails

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
