<script>
import axios from 'axios';

export default {
    data() {
        return {
            tableData: [],
            isCollapse: false,
            pageIndex:1,
            pageSize:10,
            pageCount:0,
            searchForm: {
                name: '',
                id: ''
            },
            //设置表单不可见到
            form: {
                id: '',
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            FormVisible: false,
        }
    },
    methods: {
        //更新数据显示表单 : => 提交表单
        updataset() {

        },
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
            console.log('submit!');
        },
        Logout() {
            console.log('退出登录被点击');
            this.$router.push('/home');
        },
        prevPage(){
            this.pageIndex--
            this.fetchData()
        },
        sizeChange(size){
            this.pageSize = size
            this.fetchData()
        },
        currentChange(index){
            this.pageIndex = index
            this.fetchData()
        },
        nextPage(){
            this.pageIndex++
            this.fetchData()
        },
        fetchData() {
            axios.get(`http://localhost:8888/home/grades?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`)
                .then(result => {
                    if (result.data.code === 10000) {
                        const responseData = result.data.data;
                        this.tableData = []
                        for(let item of responseData.rows){
                            const newItem = {
                                id: item.id,
                                name: item.name,
                                sex: item.sex,
                                attendance: item.attendance === "100" ? "全勤" : "非全勤",
                                classPerformance: item.class_performance === "100" ? "优秀" : "一般",
                                homework: item.homework,
                                other: item.other,
                                totalScore: parseInt(item.total_score)
                            };
                             this.tableData.push(newItem);
                        }
                        this.pageIndex = responseData.pageIndex
                        this.pageSize = responseData.pageSize
                        this.pageCount = responseData.total
                        console.log(responseData);
                        //this.tableData: Array(20).fill(newItem)
                         // 使用push来更新数组
                        // 然后循环 pu
                    } else {
                        console.error('请求失败:', result.data.message);
                    }
                })
                .catch(error => {
                    console.error('请求失败:', error);
                });
        }
    },
    mounted() {
        this.fetchData();
    }
};
</script>

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
                    <img src="@/assets/vite.svg" alt="Expand" style="cursor: pointer; margin-right: 10px;"
                        @click="isCollapse = false" v-show="isCollapse" />
                    <img src="@/assets/logo.png" alt="Collapse" style="cursor: pointer;" @click="isCollapse = true"
                        v-show="!isCollapse" />
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
                <!-- separator-class="el-icon-arrow-right" 更换样式 中间部分-->
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
                        <el-button type="primary" size="mini" @click="FormVisible = !FormVisible">编辑</el-button>
                        <el-button type="danger" size="mini">删除</el-button>
                    </el-table-column>
                </el-table>
                <!--这里设置分页查询-->
                <el-pagination :page-size="pageSize"  :current-page="pageIndex" @prev-click="prevPage" @size-change="sizeChange" @current-change="currentChange" @next-click="nextPage" 
                background layout="total, sizes, prev, pager, next, jumper" :total="pageCount">
                </el-pagination>
                <!--这里设置修改表单-->
                <el-dialog title="修改表单" :visible.sync="FormVisible">
                    <el-form ref="form" :model="form" label-width="80px">

                        <el-form-item label="学号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="姓名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="时间">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                    style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-time-picker placeholder="选择时间" v-model="form.date2"
                                    style="width: 100%;"></el-time-picker>
                            </el-col>
                        </el-form-item>

                        <el-form-item label="课堂表现">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="平时作业">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="其他">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="总成绩">
                            <el-switch v-model="form.delivery"></el-switch>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">立即更新</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>

                    </el-form>
                </el-dialog>
            </el-main>
        </el-container>
    </el-container>
</template>

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