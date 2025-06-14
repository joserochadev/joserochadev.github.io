import { Badge } from "../components/ui/badge";
import { useLanguage } from "../contexts/language-context";

export function AboutSection() {
  const { t } = useLanguage();

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          {t("about.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#6900FF] to-[#8A2BE2] p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <img
                  src="https://avatars.githubusercontent.com/u/92328683?v=4"
                  alt="José Rocha"
                  className="w-60 h-60 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("about.description")}
            </p>

            <div>
              <h3 className="text-xl font-semibold font-heading mb-4 text-[#6900FF]">
                {t("about.skills")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-[#6900FF]/10 text-[#6900FF] hover:bg-[#6900FF]/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
