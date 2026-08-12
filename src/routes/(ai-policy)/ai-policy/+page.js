/** @import { ComponentType, SvelteComponent } from 'svelte' */

/**
 * @typedef {{ metadata: unknown; default: ComponentType<SvelteComponent<any, any, any>> }} MarkdownPost
 */

/**
 * Load a markdown post
 * @returns {Promise<MarkdownPost>} - The post content and metadata
 */
const loadMarkdownPost = async () => {
  const modules = /** @type {Record<string, () => Promise<MarkdownPost>>} */ (
    import.meta.glob('./content.md')
  );
  const module = modules['./content.md'];
  if (!module) {
    throw new Error('Module not found');
  }
  return await module();
};

/**
 * @type {import('@sveltejs/kit').Load}
 */
export const load = async () => {
  try {
    const post = await loadMarkdownPost();
    const metadata = post.metadata ?? {};
    const component = post.default;
    return {
      metadata,
      component
    };
  } catch (ex) {
    console.log('error', ex);
  }
};
