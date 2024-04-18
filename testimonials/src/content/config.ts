import { defineCollection, z } from 'astro:content';

const testimonialsCollection = defineCollection({
    type: 'data', 
    schema: ({image})=>z.object({
        id: z.number(),
        author: z.string(),
        graduateType: z.string(),
        imageUrl: image(),
        opinion: z.string(),
        citation: z.string(),
    }),
});

export const collections = {
    'testimonials' : testimonialsCollection,
};