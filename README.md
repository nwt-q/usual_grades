# `Ususl_backend_cpp`


## 项目简介

**项目背景**

在我国，教育改革不断深化，素质教育理念日益深入人心。为了全面、客观、公正地评价学生的综合素质，学校和教育部门越来越重视学生的平时表现。然而，传统的平时分统计方式存在效率低下、透明度不足等问题，导致学生、家长和教师对平时分的关注度不高，难以发挥平时分的激励作用。

**项目目标**

实现学生能透明化查询平时分的平台. 教师高效管理学生平时分的平台

**核心功能**

**平时分详细查询** : 学生通过可视化查询, 实时获取最新情况

**高效管理**: 教师可以通过平台高效管理平时分


## 系统架构图


## 项目结构说明

- **public** -- 公共资源文件夹
- **src**
  - **api** -- API接口相关文件
  - **assets** -- 静态资源文件夹（如图片、字体等）
  - **components** -- 组件文件夹
  - **router** -- 路由配置文件夹
  - **views** -- 视图文件夹
  - **App.vue** -- 根组件或主应用入口文件
  - **main.js** -- 主JavaScript文件，用于启动Vue实例
  - **.gitignore** -- Git忽略提交配置文件
  - **LICENSE** -- 许可证文件
  - **README.md** -- 项目自述文件
  - **babel.config.js** -- Babel配置文件
  - **jsconfig.json** -- JavaScript配置文件
  - **package-lock.json** -- npm包锁文件，记录了项目的依赖关系
  - **package.json** -- npm包配置文件，包含了项目的元数据和脚本命令
  - **vue.config.js** -- Vue CLI配置文件


#### 核心技术栈

| 技术           | 说明             | 版本                                                         | 备注                                 |
| -------------- | ---------------- | ------------------------------------------------------------ | ------------------------------------ |
| `Vue`          | 前端框架         | `v3.x`                                                       | https://v3.vuejs.org/                |
| `Vue-Router`   | 路由框架         | `v4.x`                                                       | https://next.router.vuejs.org/       |
| `Pinia`        | 全局状态管理框架 | `v2.x`                                                       | https://pinia.vuejs.org/             |
| `Axios`        | HTTP中间件       | [v1.7.2](https://github.com/axios/axios/releases/tag/v1.7.2) | https://github.com/axios/axios       |
| `Element-Plus` | 前端`UI`框架     | `latest`                                                     | https://element-plus.gitee.io/zh-CN/ |

#### 扩展技术栈

| 技术                 | 说明           | 版本   | 备注                                                         |
| -------------------- | -------------- | ------ | ------------------------------------------------------------ |
| `ECharts`            | 图表框架       | latest | [`Apache ECharts`](https://echarts.apache.org/handbook/zh/get-started/) |
| `AJ-Captcha`         | 验证码插件     | 1.3.0  | https://ajcaptcha.beliefteam.cn/captcha-doc/                 |
| `SheetJS`            | 电子表格插件   | 0.20.2 | https://docs.sheetjs.com/docs/<br>https://docs.sheetjs.com/docs/demos/frontend/vue |
| `vue-plugin-hiprint` | 打印插件       | 0.0.56 | https://gitee.com/CcSimple/vue-plugin-hiprint                |
| `wangEditor`         | 富文本编辑器   | v5     | https://www.wangeditor.com/v5/                               |
| `pdfobject`          | `pdf`预览插件  | 2.3.0  | https://github.com/pipwerks/PDFObject                        |
| `Vitest`             | 测试框架       | 1.6.0  | https://cn.vitest.dev/<br>https://cn.vuejs.org/guide/scaling-up/testing.html |
| `FcDesigner`         | 表单设计器     | latest | https://view.form-create.com/                                |
| `LogicFlow`          | 流程图编辑框架 | `2.x`  | https://github.com/didi/LogicFlow<br>https://site.logic-flow.cn/ |


### 开发工具

| 工具            | 说明                  | 版本      | 备注                                                         |
| --------------- | --------------------- | --------- | ------------------------------------------------------------ |
| `Navicat`       | 数据库连接工具        | latest    | https://www.navicat.com.cn/                                  |
| `RDM`           | `Redis`可视化管理工具 | latest    | https://github.com/uglide/RedisDesktopManager<br>https://gitee.com/qishibo/AnotherRedisDesktopManager |
| `PowerDesigner` | 数据库设计工具        | 16.6      | http://powerdesigner.de/                                     |
| `Axure`         | 原型设计工具          | 9         | https://www.axure.com/                                       |
| `MindMaster`    | 思维导图设计工具      | latest    | http://www.edrawsoft.cn/mindmaster                           |
| `Visio`         | 流程图绘制工具        | latest    | https://www.microsoft.com/zh-cn/microsoft-365/visio/flowchart-software |
| `Apipost`       | `API`接口调试工具     | latest    | https://www.apipost.cn/                                      |
| `Mock.js`       | `API`接口模拟测试     | latest    | http://mockjs.com/                                           |
| `Git`           | 项目版本管控工具      | latest    | https://git-scm.com/                                         |
| `Codeup`        | 项目源码托管平台      | latest    | https://github.com/                                          |
| `Projex`        | 开发过程管控平台      | latest    | https://github.com/                                           |
| `IDEA`          | `Java`开发`IDE`       | 2022.1.3+ | https://www.jetbrains.com/idea/download                      |
| `Apache Maven`  | Maven 构建工具        | 3.6.3     | https://maven.apache.org/                                    |
| `Docker Maven`  | Maven Docker插件      | 0.40.2    | https://dmp.fabric8.io/<br>https://github.com/fabric8io/docker-maven-plugin |
| gtest           | 测试框架              | 1.14.0    | https://github.com/google/googletest                         |
| `VS Code`       | 前端开发`IDE`         | latest    | https://code.visualstudio.com/Download                       |

### 开发环境

| 依赖环境  | 版本       | 备注                      |
| --------- | ---------- | ------------------------- |
| `Windows` | 10+        | 操作系统                  |
| `JDK`     | 1.8.0_191+ | https://www.injdk.cn/     |
| `NodeJS`  | 20.15.0    | https://nodejs.org/zh-cn/ |
| `NPM`     | 8.19.2     | https://www.npmjs.com/    |

## 特别鸣谢

`Ususl_backend_cpp`的诞生离不开开源软件和社区的支持，感谢以下开源项目及项目维护者：

- `spring`：https://github.com/spring-projects
- `alibaba`：https://github.com/alibaba
- `mybatis`：https://github.com/mybatis/mybatis-3.git
- `mp`：https://github.com/baomidou
- `api`：https://gitee.com/xiaoym/knife4j
- `vue`：https://github.com/vuejs
- `ui`：https://github.com/ElemeFE

同时也感谢其他没有明确写出来的开源组件提供给与维护者。

## 支持一下

如果觉得框架和项目还不错，点个⭐Star，这将是对我极大的鼓励与支持。
想要一起维护项目也可以加QQ群交流**879189040**
