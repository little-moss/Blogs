import { defineUserConfig } from "vuepress";

import { vdoingTheme } from "vuepress-theme-vdoing"; // 导入 vdoing 主题

export default defineUserConfig({
  base: "/Blogs/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  // 使用 vdoing 主题
  theme: vdoingTheme({
    // 可选的 vdoing 主题配置
    // 例如：
    // themeColor: {
    //   blue: "#2196f3",
    //   red: "#f44336",
    // },
  }),

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
