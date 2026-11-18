# AGENTS.md

## Stack
Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui (new-york style).
Auth.js / next-auth v5 beta with Prisma adapter on MongoDB. Dog data from
api.thedogapi.com; image uploads via Cloudinary.

## Commands
- `npm run dev` — dev server on :3000
- `npm run lint` — next lint
- `npx tsc --noEmit` — typecheck (no npm script for it)
- No test framework configured.
- `prisma generate` runs automatically on `npm install` (postinstall).

## Environment
- Requires `.env` (template exists as `.env copy`): DATABASE_URL (MongoDB),
  AUTH_SECRET, NEXTAUTH_URL, AUTH_GITHUB_ID/SECRET, GOOGLE_CLIENT_ID/SECRET,
  CLOUDINARY_* vars.
- After editing prisma/schema.prisma: `npx prisma generate`. Models map `id`
  to MongoDB `_id` (@db.ObjectId).

## Architecture
- Auth split: `auth.config.ts` holds providers (Credentials/Google/GitHub);
  `auth.ts` is the full NextAuth instance (PrismaAdapter, JWT strategy). Its
  jwt/session callbacks inject `role` and `id` into token/session.
- Route groups: `app/(auth)/` public pages, `app/(protected)/admin/` admin area.
- Admin protection is two-layered: middleware.ts redirects unauthenticated
  users from /admin/* to /admin; ADMIN role checks happen per-page
  (`session?.user?.role !== "ADMIN"`).
- DB access only via the Prisma singleton exported as `db` from `@/lib/db`.
- Mutations go through server actions in `actions/*.ts`.
- Zod schemas live in two places: `lib/zod.ts` (login/register) and
  `schema/index.ts` (todo/contact forms).
- Dog API calls go through `lib/axios.ts` (base URL + API key hardcoded there).

## Deployment — not Vercel
README is untouched create-next-app boilerplate; ignore its deploy advice.
Production runs on Windows IIS via iisnode: web.config rewrites all traffic
to custom server.js (plain http server wrapping Next).

## Conventions
- Code comments and UI copy are largely Spanish — match existing style.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
