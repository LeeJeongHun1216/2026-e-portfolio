import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [{
    name: 'portfolio-share-url',
    transformIndexHtml(html) {
      const host = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL && 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL);
      if (!host) return html;
      const site = new URL(host);
      if (site.protocol !== 'https:' && site.protocol !== 'http:') throw new Error('SITE_URL must be HTTP or HTTPS');
      return {
        html: html.replace('<meta property="og:image" content="./assets/share.jpg">', ''),
        tags: [
          { tag: 'link', attrs: { rel: 'canonical', href: site.href } },
          { tag: 'meta', attrs: { property: 'og:url', content: site.href } },
          { tag: 'meta', attrs: { property: 'og:image', content: new URL('./assets/share.jpg', site).href } },
        ],
      };
    },
  }],
});
