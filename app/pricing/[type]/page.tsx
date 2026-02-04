import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPricingTypes, getToolsByPricing } from '@/lib/tools';
import { ToolCard } from '@/components/tool-card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface PricingPageProps {
  params: {
    type: string;
  };
}

export async function generateStaticParams() {
  const pricingTypes = getAllPricingTypes();
  return pricingTypes.map((type) => ({
    type: type.toLowerCase(),
  }));
}

export async function generateMetadata({
  params,
}: PricingPageProps): Promise<Metadata> {
  const pricingType = params.type.charAt(0).toUpperCase() + params.type.slice(1);

  return {
    title: `${pricingType} AI Tools - AI Tools Hub`,
    description: `Discover ${pricingType.toLowerCase()} AI tools. Browse our curated selection of accessible AI solutions.`,
  };
}

export default function PricingPage({ params }: PricingPageProps) {
  const pricingType = params.type.charAt(0).toUpperCase() + params.type.slice(1);
  const tools = getToolsByPricing(pricingType);

  if (tools.length === 0) {
    notFound();
  }

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/tools">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tools
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          {pricingType} AI Tools
        </h1>
        <p className="text-lg text-muted-foreground">
          {tools.length} {pricingType.toLowerCase()} AI{' '}
          {tools.length === 1 ? 'tool' : 'tools'} available
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
