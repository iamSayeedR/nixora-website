# Nixora Website: Page-by-Page SEO Audit

Comprehensive evaluation of all 18 canonical static routes published in production.

---

## Page Index & Health Matrix

| Route | Title (Chars) | Meta Description (Chars) | Word Count | Status |
|---|---|---|---|---|
| `/` | 65 chars | 155 chars | 1,852 words | 🟢 Healthy |
| `/about/` | 58 chars | 156 chars | 526 words | 🟢 Healthy |
| `/product/` | 41 chars | 134 chars | 1,322 words | 🟢 Healthy |
| `/traction/` | 61 chars | 104 chars | 220 words | 🟡 Short Desc / Thin Content |
| `/compare/` | 29 chars (Short) | 48 chars (Truncated) | 120 words | 🔴 Critical Thin / Broken Desc |
| `/compare/nixora-vs-traditional-cloud/` | 65 chars | 84 chars (Truncated) | 200 words | 🔴 Truncated Desc / Thin Content |
| `/compare/nixora-vs-vercel/` | 48 chars | 33 chars (Truncated) | 173 words | 🔴 Truncated Desc / Thin Content |
| `/resources/` | 51 chars | 124 chars | 567 words | 🟢 Healthy |
| `/resources/ai-agent-control-plane/` | 56 chars | 166 chars | 1,243 words | 🟢 High-Authority |
| `/resources/cli-deployment-guide/` | 51 chars | 134 chars | 386 words | 🟡 Moderate Depth |
| `/resources/deploy-cursor-claude-code-app-to-production/` | 84 chars (Too Long) | 160 chars | 878 words | 🟡 Title Truncated in SERP |
| `/resources/deploy-gemini-codex-open-source-ai-apps/` | 86 chars (Too Long) | 147 chars | 387 words | 🟡 Title Truncated in SERP |
| `/resources/mcp-server-cloud-infrastructure-guide/` | 88 chars (Too Long) | 161 chars | 413 words | 🟡 Title Truncated in SERP |
| `/resources/mcp-servers-guide/` | 53 chars | 145 chars | 1,318 words | 🟢 High-Authority |
| `/resources/why-ai-agent-output-wont-run-in-production/` | 84 chars (Too Long) | 65 chars (Truncated) | 872 words | 🔴 Truncated Desc / Long Title |
| `/resources/why-traditional-infra-fails-ai-code/` | 69 chars | 129 chars | 237 words | 🟡 Thin Content |
| `/privacy/` | 23 chars | 100 chars | 274 words | 🟢 Standard Legal |
| `/terms/` | 25 chars | 108 chars | 315 words | 🟢 Standard Legal |

---

## Detailed Page Inspections

### 1. Homepage (`/`)
- **Title (65 chars):** `Nixora: The Control Plane for AI-generated software and AI Agents`
  - *Assessment:* Well-aligned with brand positioning. Slightly long (recommended: 55–60 chars), but Google displays up to 600px width which usually fits this title cleanly.
- **Meta Description (155 chars):** `Nixora is being built as the control plane for AI-generated software and AI agents: understand, deploy, operate, and evolve the infrastructure around them.`
  - *Assessment:* Strong, natural keyword density without keyword stuffing.
- **Heading Structure:**
  - `H1`: "The Control Plane for AI-Generated Software and AI Agents" (1 H1 tag present, correct).
  - `H2` count: 7 (Covers features, architecture, FAQ, waitlist).
  - `H3` count: 32 (Individual FAQ questions and capability breakdowns).
- **Schema:** Full graph including `Organization`, `SoftwareApplication`, `WebSite`, `WebPage`, and standalone `FAQPage`.
- **Word Count:** 1,852 words. Excellent content density covering core value proposition and 24 FAQ accordion questions.

---

### 2. About Page (`/about/`)
- **Title (58 chars):** `About Nixora | Control Plane for AI Software and AI Agents`
- **Meta Description (156 chars):** `About Nixora: company story, market vision, and founder bio for Sayeed Rizwan. Building the control plane where AI-generated software and AI agents operate.`
- **H1:** "Built for the next generation of software."
- **Schema:** Contains `Person` (Founder: Sayeed Rizwan), `Organization`, `SoftwareApplication`, and `BreadcrumbList`.
- **Content:** 526 words covering market context, company vision, and founder background. Good E-E-A-T signals.

---

### 3. Product Architecture & Roadmap (`/product/`)
- **Title (41 chars):** `Nixora Product Architecture & Roadmap`
- **Meta Description (134 chars):** `Nixora product architecture: deployment and diagnosis live today, MCP access next, monitoring, scaling, and governance on the roadmap.`
- **H1:** "One control plane. Every AI app and agent you build."
- **Content:** 1,322 words. Excellent architectural depth explaining live CLI capabilities vs. roadmap features.

---

### 4. Comparison Index (`/compare/`) — 🔴 DEFECT
- **Title (29 chars):** `Platform Comparisons | Nixora` (Too short, misses primary target keywords).
- **Meta Description (48 chars):** `"Factual architectural comparisons between Nixora"`
  - *Defect:* Cut off mid-sentence!
  - *Recommended Fix:* `"Compare Nixora with traditional cloud platforms (AWS, Docker, K8s) and Vercel. See how Nixora provides a native control plane for AI-generated code."` (151 chars).
- **Word Count:** 120 words. Very thin. Needs a summary comparison matrix comparing Nixora, Traditional PaaS (Vercel/Heroku), Container PaaS (Railway/Render), and Cloud Hyperscalers (AWS/GCP).

---

### 5. Nixora vs Traditional Cloud (`/compare/nixora-vs-traditional-cloud/`) — 🔴 DEFECT
- **Title (65 chars):** `Nixora vs Traditional Cloud Deployment | Architectural Comparison`
- **Meta Description (84 chars):** `"Factual comparison between manual cloud infrastructure (Docker, AWS, K8s) and Nixora"`
  - *Defect:* Truncated mid-sentence without completing the comparison statement.
  - *Recommended Fix:* `"Architectural comparison between traditional cloud infrastructure (Docker, Kubernetes, AWS) and Nixora's automated control plane for AI coding agents."` (152 chars).
- **Word Count:** 200 words. Too thin to rank against high-difficulty cloud infrastructure comparison keywords.
- **Recommended Content Addition:** Add 600 words comparing setup times, failure diagnostic workflows, and environment variable configuration.

---

### 6. Nixora vs Vercel (`/compare/nixora-vs-vercel/`) — 🔴 DEFECT
- **Title (48 chars):** `Nixora vs Vercel | Developer Platform Comparison`
- **Meta Description (33 chars):** `"Factual comparison between Vercel"`
  - *Defect:* Completely broken 33-character truncated fragment!
  - *Recommended Fix:* `"Nixora vs Vercel comparison: discover why Nixora is engineered for full-stack AI-generated code and stateful AI agents beyond frontend serverless hosting."` (156 chars).
- **Word Count:** 173 words. Extremely thin for one of the highest commercial-intent keywords in developer hosting.
- **Recommended Content Addition:** Detailed feature-by-feature matrix comparing frontend serverless execution vs. stateful backend containers, MCP agent integration, and runtime failure diagnosis.

---

### 7. Why AI Coding Agent Output Won't Run in Production (`/resources/why-ai-agent-output-wont-run-in-production/`) — 🔴 DEFECT
- **Title (84 chars):** `Why Your AI Coding Agent's Output Won't Run in Production | Nixora Resources`
  - *Defect:* Exceeds 60-character limit; will truncate to `Why Your AI Coding Agent's Output Won't Run in Production...` in Google results.
  - *Recommended Fix:* `Why AI Agent Code Fails in Production | Nixora` (46 chars).
- **Meta Description (65 chars):** `"Cursor, Claude Code, and Codex generate working applications: but"`
  - *Defect:* Truncated right at the word "but"!
  - *Recommended Fix:* `"Why code generated by Cursor, Claude Code, and Codex fails in production: discover port binding mismatches, missing env vars, and how Nixora automates fixes."` (159 chars).
- **Word Count:** 872 words. High-quality body text, ruined only by the truncated meta description snippet.

---

### 8. Deploying Cursor & Claude Code Apps (`/resources/deploy-cursor-claude-code-app-to-production/`)
- **Title (84 chars):** `How to Deploy a Cursor or Claude Code-Generated App to Production | Nixora Resources`
  - *Defect:* 84 characters. Truncates in SERP.
  - *Recommended Fix:* `Deploy Cursor & Claude Code Apps to Production | Nixora` (54 chars).
- **Meta Description (160 chars):** Solid, descriptive, and accurately addresses search intent.
- **Word Count:** 878 words. Actionable step-by-step tutorial with code snippets.

---

### 9. Deploying Gemini CLI & Codex Apps (`/resources/deploy-gemini-codex-open-source-ai-apps/`)
- **Title (86 chars):** `How to Deploy Gemini CLI, Codex & Open-Source AI Agent Apps to Production | Nixora`
  - *Defect:* 86 characters. Truncates in SERP.
  - *Recommended Fix:* `Deploy Gemini CLI & Open-Source AI Apps | Nixora Guide` (53 chars).
- **Schema Issue:** Missing `dateModified` in `Article` schema.
- **Word Count:** 387 words. Could be expanded with sample command outputs.

---

### 10. MCP Server for Cloud Infrastructure (`/resources/mcp-server-cloud-infrastructure-guide/`)
- **Title (88 chars):** `Model Context Protocol (MCP) for Cloud Infrastructure & AI Agent Deployment | Nixora`
  - *Defect:* 88 characters.
  - *Recommended Fix:* `MCP for Cloud Infrastructure & Agent Deployment | Nixora` (55 chars).
- **Schema Issue:** Missing `dateModified` in `Article` schema.
- **Word Count:** 413 words.

---

### 11. MCP Servers Field-Tested Guide (`/resources/mcp-servers-guide/`)
- **Title (53 chars):** `MCP Servers: The Field-Tested Guide for 2026 | Nixora`
- **Meta Description (145 chars):** Complete, authoritative, and well-targeted.
- **Word Count:** 1,318 words. Outstanding pillar content targeting high-growth developer queries around Anthropic's Model Context Protocol.

---

### 12. AI Agent Control Plane Guide (`/resources/ai-agent-control-plane/`)
- **Title (56 chars):** `AI Agent Control Plane: Ultimate Guide for 2026 | Nixora`
- **Meta Description (166 chars):** Comprehensive summary.
- **Word Count:** 1,243 words. Excellent topical authority anchor for the core brand keyword.

---

### 13. Zero-Config CLI Deployment Guide (`/resources/cli-deployment-guide/`)
- **Title (51 chars):** `Zero-Config CLI Deployment Guide | Nixora Resources`
- **Meta Description (134 chars):** Complete and actionable.
- **Word Count:** 386 words.
