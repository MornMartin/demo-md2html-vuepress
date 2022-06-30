const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
module.exports = {
    lang: 'zh-CN',
    title: '二次开发帮助文档',
    base: '/me/test-doc',
    dest: './dist',
    theme: defaultTheme({
      sidebarDepth: 4
    }),
    plugins: [
      searchPlugin({})
    ],
    markdown: {
      anchor: {
          level: [2, 3, 4, 5, 6]
      },
      extractHeaders: {
        level: [2, 3, 4, 5]
      },
      extractTitle: false,
      toc: {// vuepress有左侧导航，不需要TOC
        pattern: /^\[toc\]$/i,
        level: []
      }
    },
  }
