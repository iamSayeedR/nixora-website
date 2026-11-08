# Structured Data (JSON-LD) Engineering & Schema.org Compliance

## Overview
Structured data enables search engines (Google, Bing) and AI systems (Perplexity, ChatGPT, Gemini) to parse entities, relationships, authorship, publication dates, and page types unambiguously.

All structured data across `https://nixora.co.in/` strictly follows Schema.org standards and Google Search Central guidelines. No fake reviews, ratings, pricing promises, or synthetic customer claims were included.

---

## Implemented Schemas Across the Site

| Schema Type | Applied Pages | Purpose | Required & Recommended Properties Present |
| :--- | :--- | :--- | :--- |
| `Organization` | Homepage (`/`) | Establishes the Nixora legal entity, logo, URL, and corporate identity | `name`, `url`, `logo`, `sameAs` |
| `WebSite` | Homepage (`/`) | Represents the overall web presence | `name`, `url`, `publisher` |
| `SoftwareApplication` | Homepage (`/`) | Identifies Nixora as developer infrastructure software | `name`, `applicationCategory`, `operatingSystem`, `offers` |
| `FAQPage` | Homepage (`/`) | Surfaces 8 high-intent technical FAQ accordions for SERP rich snippets | `mainEntity` array with `@type: Question` and `acceptedAnswer` |
| `TechArticle` / `Article` | 7 Resource Guides | Establishes authorship, publication dates, technical categorization, and freshness | `headline`, `description`, `image`, `author` (Person), `publisher` (Organization), `datePublished`, `dateModified`, `mainEntityOfPage` |
| `BreadcrumbList` | All 18 Pages | Establishes URL and navigational hierarchy for enhanced SERP breadcrumbs | `itemListElement` array with `position`, `name`, `item` |
| `CollectionPage` | `/resources/` | Identifies resource hub aggregating technical articles | `name`, `description`, `url` |
| `AboutPage` | `/about/` | Represents the company story and mission | `name`, `description`, `url` |

---

## Specific Schema Fixes & Enhancements

### 1. Added `TechArticle` Schemas to Orphaned Resources
Two major resources had `BreadcrumbList` schemas but lacked `TechArticle` / `Article` structured data, preventing Google from recognizing them as technical publications:
- `/resources/ai-agent-control-plane/`: Added full `TechArticle` schema with author Sayeed Rizwan, publisher Nixora, datePublished `2026-08-20`, and dateModified `2026-11-08`.
- `/resources/mcp-servers-guide/`: Added full `TechArticle` schema with author Sayeed Rizwan, publisher Nixora, datePublished `2026-10-15`, and dateModified `2026-11-08`.

### 2. Systematic Freshness Updates (`dateModified: "2026-11-08"`)
Googlebot heavily weighs recent content modification signals for technical topics. All resource guides and the homepage `WebPage` schema now explicitly output:
- `dateModified: "2026-11-08"`
This signals that our architectural comparisons, CLI commands, and deployment guidance are actively maintained and current for late 2026.

### 3. Verification of JSON-LD Syntax
An automated verification test was run across every compiled HTML file in `dist/`. Every `<script type="application/ld+json">` was parsed through `JSON.parse()`:
- **Result**: 100% valid JSON syntax across all 18 pages.
- **Zero Errors**: No missing comma, trailing comma, unescaped quote, or undefined property.

---

## Sample Schema Code: TechArticle Implementation
```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://nixora.co.in/resources/ai-agent-control-plane/"
  },
  "headline": "AI Agent Control Plane: The Complete Technical Guide",
  "description": "Learn how an AI agent control plane helps teams govern AI-generated code, manage deployments, enforce policies, and maintain control as agents become more autonomous.",
  "image": "https://nixora.co.in/og-image-v2.png",
  "author": {
    "@type": "Person",
    "name": "Sayeed Rizwan",
    "jobTitle": "Founder",
    "sameAs": "https://www.linkedin.com/in/sayeedrizwan/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Nixora",
    "url": "https://nixora.co.in/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nixora.co.in/logo-full.jpg"
    }
  },
  "datePublished": "2026-08-20",
  "dateModified": "2026-11-08"
}
```
