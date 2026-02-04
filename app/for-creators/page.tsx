import { Metadata } from 'next';
import Link from 'next/link';
import { getAllTools } from '@/lib/tools';
import { ToolCard } from '@/components/tool-card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best AI Tools for Content Creators - AI Tools Hub',
  description: 'Discover the best AI tools for content creators including image generation, video editing, and content creation tools.',
};

export default function ForCreatorsPage() {
  const creatorCategories = [
    'Image Generation',
    'Video Generation',
    'Content Creation',
    'Audio Generation',
    'Design',
  ];

  const tools = getAllTools().filter((tool) =>
    creatorCategories.includes(tool.category)
  );

  const byCategory = creatorCategories.map((category) => ({
    name: category,
    tools: tools.filter((tool) => tool.category === category),
  })).filter((cat) => cat.tools.length > 0);

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/tools">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tools
        </Link>
      </Button>

      <div className="mb-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">
          <Palette className="h-4 w-4 text-violet-500" />
          <span className="text-muted-foreground">For Creators</span>
        </div>

        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          Best AI Tools for Content Creators
        </h1>
        <p className="text-lg text-muted-foreground">
          Supercharge your creative workflow with {tools.length} AI-powered
          tools for images, videos, audio, and more.
        </p>
      </div>

      <div className="space-y-12">
        {byCategory.map((category) => (
          <div key={category.name}>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <Button asChild variant="ghost" size="sm">
                <Link href={`/category/${encodeURIComponent(category.name)}`}>
                  View All
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
