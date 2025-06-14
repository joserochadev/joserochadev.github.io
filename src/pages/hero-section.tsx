import { FolderCode } from "lucide-react";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background to-background/80">
      <div className="container mx-auto text-center max-w-4xl">
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
