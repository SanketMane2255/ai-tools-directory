import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllTools, getToolBySlug, getToolsByCategory } from '@/lib/tools';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Star, ArrowLeft } from 'lucide-react';
import { ToolCard } from '@/components/tool-card';

interface ToolPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const tools = getAllTools();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} - AI Tools Hub`,
    description: tool.description,
    openGraph: {
      title: tool.name,
      description: tool.tagline,
      images: [{ url: tool.logo }],
    },
  };
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = getToolsByCategory(tool.category)
    .filter((t) => t.id !== tool.id)
    .slice(0, 3);

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/tools">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tools
        </Link>
      </Button>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="mb-6 flex items-start gap-6">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border bg-muted">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{tool.pricing}</Badge>
                  <Badge variant="outline">{tool.category}</Badge>
                </div>
                <h1 className="mb-2 text-4xl font-bold">{tool.name}</h1>
                <p className="text-xl text-muted-foreground">{tool.tagline}</p>
              </div>
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-semibold">{tool.rating}</span>
                <span className="text-sm text-muted-foreground">/ 5.0</span>
              </div>

              <Button asChild className="gap-2">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold">About {tool.name}</h2>
              <p className="leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-4 font-semibold">Tool Information</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground">Category</dt>
                  <dd className="font-medium">{tool.category}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Pricing</dt>
                  <dd className="font-medium">{tool.pricing}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Rating</dt>
                  <dd className="font-medium">{tool.rating} / 5.0</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Website</dt>
                  <dd>
                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-500 hover:underline"
                    >
                      Visit Site
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-4 font-semibold">Explore Category</h3>
            <Button asChild variant="outline" className="w-full">
              <Link href={`/category/${encodeURIComponent(tool.category)}`}>
                View All {tool.category} Tools
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {relatedTools.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">
            More {tool.category} Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((relatedTool) => (
              <ToolCard key={relatedTool.id} tool={relatedTool} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
