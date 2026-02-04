import { Metadata } from 'next';
import { ToolsClient } from '@/components/tools-client';
import { getAllTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'All AI Tools - AI Tools Hub',
  description: 'Browse our complete collection of AI tools for content creation, productivity, design, and development.',
};

export default function ToolsPage() {
  const tools = getAllTools();

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          All AI Tools
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore our complete collection of {tools.length} AI tools. Search, filter, and find the perfect solution for your needs.
        </p>
      </div>

      <ToolsClient initialTools={tools} />
    </div>
  );
}
