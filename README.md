# George F. McLaughlin Site

Static personal portfolio built with Astro and deployed with GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Editing content

Main site content is source-managed:

- Profile and SEO defaults: `src/config/site.ts`
- Project list: `src/config/projects.ts`
- Layout and sections: `src/pages/index.astro`, `src/components/`

## Build and checks

```bash
npm run check
npm run build
```

## Deployment

The site deploys through GitHub Actions to GitHub Pages.

1. In GitHub, enable Pages and set the source to `GitHub Actions`.
2. Move this code to the public repo `https://github.com/georgemclaughlin/georgefmclaughlin`.
3. Push to the default branch.
4. The workflow in `.github/workflows/deploy.yml` will build and publish the `dist/` output.

The repo is configured for the live custom-domain deployment:

- Pages host: `https://georgemclaughlin.github.io/`
- Custom domain: `https://georgefmclaughlin.com/`
- Repository: `georgemclaughlin/georgefmclaughlin`

## Custom domain cutover

The repo includes a live `public/CNAME` for GitHub Pages.

1. In Route 53, remove the CloudFront alias records.
2. Point the apex domain at GitHub Pages A records.
3. Point `www` to `georgemclaughlin.github.io`.
4. In the GitHub Pages repository settings, set the custom domain to `georgefmclaughlin.com`.
5. Enable HTTPS in GitHub Pages after certificate issuance completes.

Recommended DNS shape:

- Apex domain: Route 53 alias records to GitHub Pages A records
- `www`: CNAME to `georgemclaughlin.github.io`
