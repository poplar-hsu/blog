module.exports = {
  base: '/blog/',
  dest: 'build',
  title: "Shaul Xu's Blog",
  theme: 'gungnir',
  themeConfig: {
    homeHeaderImages: {
      // 可选：首页本地封面图路径和蒙版
      local: [
        // 图 1
        {
          path: '/img/home-bg/1.jpg',
          mask: 'rgba(40, 57, 101, .4)',
        },
        // 图 2
        {
          path: '/img/home-bg/2.jpg',
          mask: 'rgb(251, 170, 152, .2)',
        },
      ],
    },
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: 'Shaul Xu',

      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: '/img/avatar.jpeg',

      // 必须：个人简介，将在首页显示
      description: "Shaul Xu's Blog",

      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: 'shaul-xu', // Github
        // linkedin: 'xiaohan-zou-55bba0160', // 领英
        // facebook: 'renovamen.zou', // Facebook
        // twitter: 'renovamen_zxh', // 推特
        // zhihu: 'chao-neng-gui-su', // 知乎
        email: 'xuyixiang18@gmail.com', // 邮箱
        // customize: [
        //   // 添加其他的社交平台
        //   {
        //     icon: 'ri-reddit-line', // 社交平台的图标
        //     link: 'https://www.reddit.com/user/oh-renovamen', // 主页链接
        //   },
        //   // ...
        // ],
      },
    },
    pages: {
      // 标签页配置
      tags: {
        // 可选：标签页副标题
        subtitle: '吼哇朋友们，这是标签页',

        // 可选：标签页封面图路径和蒙版
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)',
        },
      },

      // 链接页配置
      links: {
        // 可选：链接页副标题
        subtitle: '吼哇朋友们，这是链接页',

        // 可选：链接页封面图路径和蒙版
        bgImage: {
          path: 'img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)',
        },
      },
    },
    search: true, // 可选：是否启用搜索，默认：true
    // searchMaxSuggestions: 10, // 可选：搜索的最大结果数，默认：10
    // searchPlaceholder: '$ grep ...', // 可选：搜索栏占位文本，默认："$ grep ..."
    // searchIcon: 'ri-search-2-line', // 可选：搜索图标
    footer: `
      &copy; Shaul-Xu 2018-2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      Gungnir
    `,
    readingTime: {
      excludes: ['/url1', '/url2/.*'], // 不需要进行统计的页面路径，默认为 ["/tags/.*", "/links"]
      wordsPerMinuteCN: 500, // 一分钟可以阅读多少个中文字符，默认为 300
      wordsPerMinuteEN: 200, // 一分钟可以阅读多少个英文字符，默认为 160
      excludeCodeBlock: true, // 是否排除所有代码块内的字符，默认为 false
      excludeTexBlock: true, // 是否排除所有公式块内的字符，默认为 false
    },
    hitokoto: true,
    chartjs: true,
    katex: true,
    mermaid: true,
    roughviz: true,
    mdPlus: {
      all: true, // 全部启用
    },
    analytics: {
      ba: '2de834fcfa39bf6670ef2957dda44b17',
    },
  },
  plugins: [
    ['vuepress-plugin-chart'],
    ['@renovamen/vuepress-plugin-mermaid'],
    ['vuepress-plugin-roughviz'],
    ['@renovamen/vuepress-plugin-katex'],
    ['@renovamen/vuepress-plugin-md-plus'],
    ['@renovamen/vuepress-plugin-reading-time'],
    [
      '@renovamen/vuepress-plugin-baidu-tongji',
      {
        ba: '2de834fcfa39bf6670ef2957dda44b17',
      },
    ],
  ],
}
