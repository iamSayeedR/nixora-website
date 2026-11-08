# Nixora Website: Structured Data & Schema Validation Report

Comprehensive validation of Schema.org JSON-LD microdata across all 18 canonical static routes.

---

## 1. Schema Types & Coverage Summary

| Schema Type | Pages Implemented | Status | Validation Findings |
|---|---|---|---|
| **Organization** | All 18 Pages (Global Layout) | 🟢 Valid | Fully compliant with Google E-E-A-T guidelines: includes `@id`, `name`, `logo`, `email`, `foundingDate`, `founder` (Person), `knowsAbout`, and official social profiles (`sameAs`). |
| **SoftwareApplication** | All 18 Pages (Global Layout) | 🟢 Valid | Compliant: includes `@id`, `name`, `applicationCategory` ("DeveloperApplication"), `operatingSystem`, `softwareVersion`, `featureList`, `offers` (price: 0 USD). |
| **WebSite** | All 18 Pages (Global Layout) | 🟢 Valid | Valid: declares site origin `https://nixora.co.in/`, name "Nixora", language "en-US", and links publisher to `#organization`. |
| **WebPage** | Homepage (`/`) | 🟢 Valid | Includes `datePublished`, `dateModified`, `speakable`, and connects to Organization and Website. |
| **FAQPage** | Homepage (`/`) | 🟢 Valid | Accurately models the 24 live FAQ accordion questions with matching Question and Answer objects. |
| **TechArticle** | 5 Technical Resource & Compare Pages | 🟢 Valid | Valid: includes `headline`, `author` (Person: Sayeed Rizwan), `publisher`, `datePublished`, `dateModified`. |
| **Article** | 2 Technical Resource Pages | 🟡 Minor Defect | Valid JSON-LD, but missing `dateModified` property on 2 pages. |
| **BreadcrumbList** | 15 Sub-pages | 🟢 Valid | Implements ordered `itemListElement` array correctly linking hierarchy from Home to current path. |

---

## 2. Deep-Dive Schema Validation

### 2.1 Core Entity Graph (`nixoraSchema` in `Layout.astro`)
Declared globally across all pages inside `<script type="application/ld+json">`:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nixora.co.in/#organization",
      "name": "Nixora",
      "alternateName": "Nixora: control plane for AI-generated software and AI agents",
      "url": "https://nixora.co.in/",
      "logo": "https://nixora.co.in/logo-full.jpg",
      "email": "ceo@nixora.co.in",
      "foundingDate": "2026-07-01",
      "dateModified": "2026-11-08",
      "description": "Nixora is the control plane for AI-generated software and AI agents.",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "ceo@nixora.co.in",
        "contactType": "customer support",
        "url": "https://nixora.co.in/about/"
      },
      "founder": {
        "@type": "Person",
        "name": "Sayeed Rizwan",
        "jobTitle": "Founder",
        "sameAs": "https://www.linkedin.com/in/sayeedrizwan/"
      },
      "knowsAbout": [
        "AI-generated software",
        "AI coding agents",
        "Cloud deployment",
        "Developer infrastructure",
        "Model Context Protocol"
      ],
      "sameAs": [
        "https://github.com/nixora-hq",
        "https://www.linkedin.com/company/nixora-hq/",
        "https://www.producthunt.com/products/nixora",
        "https://x.com/wearenixora"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://nixora.co.in/#software",
      "name": "Nixora",
      "alternateName": [
        "Nixora: control plane for AI-generated software and AI agents",
        "Nixora CLI"
      ],
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Linux, macOS, Windows",
      "softwareVersion": "0.1.0",
      "description": "Nixora is the control plane for AI-generated software and AI agents. Deploy an app built by any AI coding agent (Claude Code, Cursor, Codex, Gemini CLI) with a single command, featuring automated containerization, HTTPS, and deployment diagnostics.",
      "featureList": [
        "CLI deployment",
        "Automated containerization",
        "HTTPS TLS certificate issuance",
        "Deployment diagnostics",
        "Persistent cloud hosting"
      ],
      "url": "https://nixora.co.in/",
      "downloadUrl": "https://nixora.co.in/#early-access",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "publisher": { "@id": "https://nixora.co.in/#organization" }
    },
    {
      "@type": "WebSite",
      "@id": "https://nixora.co.in/#website",
      "url": "https://nixora.co.in/",
      "name": "Nixora",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://nixora.co.in/#organization" }
    }
  ]
}
```

#### Verification Findings:
- **Zero Hallucinated Claims:** No fake `aggregateRating`, review stars, inflated pricing, or deceptive schema entries.
- **E-E-A-T Anchoring:** Explicit connection to the founder's LinkedIn (`sameAs: "https://www.linkedin.com/in/sayeedrizwan/"`) and verified social handles establishes entity authority.

---

### 2.2 FAQPage Schema Integrity (Homepage)
- Embedded in page schema via `mainEntity: { "@type": "FAQPage", "mainEntity": faqQuestions }` and as standalone schema.
- **24 Questions and Answers:**
  - Every schema question text matches the on-page heading in `src/components/FAQ.astro`.
  - Every schema answer text matches the on-page disclosure text.
  - No hidden or duplicate questions.
  - Fully compliant with Google's strict FAQPage guidelines (FAQ content is primary and directly visible on page).

---

### 2.3 Identified Schema Defects & Required Corrections

#### Defect 1: Missing `dateModified` in `/resources/deploy-gemini-codex-open-source-ai-apps/`
- **File:** `src/pages/resources/deploy-gemini-codex-open-source-ai-apps.astro:12`
- **Current JSON-LD:**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Deploy Gemini CLI, Codex & Open-Source AI Agent Apps to Production",
    "datePublished": "2026-11-06",
    ...
  }
  ```
- **Issue:** Missing `dateModified`. Google uses `dateModified` for freshness ranking and content recency signals in SERP snippets.
- **Fix:** Add `"dateModified": "2026-11-08"` to the Article schema.

#### Defect 2: Missing `dateModified` in `/resources/mcp-server-cloud-infrastructure-guide/`
- **File:** `src/pages/resources/mcp-server-cloud-infrastructure-guide.astro:12`
- **Issue:** Missing `dateModified`.
- **Fix:** Add `"dateModified": "2026-11-08"` to the Article schema.
