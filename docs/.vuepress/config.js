module.exports = {
  // 站点配置
  base: "/frontend-book/",
  lang: "zh-CN",
  title: "前端书籍",
  description: "Leon's library",
  head: [["link", { rel: "icon", href: "logo.png" }]],

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "logo.png",
    // 导航
    navbar: [
      {
        text: "JavaScript高级程序设计第四版",
        link: "/JavaScript/index.md",
      },
      {
        text: "Vue.js设计与实现",
        link: "/Vuejs/index.md",
      },
    ],
  },

  // plugins
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
};
