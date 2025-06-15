import { z } from "zod";

const envSchema = z.object({
  VITE_SERVICE_ID: z.string(),
  VITE_PUBLIC_KEY: z.string(),
  VITE_TEMPLATE_ID: z.string(),
});

export const env = envSchema.parse(import.meta.env);
