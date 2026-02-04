import { Metadata } from 'next';
import Link from 'next/link';
import { getAllCategories, getToolsByCategory } from '@/lib/tools';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Categories - AI Tools Hub',
  description: 'Browse AI tools by category. Find tools for content creation, productivity, design, development, and more.',
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  const categoryData = categories.map((category) => ({
    name: category,
    tools: getToolsByCategory(category),
    count: getToolsByCategory(category).length,
  }));

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          Browse by Category
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore AI tools organized by their primary use case and category.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryData.map((category) => (
          <Link
            key={category.name}
            href={`/category/${encodeURIComponent(category.name)}`}
          >
            <Card className="group h-full transition-all hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </div>
                <CardDescription>
                  {category.count} {category.count === 1 ? 'tool' : 'tools'} available
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.tools.slice(0, 3).map((tool) => (
                    <Badge key={tool.id} variant="secondary" className="text-xs">
                      {tool.name}
                    </Badge>
                  ))}
                  {category.count > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{category.count - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
