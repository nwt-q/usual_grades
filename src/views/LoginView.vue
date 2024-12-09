<script>
//运用认证技术 cookie来保存token，这里用js-cookie来操作
//import Cookies from "js-cookie";
import axios from 'axios';
export default {
  name: 'LoginView',
  props: {},
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "admin", //默认值
        password: "123456",
        code: "",
        uuid: ""
      },
      logining: false,
      // 验证码开关
      captchaEnabled: true,
      // 注册开关
      register: false,
      redirect: undefined,
      // 开关
      dialogVisible: false,

    };
  },
  methods: {
    
    async login() {
      this.logining = true;
      this.fullscreenLoading = true;

        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 1000);
      axios.get("http://localhost:8090/login/admin?username=admin&password=123456") // 确保URL字符串正确1
        .then(response => { // 使用箭头函数处理响应
          console.log(response.data); // 打印响应数据
          console.log(response.data.data.status);
          if(response.data.data.status <= 200) {
            this.$router.push('/admin');
          }
          this.logining = false;
        })
        .catch(error => { // 处理错误
          console.error("Error:", error); // 打印错误信息
        });
    },
    reset() {
      this.$refs.loginForm.resetFields();3
    }
  },
};


</script>



<template>
  <div class="login-wrap">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="demo-ruleForm login-container">
      <h3 class="title">管理员登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
        <el-button type="primary" style="width:48%;" @click.native.prevent="login" :loading="logining"
          v-loading.fullscreen.lock="fullscreenLoading">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-wrap {
  background-image: url("../assets/login-bg.jpg");
  background-position: center center;
  background-size: cover;
  height: 100%;
  /* 确保 .login-wrap 元素占满整个视口的高度 */
  width: 100%;
  /* 确保 .login-wrap 元素占满整个视口的宽度 */
  position: absolute;
  /* 使用绝对定位 */
  top: 0;
  left: 0;
}

.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>