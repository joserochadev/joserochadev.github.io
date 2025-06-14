import { LanguageProvider } from "./contexts/language-context";
import { ThemeProvider } from "./contexts/theme-context";
import { AboutSection } from "./pages/about-section";
import { ContactSection } from "./pages/contact-section";
import { Footer } from "./pages/footer";
import { Header } from "./pages/header";
import { HeroSection } from "./pages/hero-section";
import { ProjectsSection } from "./pages/projects-section";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
