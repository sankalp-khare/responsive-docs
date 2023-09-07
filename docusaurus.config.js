// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Responsive',
  tagline: 'Responsive is a platform for running stateful reactive applications on the modern cloud.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.responsive.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/responsivedev/responsive-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-9GJEEDV70G',
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Responsive Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'https://responsive.dev', 
            label: 'Product', 
            position: 'left'
          },
          {
            to: 'https://responsive.dev', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: 'https://responsive.dev/sign-up-for-responsive-beta',
            label: 'Join our Beta',
            position: 'right',
            className: 'button button--secondary button--rg'
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
                label: 'Home',
                to: '/',
              },
              {
                label: 'Getting Started',
                to: '/category/getting-started',
              },
              {
                label: 'Concepts',
                to: '/category/concepts',
              },
              {
                label: 'API Reference',
                to: '/category/api-reference',
              },
            ],
          },
          {
            title: 'Social',
            items: [
             {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/responsivedev/',
              },
              {
                label: 'X / Twitter' ,
                href: 'https://twitter.com/responsive_apps',  
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Product',
                href: 'https://responsive.dev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/responsivedev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Responsive Computing, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
    }),
};

module.exports = config;
