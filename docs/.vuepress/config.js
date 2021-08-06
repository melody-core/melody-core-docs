module.exports = {
  title: '文档',
  description: '开发文档,持续更新中....',
  theme: 'reco',
  themeConfig: {
    sidebarDepth: 1,
    lastUpdated: '上次更新',
    authorAvatar: '/logo.png',
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/',
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
