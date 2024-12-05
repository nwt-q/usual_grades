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
        <el-button type="primary" style="width:48%;" @click.native.prevent="login" :loading="logining"  v-loading.fullscreen.lock="fullscreenLoading" >登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//运用认证技术 cookie来保存token，这里用js-cookie来操作
import Cookies from "js-cookie";
//import axios from 'axios';
export default {
  name: 'LoginView',
  props: {},
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "admin",
        password: "123456",
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        checked: true
      },
      //login 定义在根级
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
      let userInfo = { username: this.loginForm.username, password: this.loginForm.password };
      try {
        //const res = await this.$api.login(JSON.stringify(userInfo));
        const res = new Promise((resolve) => {
          setTimeout(() => { // 模拟异步请求
            resolve({
              data: {
                token: 'fake-token', // 模拟的 token
                name: 'admin',
              }
            });
          }, 2000); // 模拟请求延时
        });
        Cookies.set('token', res.data.token); // 放置token到Cookie
        sessionStorage.setItem('name', userInfo.username); // 保存用户到本地会话
        this.logining = true;
        this.$router.push('/about');  // 登录成功，跳转到主页
      } catch (res) {
        //alert(res);
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

        this.logining = false;
        this.$router.push('/admin');  // 登录成功，跳转到主页
      }
    },
    reset() {
      this.$refs.loginForm.resetFields();
    }
  },
  // $api: {
  //   login(data) {
  //     // 实现登录逻辑，比如使用 axios 发送请求
  //     return axios.post('/about', data);
  //     ///实现本地伪登入
  //     // 模拟登录响应
  //   }
  // }
};
</script>

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