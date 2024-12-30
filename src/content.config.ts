import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const authorInfo = {
    name: "Abdulrahim Ahmadov",
    avatar: "/images/author.jpg",
    role: "Backend Developer",
    bio: "Building robust backend solutions and scalable architectures",
    social: {
        github: "https://github.com/ebdurrehm",
        linkedin: "https://linkedin.com/in/abdurrahim-ahmadov",
    }
};

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()),
        author: z.object({
            name: z.string().default(authorInfo.name),
            avatar: z.string().default(authorInfo.avatar),
            role: z.string().default(authorInfo.role),
            bio: z.string().default(authorInfo.bio),
            social: z.object({
                github: z.string().default(authorInfo.social.github),
                linkedin: z.string().default(authorInfo.social.linkedin),
            }).default(authorInfo.social),
        }).default(authorInfo),
    }),
});

export const collections = { blog };
export { authorInfo };
