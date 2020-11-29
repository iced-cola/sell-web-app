<template>
<div>
    <el-row>
        <el-col :span="2">
            <div class="grid-content bg-purple">&emsp;</div>
        </el-col>
        <el-col :span="4">
            <el-row class="tac">
                <el-col :span="16">
                    <h4>商品分类</h4>
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-menu-item index="1" @click="scroll2Category('主食')">
                            <i class="el-icon-burger"></i>
                            <span slot="title">主食</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="scroll2Category('配菜')">
                            <i class="el-icon-potato-strips"></i>
                            <span slot="title">配菜</span>
                        </el-menu-item>
                        <el-menu-item index="3" @click="scroll2Category('调料')">
                            <i class="el-icon-cold-drink"></i>
                            <span slot="title">调料</span>
                        </el-menu-item>
                        <el-menu-item index="4" @click="scroll2Category('饮品')">
                            <i class="el-icon-milk-tea"></i>
                            <span slot="title">饮品</span>
                        </el-menu-item>
                        <el-menu-item index="6" style="margin-top: 35px;">
                            <i class="el-icon-shopping-cart-full"></i>
                            <span slot="title">
                                <router-link :to="'/cart'" style="text-decoration: none">购物车</router-link>
                            </span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="16">
            <el-table ref="multipleTable" :data="tableData" style="width: 100%; margin-bottom: 30px;" max-height="700px">
                <el-table-column prop="id" label="商品id" width="100">
                </el-table-column>
                <el-table-column prop="name" label="商品名称" width="120">
                </el-table-column>
                <el-table-column label="商品样图">
                    <template scope="scope">
                        <el-image style="width: 100px; height: 100px" :src="scope.row.image" :fit="'cover'"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="商品价格">
                </el-table-column>
                <el-table-column prop="desc" label="商品描述" width="180px">
                </el-table-column>
                <el-table-column prop="category" label="商品分类">
                </el-table-column>
                <el-table-column prop="count" label="操作" width="180px">
                    <template scope="scope">
                        <el-input-number v-model="scope.row.count" @change="handleChange" :min="0" :max="100"
                         label="描述文字" size="small"></el-input-number>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="2">
            <div class="grid-content bg-purple-light">&emsp;</div>
        </el-col>
    </el-row>
    <el-backtop></el-backtop>
</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                    "id": "100006",
                    "name": "免费白米饭",
                    "price": 1.50,
                    "desc": "免费白米饭喜欢吃就点",
                    "image": "http://tse3-mm.cn.bing.net/th/id/OIP.HPaT6LSNL1Q7FVySPKOU7QHaE8",
                    "category": "主食",
                    "count": 0
                },
                {
                    "id": "100004",
                    "name": "西红柿炒鸡蛋",
                    "price": 9.60,
                    "desc": "全是西红柿没鸡蛋",
                    "image": "https://tse1-mm.cn.bing.net/th?id=OIP.PWPwW7ixd2D98E2fo1x0CAHaJ3",
                    "category": "主食",
                    "count": 0
                },
                {
                    "id": "100010",
                    "name": "工业盐",
                    "price": 0.80,
                    "desc": "多加点避免吃不死",
                    "image": "https://tse1-mm.cn.bing.net/th?id=OIP.0FZkYyXGKfOU31CIFe1q7gHaJ3",
                    "category": "配菜",
                    "count": 0
                },
                {
                    "id": "100007",
                    "name": "百事洁厕灵",
                    "price": 0.80,
                    "desc": "狗都不喝的百事牌洁厕灵",
                    "image": "https://tse1-mm.cn.bing.net/th?id=OIP.SiN-wwRjvmxwbN98BsM3aQHaKQ",
                    "category": "调料",
                    "count": 0
                },
                {
                    "id": "100010",
                    "name": "工业盐",
                    "price": 0.80,
                    "desc": "多加点避免吃不死",
                    "image": "https://tse1-mm.cn.bing.net/th?id=OIP.0FZkYyXGKfOU31CIFe1q7gHaJ3",
                    "category": "调料",
                    "count": 0
                },
                {
                    "id": "100007",
                    "name": "百事洁厕灵",
                    "price": 0.80,
                    "desc": "狗都不喝的百事牌洁厕灵",
                    "image": "https://tse1-mm.cn.bing.net/th?id=OIP.SiN-wwRjvmxwbN98BsM3aQHaKQ",
                    "category": "饮品",
                    "count": 0
                },
                {
                    "id": "100010",
                    "name": "工业盐",
                    "price": 0.80,
                    "desc": "多加点避免吃不死",
                    "image": "https://tse1-mm.cn.bing.net/th?id=OIP.0FZkYyXGKfOU31CIFe1q7gHaJ3",
                    "category": "饮品",
                    "count": 0
                },
                {
                    "id": "100007",
                    "name": "百事洁厕灵",
                    "price": 0.80,
                    "desc": "狗都不喝的百事牌洁厕灵",
                    "image": "https://tse1-mm.cn.bing.net/th?id=OIP.SiN-wwRjvmxwbN98BsM3aQHaKQ",
                    "category": "饮品",
                    "count": 0
                },
            ]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleChange(value) {
            console.log(value);
        },
        scroll2Category(category) {
            let table = this.tableData;
            var targetRowIndex = 0;
            for (var i = 0; i < table.length; i++) {
                if (table[i].category === category) {
                    targetRowIndex = i;
                    break;
                }
            }
            if (targetRowIndex === 0) {
                this.$refs.multipleTable.bodyWrapper.scrollTop = 0;
                return;
            }
            var rowHeight = 132;
            var scrollHeight = rowHeight * targetRowIndex + 10;
            this.$refs.multipleTable.bodyWrapper.scrollTop = scrollHeight;
        }
    },
}
</script>
