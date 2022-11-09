import sidebar from './sidebar';
module.exports = {
  title: 'pinyin-pro',
  description: 'jS',
  theme: 'vuepress-theme-write',
  themeConfig: {
    logo: 'https://image-1300099782.cos.ap-beijing.myqcloud.com/analysis/react-logo.png',
    type: 'docs',
    sidebar,
    navbar: [
      // {
      //   text: 'React18 新特性',
      //   link: '/feature/concurrent.md',
      // },
      {
        text: '原理揭秘',
        link: '/prepare/源码目录结构.md',
      },
    ],
  },
  bundler: '@vuepress/bundler-webpack',
  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5, 6],
    },
  },
  define: {
    SITE_INFO: {
      title: 'React 原理揭秘',
      description: '结合 react 源码, 讲述 react 底层原理',
      start: '开始学习',
      startPath: '/prepare/源码目录结构.html',
      type: 'docs',
    },
    HOME_ITEMS: [
      {
        title: 'Out of the box',
        text: 'Elegant default configrations and convention routing assist developers to get started as simple as possible, that focus all attentions on developing libraries & writting docs',
      },
      {
        title: 'For developing libraries',
        text: 'Rich Markdown extensions are not limited to rendering component demos, making component documents not only easy to write and manage, but also beautiful and easy to use',
      },
      {
        title: 'Theme system',
        text: 'Progressive custom theme capabilities, ranging from expanding your own Markdown tags to customizing complete theme packages, are up to you',
      },
    ],
  },
};
