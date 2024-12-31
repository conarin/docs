import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'conarin\'s docs',
  tagline: 'conarinが提供しているサービスのドキュメントです。',
  favicon: '/img/favicon.ico',

  url: 'https://docs.conarin.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'conarin\'s docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'intro',
          label: 'はじめに',
          position: 'left'
        },
        {
          type: 'docSidebar',
          sidebarId: 'discord',
          label: 'Discord Bot',
          position: 'left'
        },
        {
          type: 'docSidebar',
          sidebarId: 'api',
          label: 'API',
          position: 'left'
        },
        {
          type: 'docSidebar',
          sidebarId: 'vrchat',
          label: 'VRChat',
          position: 'left'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © 2019-${new Date().getFullYear()} conarin. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true
      }
    }
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      ({
        docsRouteBasePath: '/',
        hashed: true,
        language: ['ja']
      })
    ]
  ]
};

export default config;
