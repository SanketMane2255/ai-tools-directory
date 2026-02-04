import { Metadata } from 'next';
import Link from 'next/link';
import { getAllTools } from '@/lib/tools';
import { ToolCard } from '@/components/tool-card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top Rated AI Tools - AI Tools Hub',
  description: 'Discover the highest rated AI tools based on user reviews and ratings.',
};

export default function TopRatedPage() {
  const tools = getAllTools()
    .filter((tool) => tool.rating >= 4.6)
    .sort((a, b) => b.rating - a.rating);

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/tools">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tools
        </Link>
      </Button>

      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">
          <TrendingUp className="h-4 w-4 text-blue-500" />
          <span className="text-muted-foreground">Rating 4.6+</span>
        </div>

        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          Top Rated AI Tools
        </h1>
        <p className="text-lg text-muted-foreground">
          {tools.length} premium AI tools with ratings of 4.6 stars or higher,
          trusted by professionals worldwide.
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
