import Link from 'next/link';
import Image from 'next/image';
import { Tool } from '@/types/tool';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <Card className="group h-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader>
          <div className="mb-4 flex items-start justify-between">
            <div className="relative h-16 w-16 overflow-hidden rounded-lg border bg-muted">
              <Image
                src={tool.logo}
                alt={tool.name}
                fill
                className="object-cover"
              />
            </div>
            <Badge variant="secondary" className="text-xs">
              {tool.pricing}
            </Badge>
          </div>

          <CardTitle className="group-hover:text-primary transition-colors">
            {tool.name}
          </CardTitle>
          <CardDescription>{tool.tagline}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {tool.category}
              </Badge>
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{tool.rating}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
