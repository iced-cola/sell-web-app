<template>
<div id="app">
    <div>
        <el-menu :default-active="activeIndex1" class="el-menu-demo menu" mode="horizontal" @select="handleSelect"
         background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="0" class="brand-title">熟人外卖</el-menu-item>
            <el-menu-item index="1" style="margin-left: 10px;">
              <router-link :to="'/'" style="text-decoration: none">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link :to="'/cart'" style="text-decoration: none">购物车</router-link>
            </el-menu-item>
            <el-menu-item index="3">物流配送</el-menu-item>
            <el-menu-item index="4">
              <router-link :to="'/address'" style="text-decoration: none">地址管理</router-link>
            </el-menu-item>
            <el-menu-item index="5">历史订单</el-menu-item>
            <el-submenu index="6" style="float: right; margin-right: 10%">
                <template slot="title">
                    <el-avatar :size="45" :src="url"></el-avatar>
                </template>
                <el-menu-item index="6-1">退出登录</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
    <router-view />
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            activeIndex1: '1',
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 30px;*/
}

.menu {
    padding-left: 10%;
}

.brand-title {
    font-size: large;
    font-weight: bold;
}
</style>
