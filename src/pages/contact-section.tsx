import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../contexts/language-context";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          {t("contact.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-0 bg-background/60 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-[#6900FF]">
                {t("contact.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t("contact.name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#6900FF] hover:bg-[#5500CC] text-white"
                >
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold font-heading mb-4">
                Conecte-se comigo
              </h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#6900FF]/10 hover:bg-[#6900FF]/20 transition-colors"
                >
                  <Github className="w-6 h-6 text-[#6900FF]" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#6900FF]/10 hover:bg-[#6900FF]/20 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-[#6900FF]" />
                </a>
                <a
                  href="mailto:jose@example.com"
                  className="p-3 rounded-full bg-[#6900FF]/10 hover:bg-[#6900FF]/20 transition-colors"
                >
                  <Mail className="w-6 h-6 text-[#6900FF]" />
                </a>
              </div>
            </div>

            <div className="text-center text-muted-foreground">
              <p>Vamos trabalhar juntos para criar algo incrível!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
