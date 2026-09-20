# Next.js upgrade

## Upgrade summary

| Runtime or package | Before | After |
| --- | --- | --- |
| Next.js | 14.2.35 | 16.3.5 |
| React | 18.3.1 | 19.3.0 |
| React DOM | 18.3.1 | 19.3.0 |
| eslint-config-next | 14.2.35 | 16.3.5 |
| ESLint | 8.57.0 | 9.39.5 |
| Node.js | Undeclared | 20.9.0 minimum; Node 24 LTS recommended |

The repository uses npm and `package-lock.json` as its package-management source of truth. The stale pnpm lockfile was removed.

## Breaking changes handled

- Converted App Router page, layout, and metadata `params` access to the asynchronous request API required by Next.js 16.
- Made the root layout asynchronous and awaited `headers()` before reading the locale propagated for the document language and skip link.
- Renamed the deprecated Middleware convention to `src/proxy.js` and renamed its export to `proxy`, preserving the locale header and matcher behavior.
- Replaced the removed `next lint` command and legacy eslintrc file with the ESLint CLI and a flat Core Web Vitals configuration.
- Upgraded React and React DOM together to React 19. Existing context, refs, effects, dialog, form, and Radix toast behavior remained compatible without forced peer resolution.
- Retained the existing redirect, metadata, robots, sitemap, manifest, contact, and route-handler behavior across the framework caching-default changes. Contact and third-party delivery requests remain request-specific and uncached.

The official async request API and Proxy codemods were run in dry mode after the manual migration; both reported all source files unmodified.

## Architecture improvements

- Next.js 16 now uses stable Turbopack for both `next dev` and `next build`; no webpack fallback or custom Turbopack configuration is required.
- Existing Server Components remain server-rendered. Client boundaries were retained only where the current component tree depends on context, hooks, browser APIs, event handlers, route state, dialog behavior, forms, or toasts.
- The existing Metadata API, JSON-LD helpers, `next/font`, responsive `next/image`, `next/link`, `next/navigation`, and conditional `next/script` integrations were preserved.
- Shared localized content remains static module data. The contact POST, reCAPTCHA verification, Discord delivery, and query-dependent Open Graph response remain dynamic rather than being cached accidentally.
- Upgrade regression tests guard framework versions, the Proxy convention, and asynchronous request API usage.
- Browser regression coverage checks representative routes for hydration errors, page errors, and console warnings after the React 19 migration.

## Dependency changes

- `next` and `eslint-config-next` were upgraded together to 16.3.5.
- `react` and `react-dom` were upgraded together to 19.3.0.
- ESLint 9.39.5 is the newest release accepted by the peer ranges of the plugins currently bundled with `eslint-config-next@16.3.5`. ESLint 10 was evaluated but rejected because those plugins do not yet declare compatibility.
- TypeScript 5.9.3 and the existing application dependencies remain compatible; no React type packages or unrelated runtime dependencies were required.
- Installation completed with npm without `--force` or `--legacy-peer-deps`.

## Configuration changes

- `package.json` declares `engines.node` as `>=20.9.0`, and `.nvmrc` selects Node 24 for local development.
- `eslint.config.mjs` extends the Next.js Core Web Vitals flat configuration and ignores generated build and test artifacts.
- `next.config.mjs` remains intentionally minimal. Its build directory, trailing-slash policy, canonical-host redirect, and localized redirects are unchanged.
- No Docker or CI configuration exists in this repository. The deployment platform must be configured externally to use a supported Node.js runtime.

## Deferred improvements

- React Compiler is not enabled: it would add a compiler dependency and build cost without a measured rendering problem.
- Cache Components and Partial Prerendering are not enabled: the pages use local static content and have no costly reusable server-data graph.
- Broad Suspense or streaming boundaries were not introduced because there are no server-fetch waterfalls to solve.
- The JavaScript application was not converted to TypeScript, and standalone output, Docker, and CI files were not invented without an established deployment architecture.

## Manual production checks

- Configure the production deployment to use Node.js 20.9 or newer, preferably Node 24 LTS.
- Run both staging-safe and explicitly indexable builds in the deployment environment.
- Confirm `/` to `/tr`, apex to `www`, and duplicate blog-index redirects.
- Inspect Turkish and English HTML language, metadata, canonicals, hreflang, robots, sitemap, manifest, and JSON-LD output.
- Exercise the contact form with live reCAPTCHA and Discord configuration.
- Check browser and server logs for hydration, React, image, font, and deprecated API warnings.
- Recheck desktop, laptop, tablet, and mobile layouts after deployment using production fonts and images.
