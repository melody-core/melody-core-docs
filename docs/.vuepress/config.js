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
        text: 'Rem UI',
        link: 'https://melody-core.github.io/rem/',
      },
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
      {
        text: 'melody-yuque-org',
        link: 'https://melody-core.yuque.com/dashboard',
      }
    ],
    sidebar: {
      // '/melody-core/melody-cli/':[''],
      // '/melody-core/leo/': [''],
      '/melody-core/':  [{
        title: '组织',
        collapsable: false,
        children: [{
          title: '简介',
          path: '/melody-core/mc-org/'
        }]
      },{
        title: 'RemUI',
        children:[{
          title: 'Rem组件库文档',
          path: '/melody-core/rem/'
        }]
      },{
        title: "CLI文档集锦",
        collapsable: false,
        children:  [{
          title: 'melody-cli',
          path: '/melody-core/melody-cli/'
        }, {
          title: 'leo',
          path: '/melody-core/leo/'
        },{
          title: 'holmes',
          path: '/melody-core/holmes/'
        },{
          title: 'cli-spy',
          path: '/melody-core/cli-spy/'
        }, {
          title: 'historian',
          path: '/melody-core/historian/'
        }]
      },{
        title: '屠龙术文档集锦',
        collapsable: false,
        children: [{
          title: 'W_EOS',
          path: '/melody-core/ds/W_EOS/'
        },{
          title: 'W_CMC',
          path: '/melody-core/ds/W_CMC/'
        },{
          title: 'W_LCP',
          path: '/melody-core/ds/W_LCP/'
        },{
          title: 'W_UBC',
          path: '/melody-core/ds/W_UBC/'
        },{
          title: 'W_BDG',
          path: '/melody-core/ds/W_BDG/'
        }]
      }],
    },
  },
};
