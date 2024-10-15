import { defineCollection, z } from "astro:content";

const thoughts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    stack: z.string(),
  }),
});

export const collections = { thoughts, projects };
