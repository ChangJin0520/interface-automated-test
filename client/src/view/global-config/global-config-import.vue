<template>
    <el-button
        class="global-config-import__btn"
        size="small"
        type="primary"
        icon="el-icon-plus"
        @click="open"
    >导入</el-button>

    <el-dialog class="global-config-import__dialog" v-model="dialogVisible" title="选择常用变量" width="55%">
        <div class="config-imoprt__search">
            <el-input v-model="searchValue" placeholder="请输入">
                <template #append>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                </template>
            </el-input>
        </div>
        <el-table class="global-config-import__table" :data="tableData" border style="width: 100%">
            <el-table-column prop="desc" label="描述" width="120" />
            <el-table-column prop="desc1" label="描述" width="150" />
            <el-table-column prop="num" label="出现次数" />
            <el-table-column prop="value" label="参数值" />
        </el-table>
        <el-pagination
            class="global-config-import__pagination"
            background
            layout="sizes, prev, pager, next, total, jumper "
            :page-sizes="[10, 30, 100]"
            :total="100"
        ></el-pagination>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="close">Cancel</el-button>
                <el-button type="primary" @click="close">OK</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialogVisible = ref(false)
let searchValue = ref('')
function open () {
    dialogVisible.value = true
}
function close () {
    dialogVisible.value = false
}

const tableData = [
    {
        desc: 'name',
        desc1: '名称',
        num: '128',
        value: ''
    },
    {
        desc: 'deacription',
        desc1: '描述',
        num: '89',
        value: ''
    },
    {
        desc: 'status',
        desc1: '状态',
        num: '70',
        value: ''
    },
    {
        desc: 'contractId',
        desc1: '合同号',
        num: '65',
        value: ''
    },
]
</script>

<style lang="less" scoped>
.global-config-import {
}

.config-imoprt__search {
    display: flex;
    justify-content: flex-end;

    :deep(.el-input) {
        width: 300px;
    }
}

.global-config-import__table {
    margin-top: 20px;
}

.global-config-import__pagination {
    margin-top: 20px;
    text-align: right;
}
</style>
