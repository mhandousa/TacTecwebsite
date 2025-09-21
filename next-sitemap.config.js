// https://github.com/iamvishnusankar/next-sitemap
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, url) => ({
    loc: url,
    changefreq: config.changefreq,
    priority: url === '/' ? 1.0 : config.priority,
    lastmod: new Date().toISOString(),
    alternateRefs: [
      { href: `${config.siteUrl}/en`, hreflang: 'en' },
      { href: `${config.siteUrl}/ar`, hreflang: 'ar' },
      { href: `${config.siteUrl}/pt`, hreflang: 'pt' },
      { href: `${config.siteUrl}/pt-BR`, hreflang: 'pt-BR' },
      { href: `${config.siteUrl}/es`, hreflang: 'es' },
      { href: `${config.siteUrl}/fr`, hreflang: 'fr' },
      { href: `${config.siteUrl}/it`, hreflang: 'it' },
      { href: `${config.siteUrl}/de`, hreflang: 'de' },
    ]
  })
};
