import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
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

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center backdrop-blur-md"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Close Menu"
          >
            &times;
          </button>

          <motion.a
            variants={itemVariants}
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white my-4 transition-colors hover:text-gray-300"
          >
            {texts[language].home}
          </motion.a>
          
          <motion.a
            variants={itemVariants}
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white my-4 transition-colors hover:text-gray-300"
          >
            {texts[language].about}
          </motion.a>
          
          <motion.a
            variants={itemVariants}
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white my-4 transition-colors hover:text-gray-300"
          >
            {texts[language].projects}
          </motion.a>
          
          <motion.a
            variants={itemVariants}
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white my-4 transition-colors hover:text-gray-300"
          >
            {texts[language].contact}
          </motion.a>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="mt-6 px-6 py-2 rounded-md border border-white/20 bg-transparent text-white font-semibold shadow hover:bg-white/10 transition-all focus:outline-none text-2xl"
          >
            {texts[language].lang}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
