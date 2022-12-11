// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mozhi 2.0 Documentation',
  tagline: 'An unofficial copy of the Mozhi 2.0 documentation',
  url: 'https://mozhi-documentation.digitalmalayali.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'digitalmalayali', // Usually your GitHub org/user name.
  projectName: 'mozhi-documentation', // Usually your repo name.
  deploymentBranch: 'main',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ml'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ml: {
        label: 'മലയാളം',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/digitalmalayali/mozhi-documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Mozhi 2.0 Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: 'https://www.digitalmalayali.in/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/digitalmalayali/mozhi-documentation',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Open Source Web Apps',
            items: [
              {
                label: 'Privacy Policy Generator',
                href: 'https://free-privacy-policy-generator.digitalmalayali.in/',
              },
              {
                label: 'Malayalam Privacy Policy Generator',
                href: 'https://malayalam-privacy-policy-generator.digitalmalayali.in/',
              },
              {
                label: 'Pappadam',
                href: 'https://pappadam.digitalmalayali.in/',
              },
            ],
          },
          {
            title: 'Websites',
            items: [
              {
                label: 'Blog',
                href: 'https://www.digitalmalayali.in/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/digitalmalayali',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus ❤ by Digital Malayali. <br> ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
