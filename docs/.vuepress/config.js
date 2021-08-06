module.exports = {
  title: '音巢',
  description: '音巢(melody-core),谱写技术最强音!',
  themeConfig: {
    sidebarDepth: 1,
    lastUpdated: '上次更新',
    logo: '/imgs/logo.png',
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
    repoLabel: '查看源码',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '参与文档维护',
    nav: [
      {
        text: '文档',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '文档',
          collapsable: false,
          sidebarDepth: 2,
          children: [''],
        },
      ],
    },
  },
};
