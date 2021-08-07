module.exports = {
  title: '音巢',
  description: '音巢(melody-core),谱写技术最强音!',
  themeConfig: {
    sidebarDepth: 1,
    lastUpdated: '上次更新',
    logo: '/logo.png',
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ],
    ],
    repo: 'https://github.com/melody-core/melody-core-docs',
    repoLabel: 'doc-repo',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '参与文档维护',
    nav: [
      {
        text: 'melody-doc-org',
        link: '/melody-core/melody-cli/',
      },
      {
        text: 'melody-github-org',
        link: 'https://github.com/melody-core',
      },
      {
        text: 'melody-npm-org',
        link: 'https://www.npmjs.com/org/melody-core/',
      },
    ],
    sidebar: {
      // '/melody-core/melody-cli/':[''],
      // '/melody-core/leo/': [''],
      '/melody-core/': [
        {
          title: 'melody-cli',
          path: '/melody-core/melody-cli/',
        },
        {
          title: 'leo',
          path: '/melody-core/leo/',
        },
        {
          title: 'template',
          path: '/melody-core/template/',
        },
      ],
    },
  },
};
