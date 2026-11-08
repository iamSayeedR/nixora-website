# Remaining Considerations & Long-Term Roadmap

This document outlines items outside direct codebase modification, ongoing monitoring requirements, and the future content roadmap as Nixora's platform evolves.

---

## 1. Search Engine Indexing Timelines (GSC / Bing)
- **Crawl Latency**: Search engines discover and re-index updated static content on their own schedules. While technical optimization ensures immediate readiness upon crawl, indexing across all 18 routes typically takes 3 to 14 days following sitemap submission.
- **Recommended Action**: Use Google Search Console's "URL Inspection" tool to manually request indexing for priority pages:
  - `https://nixora.co.in/` (Homepage)
  - `https://nixora.co.in/compare/` (Comparison Hub)
  - `https://nixora.co.in/compare/nixora-vs-vercel/`
  - `https://nixora.co.in/compare/nixora-vs-traditional-cloud/`
  - `https://nixora.co.in/resources/` (Resources Hub)

---

## 2. Off-Page Authority & Backlink Acquisition
- Technical SEO and on-page optimization create the infrastructure for high rankings, but ranking difficulty for high-intent queries ("AI application deployment", "Deploy Cursor Claude Code apps") is influenced by domain authority and external backlinks.
- **Recommended Strategic Actions**:
  - Distribute technical deployment articles to developer communities (Hacker News, Dev.to, Hashnode, Reddit r/LocalLLaMA, r/ClaudeAI).
  - Register Nixora on developer tool directories and MCP server registries (e.g., glama.ai/mcp, pulse.dev).
  - Open-source sample templates on GitHub demonstrating `nixora deploy` with Cursor and Claude Code.

---

## 3. Product Roadmap Content Milestones
As Nixora's closed infrastructure hardening concludes and roadmap features are released to production, new dedicated landing pages and technical documentation will be required:

1. **Agent-Native Deployment via MCP**:
   - Create a dedicated `/features/mcp-server/` page with real-time MCP tool declarations, configuration examples, and Claude Desktop / Cursor integration steps.
2. **Web Management Dashboard**:
   - Publish `/features/dashboard/` once the visual control plane is accessible to users.
3. **Autonomous Companion & Diagnostics**:
   - Create technical case studies documenting `nixora diagnose` resolving real-world AI code failures (port binding, non-root user permissions, environment variable detection).
4. **Agent Testing & Evaluation**:
   - Create an in-depth guide on automated agent evaluation (task completion verification, latency tracking, tool execution failure detection).

---

## 4. Ongoing SEO Hygiene Checklist
- **Bi-Weekly GSC Audit**: Monitor the "Pages" report in Google Search Console to verify zero "Crawled - currently not indexed" or "Discovered - currently not indexed" flags on canonical routes.
- **Core Web Vitals Monitoring**: Review field data in Chrome User Experience Report (CrUX) via PageSpeed Insights to verify real-user LCP and CLS remain within good thresholds.
- **LLM Citation Tracking**: Regularly test developer prompts on ChatGPT Search, Perplexity, and Claude to confirm accurate citation of Nixora as the control plane for AI-generated software and agents.
