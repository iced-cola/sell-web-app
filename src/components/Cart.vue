<template>
<div>
    <el-row>
        <el-col :span="2">
            <div class="grid-content bg-purple">&emsp;</div>
        </el-col>
        <el-col :span="20">
            <el-table ref="multipleTable" :data="tableData" style="width: 100%; margin-bottom: 30px;"
             @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="商品id" width="100" v-if="'false'">
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
                        <el-input-number v-model="scope.row.count" @change="handleChange" :min="0" :max="100" label="描述文字" size="small"></el-input-number>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="2">
            <div class="grid-content bg-purple-light">&emsp;</div>
        </el-col>
    </el-row>
    <el-button type="primary" class="right-bottom">提交订单</el-button>
</div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex1: '1',
            multipleSelection: [],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
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
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>

<style>
.right-bottom {
    position: fixed;
    overflow: hidden;
    right: 30px;
    bottom: 30px;
}
</style>
