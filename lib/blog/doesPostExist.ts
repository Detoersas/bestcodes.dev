let cachedSlugs: string[] = [];

try {
  cachedSlugs = require("../../.blog-cache/slugs.json");
} catch (e) {
  // Cache file doesn't exist yet, will use empty array
}

export function doesSlugExist(slug: string): boolean {
  const exists = cachedSlugs.includes(slug);
  return exists;
}
