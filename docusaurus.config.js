// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Joshua McCauley',
  tagline: 'A synthetic biology researcher and developer',
  favicon: 'img/20240324_logo_b_trimmed-removebg-preview.ico',

  // Set the production url of your site here
  url: 'https://jdmccauley.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/20240324_logo_b_trimmed-removebg-preview.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          // Add later when I have projects.
          // {to: '/projects', label: 'Projects', position: 'left'},
          {to: '/research', label: 'Research', position: 'left'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            html: `
              <a href="https://www.linkedin.com/in/joshua-mccauley/">
                <img src="/img/linkedin.svg" alt="LinkedIn" height=30px width=30px />
              </a>
            `
          },
          {
            html: `
              <a href="https://github.com/jdmccauley">
                <img src="/img/github.svg" alt="GitHub" height=30px width=30px />
              </a>
            `
          },
          {
            html: `
              <a href="https://orcid.org/0000-0002-3766-560X">
                <img src="/img/orcid.svg" alt="Orcid" height=30px width=30px />
              </a>
            `
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joshua McCauley`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: ['docusaurus-plugin-sass'],
};

export default config;
