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

const experience = defineCollection({
  schema: z.object({
    company: z.string(),
    "company-link": z.string().url(),
    title: z.string(),
    stack: z.string(),
    location: z.string(),
    "start-date": z.string().or(z.date()),
    "end-date": z.string().or(z.date()),
  }),
});

export const collections = { thoughts, projects, experience };
