import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllCategories, getToolsByCategory } from '@/lib/tools';
import { ToolCard } from '@/components/tool-card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = params.slug;

  return {
    title: `${category} AI Tools - AI Tools Hub`,
    description: `Discover the best ${category} AI tools. Browse our curated selection of AI-powered solutions.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.slug;
  const tools = getToolsByCategory(category);

  if (tools.length === 0) {
    notFound();
  }

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/categories">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Categories
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          {category} Tools
        </h1>
        <p className="text-lg text-muted-foreground">
          {tools.length} AI {tools.length === 1 ? 'tool' : 'tools'} in the{' '}
          {category} category
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
