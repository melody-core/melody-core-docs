module.exports = {
  title: 'melody-cli',
  description: '开发文档,持续更新中....',
  themeConfig: {
    sidebarDepth: 1,
    lastUpdated: '上次更新',
    logo: '/melody-logo.png',
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ],
    ],
    repo: 'https://github.com/melodyWxy/melody-cli',
    repoLabel: '查看源码',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
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
