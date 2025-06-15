import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Github, Linkedin, Mail, SendHorizonal } from "lucide-react";
import { useLanguage } from "../contexts/language-context";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import emailjs from "@emailjs/browser";

import { media } from "./utils/media";
import { env } from "../env";

export function ContactSection() {
  const { t } = useLanguage();

  const contactFormSchema = z.object({
    name: z.string().min(1, t("contact.error.nameRequired")),
    email: z.string().email(t("contact.error.emailInvalid")),
    message: z.string().min(1, t("contact.error.messageRequired")),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactFormSchema>) {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    const serviceID = env.VITE_SERVICE_ID;
    const templateID = env.VITE_TEMPLATE_ID;
    const publicKey = env.VITE_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log(
          "E-mail enviado com sucesso!",
          response.status,
          response.text
        );
        alert("Mensagem enviada com sucesso!");
        form.reset();
      })
      .catch((err) => {
        console.error("ERRO AO ENVIAR E-MAIL:", err);
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      });
  }

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
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="gap-1">
                          {t("contact.form.name")}
                          <span className="text-brand-purple">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="gap-1">
                          {t("contact.form.email")}
                          <span className="text-brand-purple">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: johndoe@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="gap-1">
                          {t("contact.form.message")}
                          <span className="text-brand-purple">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ex: Let's work together."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#6900FF] hover:bg-[#5500CC] text-white"
                  >
                    {t("contact.form.send")}
                    <SendHorizonal />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold font-heading mb-4">
                {t("contact.media.title")}
              </h3>
              <div className="flex justify-center space-x-6">
                <a
                  href={media.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#6900FF]/10 hover:bg-[#6900FF]/20 transition-colors"
                >
                  <Github className="w-6 h-6 text-[#6900FF]" />
                </a>
                <a
                  href={media.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#6900FF]/10 hover:bg-[#6900FF]/20 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-[#6900FF]" />
                </a>
                <a
                  href={`mailto:${media.email}`}
                  className="p-3 rounded-full bg-[#6900FF]/10 hover:bg-[#6900FF]/20 transition-colors"
                >
                  <Mail className="w-6 h-6 text-[#6900FF]" />
                </a>
              </div>
            </div>

            <div className="text-center text-muted-foreground">
              <p>{t("contact.media.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
