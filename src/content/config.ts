import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    publisher: z.string().optional(),
    volume: z.string().optional(),
    pages: z.string().optional(),
    year: z.number(),
    doi: z.string().url(),
    bibtex: z.string(),
    abstract: z.string(),
    pdfUrl: z.string().optional(),
    order: z.number().default(1),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    year: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    publicationUrl: z.string().url().optional(),
    order: z.number().default(1),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    isCurrent: z.boolean().default(false),
    bullets: z.array(z.string()),
    tags: z.array(z.string()),
    order: z.number().default(1),
  }),
});

const certifications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    provider: z.string(),
    year: z.string(),
    verifyUrl: z.string().optional(),
    order: z.number().default(1),
  }),
});

// Structured so a blog collection (e.g. blog: defineCollection({...}))
// can be added directly here in Phase 2 without refactoring.
export const collections = {
  publications,
  projects,
  experience,
  certifications,
};
