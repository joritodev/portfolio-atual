import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../LanguageContext";

export const Projects = () => {
  const { language } = useLanguage();
  const texts = {
    pt: {
      featured: "Projetos em Destaque",
      todo: "Lista de Tarefas",
      todoDesc: "Desenvolvimento de uma aplicação web para gerenciamento de tarefas utilizando React.js e Next.js. Implementei funcionalidades de adição, conclusão e exclusão de tarefas com interface responsiva.",
      view: "Ver Projeto →",
      cardapio: "Cardápio de Restaurante",
      cardapioDesc: "Projeto de listagem de produtos com carrinho de compras responsivo, desenvolvido em React. Permite visualizar produtos, adicionar/remover itens ao carrinho e calcular o valor total, com layout adaptável para desktop e mobile.",
      //ecommerce: "Aplicação Web de E-Commerce",
      //ecommerceDesc: "E-commerce full-stack com UI moderna, integração de pagamentos segura e inventário personalizável.",
      //chat: "App de Chat em Tempo Real",
      //chatDesc: "Plataforma de chat escalável com mensagens em tempo real, presença e grupos."
    },
    en: {
      featured: "Featured Projects",
      todo: "To-Do List",
      todoDesc: "Creation of a to-do list with React, TypeScript, Sass and Next.js.",
      view: "View Project →",
      cardapio: "Restaurant Menu",
      cardapioDesc: "Creation of a restaurant menu with React, TypeScript and Sass.",
      //ecommerce: "E-Commerce Web App",
      //ecommerceDesc: "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      //chat: "Real-Time Chat App",
      //chatDesc: "Scalable chat platform supporting real-time messaging, presence, and group chat features."
    }
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
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> {texts[language].todo}</h3>
              <p className="text-gray-400 mb-4">
                {texts[language].todoDesc}
              </p>
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

              <div className="flex justify-between items-center">
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
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">{texts[language].cardapio}</h3>
              <p className="text-gray-400 mb-4">
                {texts[language].cardapioDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Sass",].map((tech, key) => (
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
              <div className="flex justify-between items-center">
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
