const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'DX Articles',
  tagline: 'Search for troubleshooting and how-to tips for HCL Digital Experience',
  url: 'https://pages.git.cwp.pnp-hcl.com',
  baseUrl: '/CWPdoc/digital-experience-articles/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: 'true',
  favicon: 'img/favicon.ico',
  organizationName: 'CWPdoc', // Usually your GitHub org/user name.
  projectName: 'digital-experience-articles', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://git.cwp.pnp-hcl.com/CWPdoc/digital-experience-articles/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://git.cwp.pnp-hcl.com/CWPdoc/digital-experience-articles/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DX Articles',
        logo: {
          alt: 'DX Articles',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'System Requirements/overview',
            position: 'left',
            label: 'System Requirements',
          },
          {
            type: 'doc',
            docId: 'Release Notes/overview',
            position: 'left',
            label: 'Release Notes',
          },
          {
            type: 'doc',
            docId: 'Defects/overview',
            position: 'left',
            label: 'Defects',
          },
          {
            type: 'doc',
            docId: 'Security Bulletins/overview',
            position: 'left',
            label: 'Security Bulletins',
          },
          {
            type: 'doc',
            docId: 'Whitepapers/overview',
            position: 'left',
            label: 'Whitepapers',
          },
          {
            type: 'doc',
            docId: 'Webinars/overview',
            position: 'left',
            label: 'Webinars',
          },
          {  
            href: 'https://help.hcltechsw.com/digital-experience/index.html',
            label: 'DX Product Documentation',
            position: 'right'
          }
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
                to: '/docs/intro',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
