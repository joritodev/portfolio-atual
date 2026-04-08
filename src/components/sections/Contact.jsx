import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

export const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(/** @type {{ type: 'success' | 'error', message: string } | null} */ (null));

  const texts = {
    pt: {
      title: "Entre em Contato",
      name: "Nome...",
      email: "exemplo@gmail.com",
      message: "Sua Mensagem...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      sent: "Mensagem enviada!",
      error: "Ops! Algo deu errado. Por favor, tente novamente."
    },
    en: {
      title: "Get In Touch",
      name: "Name...",
      email: "example@gmail.com",
      message: "Your Message...",
      send: "Send Message",
      sending: "Sending...",
      sent: "Message Sent!",
      error: "Oops! Something went wrong. Please try again."
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const serviceId = "service_0t0inn4";
      const templateId = "template_cjefnik";
      const publicKey = "sUcgXKTry16Tu62_C";

      const form = e.target;
      if (!form.checkValidity()) {
        throw new Error("Invalid form");
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        publicKey
      );

      if (result.status === 200) {
        setStatus({ type: "success", message: texts[language].sent });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Email sending failed");
      }
    } catch {
      setStatus({ type: "error", message: texts[language].error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent text-center">
            {texts[language].title}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-800 focus:bg-blue-900/10"
                placeholder={texts[language].name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-800 focus:bg-blue-900/10"
                placeholder={texts[language].email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                disabled={isLoading}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-800 focus:bg-blue-900/10"
                placeholder={texts[language].message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                disabled={isLoading}
              />
            </div>

            {status && (
              <div
                role="alert"
                className={`px-4 py-3 rounded text-sm font-medium transition-all ${
                  status.type === "success"
                    ? "bg-green-500/10 border border-green-500/30 text-green-400"
                    : "bg-red-500/10 border border-red-500/30 text-red-400"
                }`}
              >
                {status.message}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-900 text-blue-50 border border-blue-700 py-3 px-6 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(30,58,138,0.2)] hover:shadow-[0_0_30px_rgba(30,58,138,0.4)] hover:bg-blue-800 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? texts[language].sending : texts[language].send}
            </motion.button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
