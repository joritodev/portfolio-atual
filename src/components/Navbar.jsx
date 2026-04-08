import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";

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
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            joao<span className="text-gray-400">.montenegro</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            role="button"
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {texts[language].home}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {texts[language].about}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {texts[language].projects}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {texts[language].contact}
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="ml-4 px-4 py-2 rounded-md border border-white/20 bg-transparent text-white font-semibold shadow hover:bg-white/10 transition-all focus:outline-none"
            >
              {texts[language].lang}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
