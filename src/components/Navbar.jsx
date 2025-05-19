import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { language, toggleLanguage } = useLanguage();
  const texts = {
    pt: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      lang: "EN",
    },
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      lang: "PT",
    },
  };
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            joao<span className="text-blue-500">.montenegro</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {texts[language].home}
            </a>
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {texts[language].about}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {texts[language].projects}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {texts[language].contact}
            </a>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold shadow hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 focus:outline-none"
            >
              {texts[language].lang}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
