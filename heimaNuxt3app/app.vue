<script setup lang="ts">
//SEO优化信息
useSeoMeta({
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  description: '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
  // 搜索关键词
  keywords: 'B站,bi1ibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
  //绕开 B站 图片防盗链
  referrer: 'no-referrer',

})

</script>

<template>
  <!-- Nuxt是基于文件的路由系统 -->
   <!-- 缓存10级页面，提升用户体验 -->
  <NuxtPage :keepalive="{ max: 10 }"></NuxtPage>
</template>

<style lang="scss">
// 基础样式
@use './assets/styles/base.scss' as *;
// 字体图标
@use './assets/styles/iconfont.scss' as *;

/* vant-ui 主题定制 */
:root {
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}
</style>