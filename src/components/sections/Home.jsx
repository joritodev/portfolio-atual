import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../LanguageContext";

export const Home = () => {
  const { language } = useLanguage();
  const texts = {
    pt: {
      title: "Olá, eu sou João Montenegro",
      desc: "Sou um desenvolvedor full-stack apaixonado por criar aplicações web limpas e escaláveis. Meu objetivo é construir soluções que ofereçam desempenho excepcional e uma experiência de usuário incrível.",
      projects: "Ver Projetos",
      contact: "Contato"
    },
    en: {
      title: "Hi, I'm João Montenegro",
      desc: "I'm a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.",
      projects: "View Projects",
      contact: "Contact Me"
    }
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            {texts[language].title}
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            {texts[language].desc}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              {texts[language].projects}
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              {texts[language].contact}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
