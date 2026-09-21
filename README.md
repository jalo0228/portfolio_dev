# Youhyun Kim — AI Agent Developer Portfolio

Bilingual (Korean / English) portfolio built with Next.js and TypeScript, ready for Vercel.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

- Korean: `/ko`
- English: `/en`
- Project detail pages: `/{locale}/projects/{slug}`

## Deploy to Vercel

### Option 1 — GitHub import
1. Create a new GitHub repository and push this project.
2. Open Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel detects Next.js automatically.
5. Click **Deploy**.

Your first deployment will receive a free `*.vercel.app` URL.

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

Sign in when prompted and follow the deployment steps.

## Content notes

- GitHub link is intentionally hidden until a public URL is ready.
- Phone number is not displayed.
- The site uses `/ko` and `/en` routes and keeps project pages aligned across both languages.
