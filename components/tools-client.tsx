'use client';

import { useState, useMemo } from 'react';
import { Tool } from '@/types/tool';
import { ToolCard } from '@/components/tool-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import {    
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ToolsClientProps {
  initialTools: Tool[];
}

export function ToolsClient({ initialTools }: ToolsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = useMemo(() => {
    const cats = initialTools.map((tool) => tool.category);
    return ['all', ...Array.from(new Set(cats)).sort()];
  }, [initialTools]);

  const pricingOptions = ['all', 'Free', 'Freemium', 'Paid'];

  const filteredAndSortedTools = useMemo(() => {
    let filtered = initialTools;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.tagline.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    if (selectedPricing !== 'all') {
      filtered = filtered.filter((tool) => tool.pricing === selectedPricing);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [initialTools, searchQuery, selectedCategory, selectedPricing, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedPricing('all');
    setSortBy('name');
  };

  const activeFilters =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedPricing !== 'all' ? 1 : 0) +
    (searchQuery ? 1 : 0);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search tools by name, category, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedPricing} onValueChange={setSelectedPricing}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
              {pricingOptions.map((pricing) => (
                <SelectItem key={pricing} value={pricing}>
                  {pricing === 'all' ? 'All Pricing' : pricing}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="category">Category</SelectItem>
            </SelectContent>
          </Select>

          {activeFilters > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="ml-auto"
            >
              Reset Filters
              {activeFilters > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFilters}
                </Badge>
              )}
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between border-t pt-6">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{filteredAndSortedTools.length}</span> of{' '}
          <span className="font-medium">{initialTools.length}</span> tools
        </p>
      </div>

      {filteredAndSortedTools.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">No tools found</h3>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search or filters to find what you are looking for.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
