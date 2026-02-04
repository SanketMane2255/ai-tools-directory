import toolsData from '@/data/tools.json';
import { Tool } from '@/types/tool';

export function getAllTools(): Tool[] {
  return toolsData as Tool[];
}

export function getToolBySlug(slug: string): Tool | undefined {
  return getAllTools().find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: string): Tool[] {
  return getAllTools().filter((tool) => tool.category === category);
}

export function getToolsByPricing(pricing: string): Tool[] {
  return getAllTools().filter((tool) => tool.pricing === pricing);
}

export function getFeaturedTools(): Tool[] {
  return getAllTools().filter((tool) => tool.featured);
}

export function getAllCategories(): string[] {
  const categories = getAllTools().map((tool) => tool.category);
  return Array.from(new Set(categories)).sort();
}

export function getAllPricingTypes(): string[] {
  const pricingTypes = getAllTools().map((tool) => tool.pricing);
  return Array.from(new Set(pricingTypes)).sort();
}

export function searchTools(query: string): Tool[] {
  const lowerQuery = query.toLowerCase();
  return getAllTools().filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.tagline.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.category.toLowerCase().includes(lowerQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
