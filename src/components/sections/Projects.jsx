import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../LanguageContext";

export const Projects = () => {
  const { language } = useLanguage();
  const texts = {
    pt: {
      featured: "Projetos em Destaque",
      todo: "Lista de Tarefas",
      todoDesc:
        "Desenvolvimento de uma aplicação web para gerenciamento de tarefas utilizando React.js e Next.js. Implementei funcionalidades de adição, conclusão e exclusão de tarefas com interface responsiva.",
      view: "Ver Projeto →",
      cardapio: "Cardápio de Restaurante",
      cardapioDesc:
        "Projeto de listagem de produtos com carrinho de compras responsivo, desenvolvido em React. Permite visualizar produtos, adicionar/remover itens ao carrinho e calcular o valor total, com layout adaptável para desktop e mobile.",
      marketplace: "Monitor de Resiliência de Marketplace",
      marketplaceDesc:
        "Dashboard focado em UX Defensiva e Engenharia de Caos com React e Tailwind. Inclui simulação de falhas de API, tratamento de erros robusto e feedback visual avançado para garantir a confiabilidade do sistema.",
      corporate: "Formulário Corporativo Inteligente",
      corporateDesc:
        "Simulação de Widget BPM para processos corporativos. Desenvolvido com JavaScript Puro (Vanilla) e integração via API REST, com validações de compliance financeiro e automação de preenchimento.",
      coffee: "Coffee Delivery",
      coffeeDesc:
        "E-commerce de café completo com carrinho de compras e checkout. Desenvolvido em React com Context API para gerenciamento de estado global, styled-components para estilização e validação de formulários com React Hook Form.",

      //ecommerce: "Aplicação Web de E-Commerce",
      //ecommerceDesc: "E-commerce full-stack com UI moderna, integração de pagamentos segura e inventário personalizável.",
      //chat: "App de Chat em Tempo Real",
      //chatDesc: "Plataforma de chat escalável com mensagens em tempo real, presença e grupos."
    },
    en: {
      featured: "Featured Projects",
      todo: "To-Do List",
      todoDesc:
        "Creation of a to-do list with React, TypeScript, Sass and Next.js.",
      view: "View Project →",
      cardapio: "Restaurant Menu",
      cardapioDesc:
        "Creation of a restaurant menu with React, TypeScript and Sass.",
      marketplace: "Marketplace Resilience Monitor",
      marketplaceDesc:
        "Dashboard focused on Defensive UX and Chaos Engineering using React and Tailwind. Features API failure simulation, robust error handling, and advanced visual feedback to ensure system reliability.",
      corporate: "Smart Corporate Process Form",
      corporateDesc:
        "BPM Widget simulation for corporate processes. Built with Vanilla JavaScript and REST API integration, featuring financial compliance validations and automated data entry.",
      coffee: "Coffee Delivery",
      coffeeDesc:
        "Full-featured coffee e-commerce with shopping cart and checkout. Built with React, Context API for global state management, styled-components for styling, and form validation with React Hook Form.",
      //ecommerce: "E-Commerce Web App",
      //ecommerceDesc: "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      //chat: "Real-Time Chat App",
      //chatDesc: "Scalable chat platform supporting real-time messaging, presence, and group chat features."
    },
  };
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {texts[language].featured}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Marketplace Resilience Monitor (Featured) */}
            <div className="md:col-span-2 p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_2px_15px_rgba(245,158,11,0.15)] transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-amber-500 text-xs font-bold px-2 py-1 bg-amber-500/10 rounded-full">
                  ● Featured
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {" "}
                {texts[language].marketplace}
              </h3>
              <p className="text-gray-400 mb-5 max-w-3xl">
                {texts[language].marketplaceDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "TypeScript", "Sass", "Next.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 
                                    hover:shadow-[0_2px_8px_rgba(245,158,11,0.2)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://marketplace-resilience-monitor.vercel.app/"
                  className="text-amber-400 font-semibold hover:text-amber-300 transition-colors my-4 flex items-center gap-2"
                >
                  {texts[language].view}
                </a>
              </div>
            </div>

            {/* 2. Corporate Form */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                {texts[language].corporate}
              </h3>
              <p className="text-gray-400 mb-4">
                {texts[language].corporateDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "REST API", "Vanilla JavaScript"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://joritodev.github.io/totvs-corporate-form/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {texts[language].view}
                </a>
              </div>
            </div>

            {/* 3. Coffee Delivery */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                {texts[language].coffee}
              </h3>
              <p className="text-gray-400 mb-4">{texts[language].coffeeDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Context API",
                  "styled-components",
                  "React Hook Form",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://coffee-delivery-joao-montenegro.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {texts[language].view}
                </a>
              </div>
            </div>

            {/* 4. Cardápio */}
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                {texts[language].cardapio}
              </h3>
              <p className="text-gray-400 mb-4">
                {texts[language].cardapioDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Sass"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://product-list-with-cart-zeta-henna.vercel.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {texts[language].view}
                </a>
              </div>
            </div>

            {/* 5. To-do List */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                {texts[language].todo}
              </h3>
              <p className="text-gray-400 mb-4">{texts[language].todoDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Sass", "Next.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://legaplan-test-six.vercel.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {texts[language].view}
                </a>
              </div>
            </div>
            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">{texts[language].ecommerce}</h3>
              <p className="text-gray-400 mb-4">
                {texts[language].ecommerceDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {texts[language].view}
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">{texts[language].chat}</h3>
              <p className="text-gray-400 mb-4">
                {texts[language].chatDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {texts[language].view}
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
