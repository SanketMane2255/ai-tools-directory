import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">AI Tools Hub</h3>
            <p className="text-sm text-muted-foreground">
              Discover and explore the best AI tools for your creative and
              professional needs.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tools"
                  className="text-muted-foreground hover:text-foreground"
                >
                  All Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/top-rated"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Top Rated
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Collections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/free-tools"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Free Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/for-creators"
                  className="text-muted-foreground hover:text-foreground"
                >
                  For Creators
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} AI Tools Hub. Built with Next.js and
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
