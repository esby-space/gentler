import { defineCollection, z } from "astro:content";

const mechanics = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        section: z.number(),
        chapter: z.number()
    })
});

export const collections = { mechanics };

