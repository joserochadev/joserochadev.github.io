import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../contexts/language-context";
import { media } from "./utils/media";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">{t("footer.rights")}</p>

          <div className="flex space-x-4">
            <a
              href={media.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#6900FF] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={media.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#6900FF] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${media.email}`}
              className="text-muted-foreground hover:text-[#6900FF] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
