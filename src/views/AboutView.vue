<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <span>为了无法计算的价值</span>
    <el-divider content-position="right">阿里云</el-divider>
  </div>
</template> -->

<template>
  <div>
    <!-- 触发按钮 -->
    <el-button type="text" @click="dialogFormVisible = true">添加表单项</el-button>

    <!-- 弹出框 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: '',
          region: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      submitForm() {
        // 处理表单提交逻辑
        this.dialogFormVisible = false;
      }
    }
  };
</script>
