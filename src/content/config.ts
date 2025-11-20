// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default('Me'),
    image: z.string().optional(), // 封面图
    tags: z.array(z.string()),    // 标签
    category: z.string(),         // 分类
  }),
});

export const collections = {
  'blog': blogCollection,
};