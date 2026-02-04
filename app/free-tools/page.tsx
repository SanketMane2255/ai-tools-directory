import { Metadata } from 'next';
import Link from 'next/link';
import { getAllTools } from '@/lib/tools';
import { ToolCard } from '@/components/tool-card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free AI Tools - AI Tools Hub',
  description: 'Discover completely free AI tools with no cost. Start using AI without any investment.',
};

export default function FreeToolsPage() {
  const freeTools = getAllTools().filter((tool) => tool.pricing === 'Free');
  const freemiumTools = getAllTools().filter(
    (tool) => tool.pricing === 'Freemium'
  );

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
          <Gift className="h-4 w-4 text-green-500" />
          <span className="text-muted-foreground">100% Free</span>
        </div>

        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          Free AI Tools
        </h1>
        <p className="text-lg text-muted-foreground">
          Get started with AI at no cost. {freeTools.length} completely free
          tools available.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Completely Free</h2>
        {freeTools.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {freeTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            Check back soon for completely free tools.
          </p>
        )}
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-bold">Free to Start (Freemium)</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {freemiumTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
