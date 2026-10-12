import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    // Gradient pair for the card art; any CSS colors.
    colors: z.tuple([z.string(), z.string()]),
    // Screenshot shown on the card; path relative to the .md file.
    cover: image().optional(),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
  }),
});

export const collections = { blog, projects };
