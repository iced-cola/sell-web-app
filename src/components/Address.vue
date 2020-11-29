<template>
<div>
    <el-row>
        <el-col :span="2">
            <div class="grid-content bg-purple">&emsp;</div>
        </el-col>
        <el-col :span="4">
            <el-row class="tac">
                <el-col :span="16">
                    <h4>地址管理</h4>
                    <el-menu default-active="2" class="el-menu-vertical-demo">
                        <el-menu-item index="1" @click="addDialogVisiable=true">
                            <i class="el-icon-plus"></i>
                            <span slot="title">新增</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="edit">
                            <i class="el-icon-edit"></i>
                            <span slot="title">编辑</span>
                        </el-menu-item>
                        <el-menu-item index="3" @click="del">
                            <i class="el-icon-delete"></i>
                            <span slot="title">删除</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="16">
            <el-table ref="addressTable" :data="addressTable" style="width: 100%; margin-bottom: 30px;" height="700px;" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="地址编号">
                </el-table-column>
                <el-table-column prop="name" label="收货人姓名">
                </el-table-column>
                <el-table-column prop="sex" label="性别">
                </el-table-column>
                <el-table-column prop="address" label="收货地址" min-width="300px">
                </el-table-column>
                <el-table-column prop="phone" label="电话号码" min-width="100px;">
                </el-table-column>
                <el-table-column prop="remark" label="备注">
                </el-table-column>
            </el-table>
        </el-col>
        <el-col :span="2">
            <div class="grid-content bg-purple-light">&emsp;</div>
        </el-col>
    </el-row>
    <el-backtop></el-backtop>
    <el-dialog :visible.sync="addDialogVisiable">
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="地址编号">
                <el-input v-model="form.id" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="收货人姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="收货人电话">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="收货人地址">
                <el-cascader size="large" :options="options" v-model="form.address" @change="handleChange"></el-cascader>
            </el-form-item>
            <el-form-item label="详细地址">
                <el-input v-model="form.addressDetail"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="form.remark"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</div>
</template>

<script>
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
export default {
    data() {
        return {
            options: regionData,
            selectedOptions: [],
            form: {
                id: '',
                name: '',
                sex: '',
                address: '',
                addressDetail: '',
                phone: '',
                remark: ''
            },
            addDialogVisiable: false,
            editDialogVisiable: false,
            multipleSelection: [],
            addressTable: [{
                    "id": "12001",
                    "name": "李小姐",
                    "sex": "女",
                    "address": "北京市东城区xx小区x栋x单元xxx",
                    "phone": "12345678901",
                    "remark": "家",
                },
                {
                    "id": "12002",
                    "name": "王小姐",
                    "sex": "女",
                    "address": "广东省东莞市新城区xx小区x栋x单元xxx",
                    "phone": "12345678901",
                    "remark": "家",
                },
                {
                    "id": "12003",
                    "name": "商小姐",
                    "sex": "女",
                    "address": "广东省东莞市新城区xx小区x栋x单元xxx",
                    "phone": "12345678901",
                    "remark": "家",
                },
                {
                    "id": "12004",
                    "name": "张小姐",
                    "sex": "女",
                    "address": "广东省东莞市新城区xx小区x栋x单元xxx",
                    "phone": "12345678901",
                    "remark": "家",
                }
            ]
        }
    },
    methods: {
        handleChange(value) {
            console.log(value) // value值为区域码
            console.log(CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]]);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        add() {},
        edit() {
            var selectedRow = this.multipleSelection;
            if (selectedRow.length <= 0) {
                this.openMessage('请至少选择一条数据！', 'warning');
            }
            if (selectedRow.length > 1) {
                this.openMessage('一次只能编辑一条数据！', 'warning');
            }
        },
        del() {
            var selectedRow = this.multipleSelection;
            if (selectedRow.length <= 0) {
                this.openMessage('请至少选择一条数据！', 'warning');
            }
        },
        onSubmit() {
            console.log('submit!');
        },
        openMessage(message, type) {
            this.$message({
                message: message,
                type: type
            });
        }
    }
}
</script>
