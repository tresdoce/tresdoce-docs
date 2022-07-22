// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NestJSPedia',
  tagline: 'Acá vas a encontrar recursos para empezar a desarrollar tus aplicaciones con NestJS.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tresdoce', // Usually your GitHub org/user name.
  projectName: 'tresdoce-docs', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //image: '/img/supabase-og-image.png', // used for meta tag, in particular og:image and twitter:image
      //metaImage: '/img/supabase-og-image.png',
      navbar: {
        title: 'NestJSPedia',
        hideOnScroll: false,
        logo: {
          alt: 'NestJSPedia Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/tresdoce/tresdoce-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tresdoce/tresdoce-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tresdoce. Built with ♥️.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          //editUrl: 'https://github.com/tresdoce/tresdoce-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/tresdoce/tresdoce-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['es'],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  plugins: [],
};

module.exports = config;
