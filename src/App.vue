<template>
  <div style="height: 100%;">
    <router-view></router-view>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import router from './router';

export default {
    //注意要导入组件
    components : { },
  //定义数据模型
  data() {
      return {
         message:"Hello World"
      };
  },
  methods: {
  },
  mounted() { // 加载完成
     //alert("Vue实例已挂载到DOM上");
  }
}
</script>
<style>
html,
body {
  height: 100%;
}
</style>