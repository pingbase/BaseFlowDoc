module.exports = {
  title: 'BaseFlow',
  description: 'Welcome to BaseFlowDoc!',
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
        { text: "首页", link: "/" },
        { text: 'Github', link: 'https://github.com/pingbase/BaseFlowDoc' },
    ],
    sidebar: [
      {
          title: 'Welcome',
          path: '/',
          collapsable: false
      },
      {
        title: '云应用',
        path: '/app/app',
        collapsable: false,
        children: [
            { title: "我的应用", path: "/app/app" },
            { title: "应用模板", path: "/app/template" }
        ]
    },
      {
        title: "关于我们",
        path: '/about/about',
        collapsable: false,
      }
    ]
  },
  base: "/BaseFlowDoc/",
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}
