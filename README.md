This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# AI Tools Hub

A modern, polished content directory website showcasing the best AI tools for content creation, productivity, design, and development. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Live Demo

- **Live URL**: [To be deployed on Vercel]
- **Repository**: [GitHub Link]

## Dataset

### Source
The dataset is a curated collection of 24 AI tools compiled from:
- Product Hunt
- There's an AI for That
- Manual research of popular AI tools

### Data Structure
Each tool includes:
- Name, tagline, and description
- Category (Conversational AI, Image Generation, Video Generation, etc.)
- Pricing model (Free, Freemium, Paid)
- Website URL and logo
- Rating (1-5)
- Tags for better discoverability
- Featured status

### Data Generation
The dataset was created by:
1. Researching popular AI tools from various sources
2. Categorizing tools by primary use case
3. Adding relevant metadata (pricing, ratings, tags)
4. Using Pexels stock photos for tool logos
5. Storing data in a static JSON file (`data/tools.json`)

## Tech Stack

### Core Technologies
- **Next.js 14** - App Router with React Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon set

### Features Implemented
- Static Site Generation (SSG) with ISR capabilities
- Dynamic routing for tools and categories
- SEO optimization (metadata, sitemap, robots.txt)
- Dark mode support with next-themes
- Responsive design for all screen sizes
- Search and filtering functionality
- Related content recommendations

## Design Inspiration

The design draws inspiration from:
1. **theresanaiforthat.com** - Clean directory layout
2. **Dribbble** - Modern card designs and gradients
3. **Linear** - Minimalist navigation and typography

### Design Principles
- Clean, spacious layouts with generous whitespace
- Blue-to-cyan gradient accents (avoiding purple)
- Card-based UI for tool listings
- Smooth transitions and hover effects
- Professional typography hierarchy
- Accessible color contrast ratios

## Project Structure

```
├── app/
│   ├── category/[slug]/    # Category detail pages
│   ├── pricing/[type]/     # Pricing filter pages
│   ├── tools/
│   │   ├── [slug]/         # Individual tool pages
│   │   └── page.tsx        # All tools listing
│   ├── categories/         # Categories overview
│   ├── layout.tsx          # Root layout with nav/footer
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots.txt
├── components/
│   ├── ui/                 # shadcn components
│   ├── footer.tsx          # Site footer
│   ├── navigation.tsx      # Header navigation
│   ├── theme-provider.tsx  # Dark mode provider
│   ├── tool-card.tsx       # Tool display card
│   └── tools-client.tsx    # Client-side filtering
├── data/
│   └── tools.json          # Static dataset
├── lib/
│   ├── tools.ts            # Data fetching utilities
│   └── utils.ts            # Helper functions
└── types/
    └── tool.ts             # TypeScript interfaces
```

## AI Tools Used

### 1. Code Generation
**Prompt**: "Create a Next.js App Router project structure for an AI tools directory with TypeScript, including routes for home, tools listing, individual tool pages, and category pages."

**Result**: Generated the complete file structure and routing setup.

### 2. Data Creation
**Prompt**: "Generate a JSON dataset of 24 popular AI tools with fields: id, name, slug, tagline, description, category, pricing, website, logo, featured status, rating, and tags. Include tools like ChatGPT, Midjourney, GitHub Copilot, etc."

**Result**: Created the comprehensive `tools.json` dataset.

### 3. Component Design
**Prompt**: "Create a modern ToolCard component with Tailwind CSS that displays tool logo, name, tagline, category badge, pricing badge, and rating. Use smooth hover effects and professional spacing."

**Result**: Built polished, reusable UI components.

### 4. SEO Optimization
**Prompt**: "Generate a Next.js sitemap.ts file that includes all tools, categories, and pricing pages with appropriate priorities and change frequencies."

**Result**: Complete SEO setup with sitemap and robots.txt.

## Features

### 1. Home Page
- Hero section with gradient accents
- Featured tools showcase
- Category badges for quick navigation
- Feature highlights section

### 2. Tools Listing Page
- Search functionality across all tool attributes
- Filter by category and pricing
- Sort by name, rating, or category
- Real-time results counter
- Reset filters option

### 3. Tool Detail Pages
- Comprehensive tool information
- Related tools recommendations
- Quick access to category pages
- External website link

### 4. Category Pages
- Overview of all categories with tool counts
- Category-specific tool listings
- Easy navigation between categories

### 5. Pricing Filter Pages
- Browse tools by pricing model (Free, Freemium, Paid)
- Dedicated pages for each pricing type

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

Visit `http://localhost:3000` to view the site.

## Deployment

The site is optimized for Vercel deployment:

1. Push code to GitHub
2. Import repository in Vercel
3. Vercel automatically detects Next.js and deploys
4. Static pages are pre-rendered at build time
5. ISR can be configured for dynamic updates

## What I Would Improve with 2 More Days

### Performance Enhancements
1. **Image Optimization**: Replace Pexels URLs with optimized Next.js Image components using local images
2. **Loading States**: Add skeleton loaders for better perceived performance
3. **Pagination**: Implement pagination or infinite scroll for large tool lists
4. **Search Optimization**: Add debouncing to search input for better performance

### Features
1. **Tool Comparison**: Side-by-side comparison of multiple tools
2. **User Reviews**: Community ratings and reviews system
3. **Bookmarking**: Save favorite tools for later
4. **Advanced Filters**: Multiple tag selection, price range filters
5. **Tool Suggestions**: AI-powered tool recommendations based on use case

### Content
1. **More Tools**: Expand dataset to 100+ tools
2. **Rich Content**: Add tutorial videos, use case examples, pricing details
3. **Blog Section**: Articles about AI trends and tool comparisons
4. **Newsletter**: Subscribe feature for new tool updates

### SEO & Analytics
1. **Schema Markup**: Add structured data for better search visibility
2. **Analytics**: Integrate Vercel Analytics or Google Analytics
3. **Open Graph**: Enhanced social media preview cards
4. **Performance Monitoring**: Add Web Vitals tracking

### Developer Experience
1. **Testing**: Add unit and E2E tests with Jest and Playwright
2. **Storybook**: Component documentation and visual testing
3. **CI/CD**: Automated testing and deployment pipelines
4. **CMS Integration**: Connect to headless CMS for easier content management

## License

MIT

## Contact

Built as an assessment project demonstrating Next.js, TypeScript, and modern web development practices.

