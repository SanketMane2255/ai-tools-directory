import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container flex min-h-[600px] flex-col items-center justify-center py-12">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <Search className="h-10 w-10 text-muted-foreground" />
        </div>

        <h1 className="mb-2 text-3xl font-bold">Page Not Found</h1>
        <p className="mb-6 text-muted-foreground">
          Sorry, we could not find the page you are looking for.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tools">
              <Search className="mr-2 h-4 w-4" />
              Browse Tools
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
