import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { marked } from 'marked';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  try {
    const posts = await getCollection('blog'); // Ensure you're getting the blog collection

    // Initialize a record to store parsed content
    const postsContent = {} as Record<string, string>;

    // Parse each post's content using 'marked'
    for (const post of posts) {
      postsContent[post.id] = await marked.parse(post?.body || '');
    }

    // Map posts data to feed items
    const items = posts.map((post) => ({
      title: post.data.title || 'Untitled', // Ensure a fallback for missing title
      pubDate: post.data.pubDate || new Date(), // Ensure pubDate is valid
      link: `/blog/${post.id}/`, // Generate link using the post slug
      author: post.data.author.name, // Set the author name as a string
      description: post.data.description || post?.body?.slice(0, 200) || '', // Fallback to a slice of body if description is missing
      content: postsContent[post.id] || '', // Use the parsed content for the feed
      categories: post.data.tags || [], // Use tags as categories, fallback to empty array
    }));

    return rss({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      items: items,
      site: 'https://ahmadov.tech', // Your site URL
      customData: `<language>en-us</language>`, // Optional custom data for language
    });
  } catch (error) {
    // Log the error and rethrow it
    console.error('RSS Generation Error:', error);
    throw error;
  }
}
