<script>
import axios from 'axios';
export default {
  data() {
    return {
      tableData: [{
        id: 1,
        name: '张三1',
        sex: '男',
        attendance: '全勤',
        classPerformance: '优秀',
        homework: '90',
        other: '5',
        totalScore: 96
      }, {
        id: 1,
        name: '张三11',
        sex: '男',
        attendance: '全勤',
        classPerformance: '优秀',
        homework: '90',
        other: '5',
        totalScore: 97
      }, {
        id: 1,
        name: '张三112',
        sex: '男',
        attendance: '全勤',
        classPerformance: '优秀',
        homework: '90',
        other: '5',
        totalScore: 98
      }, {
        id: 1,
        name: '张三113',
        sex: '男',
        attendance: '全勤',
        classPerformance: '优秀',
        homework: '90',
        other: '5',
        totalScore: 99
      }],
      imgList: [
        { img: require('../../assets/Leetcode.png') },
        { img: require('../../assets/login-bg.jpg') },
        { img: require('../../assets/L.png') }
      ],
      formInline: {
        user: '',
        region: ''
      },
      //评星样式
      value: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      activeIndex: '1',
      show: false,
      avatarSrc: 'https://q6.itc.cn/q_70/images03/20240113/32b5d680ba9c4cd9ae56cd344fcee4be.jpeg',
      // 控制菜单显示的布尔值
      isMenuVisible: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    TodoList() {
      this.$router.push('/home/todoList');
    },
    login() {
      axios.get("http://localhost:8090/login/admin") // 确保URL字符串正确
        .then(response => { // 使用箭头函数处理响应
          console.log(response.data); // 打印响应数据
        })
        .catch(error => { // 处理错误
          console.error("Error:", error); // 打印错误信息
        });
    }
  }
};
</script>

<template>
  <div>
    <!--布局容器-->
    <el-container>
      <!--表头-->
      <el-header>
        <div class="menu-container">

          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#44cef6" text-color="#000000" active-text-color="#FFFFFF">
            <el-menu-item index="1">查询中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">学习管理</template>
              <el-menu-item index="2-1">笔记管理</el-menu-item>
              <el-menu-item index="2-2">作业管理</el-menu-item>
              <el-menu-item index="2-3" @click.native="TodoList">代办事管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="http://evlast.jxoj.top" target="_blank">论坛</a></el-menu-item>
            <el-menu-item index="4"><a href="http://oj.jxoj.top" target="_blank">计算机协会OJ</a></el-menu-item>
            <el-submenu index="3" style='float:right'>
              <template slot="title"> <el-avatar :src="avatarSrc"></el-avatar></template>
              <el-menu-item index="2-1">
                <router-link to="/login" class="custom-router-link">管理员登入</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
          </el-menu>
          <!-- 菜单 -->
          <div class="menu" v-if="isMenuVisible">
            <el-menu>
              <el-menu-item index="1">菜单项1</el-menu-item>
              <el-menu-item index="2">菜单项2</el-menu-item>
              <el-menu-item index="3">菜单项3</el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-header>
      <!--主要内容展示-->
      <el-main>
        <!-- 卡片轮播图-->
        <div>
          <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in imgList" :key="item">
              <!--<h3 class="medium">{{ item }}</h3>-->
              <img :src="item.img" style="height:100%;width:100%;">
            </el-carousel-item>
          </el-carousel>
        </div>
        <!--成绩查询-->
        <div class="search-usual">
          <el-form :inline="true" :model="formInline">
            <el-form-item label="学号">
              <el-input v-model="formInline.user" placeholder="88888888"></el-input>
            </el-form-item>
            <el-form-item label="班级">
              <el-select v-model="formInline.region" placeholder="选择区域">
                <el-option label="软件工程二班" value="1"></el-option>
                <el-option label="软件工程N班" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <!-- <el-button type="primary" @click="show = !show">查询</el-button> -->
              <el-button type="primary" @click="login">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!--表格显示-->
        <transition name="el-fade-in">
          <el-table :data="tableData" style="width: 100%" v-show="show">
            <el-table-column prop="id" label="学号" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
              <!--插槽-->
              <template slot-scope="scope">
                <el-tag>{{ scope.row.name }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="attendance" label="出勤记录">
            </el-table-column>
            <el-table-column prop="classPerformance" label="课堂表现">
            </el-table-column>
            <el-table-column prop="homework" label="平时作业">
            </el-table-column>
            <el-table-column prop="other" label="其他">
            </el-table-column>
            <el-table-column prop="totalScore" label="总成绩">
            </el-table-column>
          </el-table>
        </transition>

      </el-main>
      <!--尾部元素-->
      <el-footer>
        <div class="block">
          <el-rate v-model="value" :colors="colors">
          </el-rate>
          为网站打个分吧!
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style>
.menu-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #44cef6;
  padding: 0 20px;
  /* 根据需要调整内边距 */
  height: 60px;
  /* 根据需要调整高度 */
  line-height: 60px;
}

.menu {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.el-menu-demo {
  flex-grow: 1;
  /* 使菜单占据剩余空间 */
}

.el-header {
  padding: 0, 0;
}

.el-menu-demo .el-menu-item a {
  color: inherit;
  /* 链接颜色继承自菜单项文本颜色 */
  text-decoration: none;
  /* 去除链接下划线 */
}

.el-avatar {
  margin-left: auto;
  /* 将头像推向右侧 */
  margin-right: 20px;
  /* 根据需要调整外边距 */
}

/*  轮播图样式 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

/* 轮播图前背景色 */
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

/* 轮播图后背景色 */
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-footer {
  text-align: center;
  line-height: 60px;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}

/*居中对齐*/
.search-usual {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* 或者您可以设置一个具体的高度 */
  margin: 120px;
}

.search-usual .el-form-item {
  margin-right: 70px;
  /* 表单项之间的间距 */
}

.custom-router-link {
  color: inherit;
  /* 文字颜色继承 */
  text-decoration: none;
  /* 去除下划线 */
  display: block;
  /* 让链接填满整个容器 */
}
</style>