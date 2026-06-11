import { defineCollection, z } from 'astro:content';

const toursCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    location: z.string(),
    difficulty: z.enum(['Ușor', 'Moderat', 'Dificil', 'Foarte dificil']),
    duration: z.string(),
    distance: z.string(),
    elevationGain: z.string(),
    groupSize: z.string(),
    season: z.array(z.string()),
    status: z.enum(['disponibil', 'sold-out', 'pe-cerere']),
    description: z.string(),
    equipment: z.array(z.string()),
    image: z.string(),
  }),
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    category: z.string(),
    excerpt: z.string(),
    publishedAt: z.date(),
    readingTime: z.number(),
    image: z.string(),
  }),
});

export const collections = {
  tours: toursCollection,
  articles: articlesCollection,
};
