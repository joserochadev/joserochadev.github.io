import { FolderCode } from "lucide-react";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/language-context";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiRust,
} from "react-icons/si";

const techIcons = [
  {
    Icon: SiReact,
    style: { top: "15%", left: "10%", fontSize: "4rem" },
    duration: "5s",
  },
  {
    Icon: SiNodedotjs,
    style: { top: "30%", left: "85%", fontSize: "5rem" },
    duration: "7s",
  },
  {
    Icon: SiTypescript,
    style: { top: "70%", left: "15%", fontSize: "3rem" },
    duration: "6s",
  },
  {
    Icon: SiTailwindcss,
    style: { top: "80%", left: "80%", fontSize: "4.5rem" },
    duration: "8s",
  },
  {
    Icon: SiVite,
    style: { top: "10%", left: "50%", fontSize: "3.5rem" },
    duration: "5.5s",
  },
  {
    Icon: SiMongodb,
    style: { top: "50%", left: "40%", fontSize: "4rem" },
    duration: "7.5s",
  },
  {
    Icon: SiRust,
    style: { top: "55%", left: "70%", fontSize: "3.2rem" },
    duration: "6.5s",
  },
];

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="absolute inset-0 z-0">
        {techIcons.map(({ Icon, style, duration }, index) => (
          <span
            key={index}
            className="absolute text-[#6900FF]/20 dark:text-foreground/10"
            style={{
              ...style,
              animation: `float ${duration} ease-in-out infinite`,
            }}
          >
            <Icon />
          </span>
        ))}
      </div>

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="font-heading bg-gradient-to-r from-[#6900FF] to-[#8A2BE2] bg-clip-text text-transparent">
            {t("hero.title")}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <Button
          onClick={scrollToProjects}
          size="lg"
          className="bg-[#6900FF] hover:bg-[#5500CC] text-white px-8 py-3 text-lg"
        >
          <FolderCode />
          {t("hero.cta")}
        </Button>
      </div>
    </section>
  );
}
