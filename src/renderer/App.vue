<template>
  <div id="app">
    <!--<landing-page></landing-page>-->
    <main-page></main-page>
  </div>
</template>

<script>
  import LandingPage from '@/components/LandingPage'
  import mainPage from '@/components/app/main/index.vue'

  export default {
    name: 'pro-viewer',
    components: {
        mainPage
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./css/components/index.less";
</style>
