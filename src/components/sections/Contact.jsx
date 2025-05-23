import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../LanguageContext";

export const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

    try {
      const serviceId = "service_0t0inn4";
      const templateId = "template_cjefnik";
      const publicKey = "sUcgXKTry16Tu62_C";

      console.log("Tentando enviar email com as seguintes configurações:");
      console.log("Service ID:", serviceId);
      console.log("Template ID:", templateId);
      console.log("Public Key:", publicKey);

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      // Verificar se o formulário está válido
      const form = e.target;
      if (!form.checkValidity()) {
        throw new Error("Formulário inválido");
      }

      // Criar um objeto com os dados do formulário
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "joritodev@gmail.com",
        reply_to: formData.email
      };

      console.log("Dados do formulário:", templateParams);

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        publicKey
      );

      console.log("Resultado do envio:", result);

      if (result.status === 200) {
        alert(texts[language].sent);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("Erro detalhado:", error);
      console.error("Stack trace:", error.stack);
      alert(texts[language].error);
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
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
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
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
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
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
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
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder={texts[language].message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? texts[language].sending : texts[language].send}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
