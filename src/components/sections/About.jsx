import { RevealOnScroll } from "../RevealOnScroll";
import { useLanguage } from "../LanguageContext";

export const About = () => {
  const { language } = useLanguage();
  const frontendSkills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Sass",
    "Vue",
  ];

  const backendSkills = ["Java", "Python", "MySQL", "Next.js",];

  const texts = {
    pt: {
      aboutMe: "Sobre Mim",
      desc: "Desenvolvedor apaixonado com experiência em construir aplicações web escaláveis e criar soluções inovadoras.",
      frontend: "Frontend",
      backend: "Backend",
      education: "🏫 Educação",
      degree: "Bacharel em Ciência da Computação - Centro Universitário Farias Brito (2023-presente)",
      coursework: "Disciplinas relevantes: Estruturas de Dados, Desenvolvimento Web, Computação em Nuvem, Banco de Dados, Comunicação Empresarial, Cálculo 1,...",
      work: "💼 Experiência Profissional",
      job1: "Desenvolvedor Front End Freelancer (2024 - Presente)",
      job1desc: "Desenvolvimento de aplicações web focando na experiência do usuário e na performance.",
      job2: "Monitor em múltiplas disciplinas da faculdade (2023-2024)",
      job2desc: "Auxílio aos alunos na compreensão e resolução de dúvidas sobre as disciplinas ministradas. Criação de exercícios e resumos para auxiliar na fixação dos conteúdos."
    },
    en: {
      aboutMe: "About Me",
      desc: "Passionate developer with experience in building scalable web applications and creating innovative solutions.",
      frontend: "Frontend",
      backend: "Backend",
      education: "🏫 Education",
      degree: "B.S. in Computer Science - Centro Universitário Farias Brito (2023 - Present)",
      coursework: "Relevant coursework: Data Structures, Web Development, Cloud Computing, Databases, Business Communication, Calculus 1, ...",
      work: "💼 Work Experience",
      job1: "Freelance Front-End Developer (2024 - Present)",
      job1desc: "Development of web applications focusing on user experience and performance.",
      job2: "Teaching Assistant in multiple college subjects (2023 - 2024)",
      job2desc: "Assisted students in understanding and solving doubts about course content. Created exercises and summaries to help reinforce the subjects."
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent text-center">
            {texts[language].aboutMe}
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              {texts[language].desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> {texts[language].frontend}</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-900/30 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-900/50 hover:shadow-[0_2px_8px_rgba(30,58,138,0.4)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> {texts[language].backend}</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-900/30 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-900/50 hover:shadow-[0_2px_8px_rgba(30,58,138,0.4)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> {texts[language].education} </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> {texts[language].degree} </strong>
                </li>
                <li>
                  {texts[language].coursework}
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> {texts[language].work} </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {texts[language].job1}
                  </h4>
                  <p>
                    {texts[language].job1desc}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {texts[language].job2}
                  </h4>
                  <p>
                    {texts[language].job2desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
