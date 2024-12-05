<template>
    <!--分不同班级的表格-->
    <!--全部数据-->
    <!--全部数据的的图表-->
    <el-container style="height: 100%; border: 1px solid #eee">
        <!-- <el-header style="text-align: right; font-size: 20px"></el-header> -->
        <!--这里设置同步-->
        <el-header style="text-align: right; font-size: 12px">
            <div style="font-size: 23px;color: white;float: left;">平时成绩查询系统</div>
            <!--这里设置下拉菜单-->
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-unlock" @click.native="Logout">退出登录</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-unlock">新增班级</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-unlock">删除班级</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <!--这里设置用户名-->
            <span>Xcpc糕手</span>
        </el-header>
        <el-container>

            <el-aside width="auto" style="border: 0px solid #eee">
                <!--定义1到3个下滑栏-->
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>

                <!--这里设置菜单栏-->
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                    :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">学生成绩图表</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">软件工程二班</span>
                            <el-menu-item index="1-1">
                                <router-link to="/about" class="custom-router-link">学生平时分图表项</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/admin" class="custom-router-link">学生平时分表单项</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <span slot="title">软件工程N班</span>
                            <el-menu-item index="1-3">学生平时分图表项</el-menu-item>
                            <el-menu-item index="1-4">学生平时分表单项</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <span slot="title">测试4</span>
                            <el-menu-item index="1-4-1">测试1</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">总学生成绩图表</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">学生平时分图表项</el-menu-item>
                            <el-menu-item index="2-2">学生平时分表单项</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="2-4">
                            <span slot="title">测试4</span>
                            <el-menu-item index="2-4-1">测试1</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">其他设置</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">全局设置</span>
                    </el-menu-item>
                </el-menu>

            </el-aside>
            <!--设置分页-->
            <el-main>
                <!-- separator-class="el-icon-arrow-right" 更换样式-->
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>学生管理</el-breadcrumb-item>
                    <el-breadcrumb-item>学生列表</el-breadcrumb-item>
                    <el-breadcrumb-item>成绩详情</el-breadcrumb-item>
                </el-breadcrumb>
                <!--增加表单--> <!--改进地方 表单边框-->
                <el-form :inline="true" :model="searchForm" class="demo-form-inline">
                    <el-form-item label="姓名">
                        <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="学号">
                        <el-input v-model="searchForm.id" placeholder="学号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
                <!--这里设置表格-->
                <el-table :data="tableData" style="height: 100%">
                    <el-table-column prop="id" label="学号" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
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
                    <el-table-column width="200">
                        <el-button type="primary" size="mini">编辑</el-button>
                        <el-button type="danger" size="mini">删除</el-button>
                    </el-table-column>
                </el-table>
                <!--这里设置分页查询-->
                <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="100">
                </el-pagination>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import axios from 'axios'; // 确保已经引入了 axios
export default {
    data() {
        const item = {
            id: 1,
            name: '张三',
            sex: '男',
            attendance: '全勤',
            classPerformance: '优秀',
            homework: '90',
            other: '5',
            totalScore: 95
        };
        return {
            tableData: Array(20).fill(item),
            isCollapse: false,
            searchForm: {
                name: '',
                id: ''
            }
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClick(row) {
            console.log(row);
        },
        onSubmit() {
            //待完善
            console.log('submit!');
        },
        Logout() {
            console.log('退出登录被点击');
            this.$router.push('/home');
        }
    },
    //异步请求, 请求数据
    mounted() {
        axios.get('/api/grades')
            .then(result => {
                console.log(result.data); // 处理返回的数据
                this.tableData = result.data; // 更新表格数据
            })
            .catch(error => {
                console.error('请求失败:', error); // 处理错误
            });
    }
};
</script>

<style>
.el-header {
    background-color: #00abff;
    color: #333;
    line-height: 60px;
}

.el-breadcrumb {
    margin-bottom: 40px;
    /* 调整面包屑与表单之间的距离 */
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