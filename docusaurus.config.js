// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodePedia',
  tagline: 'Acá vas a encontrar recursos para empezar a desarrollar tus aplicaciones con NestJS.',
  url: 'https://tresdoce-docs.vercel.app',
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
        title: 'CodePedia',
        hideOnScroll: false,
        logo: {
          alt: 'NestJSPedia Logo',
          src: '/img/code-file-icon.svg',
          //src: 'https://camo.githubusercontent.com/c704e8013883cc3a04c7657e656fe30be5b188145d759a6aaff441658c5ffae0/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f5f746578742e737667',
        },
        items: [
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },*/
          /*{ to: '/blog', label: 'Blog', position: 'left' },*/
          /*{
            type: 'localeDropdown',
            position: 'right',
          },*/
          /*{
            type: 'docsVersionDropdown',
            position: 'right',
          },*/
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
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
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
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/tresdoce/tresdoce-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
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
        indexDocs: true,
        indexPages: true,
        hashed: true,
        language: ['es'],
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: '/',
      },
    ],
  ],
  plugins: [],
};

module.exports = config;
