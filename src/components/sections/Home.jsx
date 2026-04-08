import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <motion.div 
        className="text-center z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent leading-tight"
        >
          {texts[language].title}
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-lg mb-8 max-w-lg mx-auto"
        >
          {texts[language].desc}
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex justify-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="bg-blue-900 text-blue-50 border border-blue-700 py-3 px-6 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(30,58,138,0.2)] hover:shadow-[0_0_30px_rgba(30,58,138,0.4)] hover:bg-blue-800"
          >
            {texts[language].projects}
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="border border-blue-800 bg-transparent text-blue-200 py-3 px-6 rounded-lg font-semibold transition-all hover:bg-blue-900/30"
          >
            {texts[language].contact}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
