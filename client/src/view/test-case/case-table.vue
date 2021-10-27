<template>
    <el-table
        :data="tableData"
        class="case-table"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
    >
        <el-table-column prop="date" label="date" sortable width="180" />
        <el-table-column prop="name" label="Name" sortable width="180" />
    </el-table>
</template>

<script setup lang="ts">
const tableData = [
    {
        itemId: 1,
        itemName: '合同管理',
        title: '合同管理',
        summary: '',
        itemType: 'class',
        caseType: '',
        status: '',
        master: '',
        latestResult: '部分成功',
        execTime: '2021-10-21',
        children: [
            {
                itemId: 4,
                itemName: '创建合同',
                title: '创建合同',
                summary: '',
                itemType: 'interface',
                caseType: '',
                status: '',
                master: '',
                latestResult: '部分成功',
                execTime: '2021-10-21',
                children: [
                    {
                        id: 9,
                        label: '仅创建不发起',
                        type: 'case'
                    },
                    {
                        id: 10,
                        label: '创建并发起',
                        type: 'case'
                    },
                    {
                        id: 101,
                        label: '无用印流程创建',
                        type: 'case'
                    },
                    {
                        id: 102,
                        label: '单签署人',
                        type: 'case'
                    },
                    {
                        id: 103,
                        label: '多签署人',
                        type: 'case'
                    }
                ],
            },
            {
                id: 41,
                label: '修改合同',
                type: 'interface',
                children: [
                    {
                        id: 91,
                        label: '添加签署人',
                        type: 'case'
                    },
                    {
                        id: 104,
                        label: '修改合同文档',
                        type: 'case'
                    },
                ],
            }
        ],
    },
    {
        id: 2,
        label: '文档管理',
        type: 'class',
        children: [
            {
                id: 5,
                type: 'interface',
                label: '创建合同文档',
            },
            {
                id: 6,
                type: 'interface',
                label: '添加合同文档',
            },
        ],
    },
]
</script>

<style lang="less" scoped>
.case-table {
    width: 100%;
    margin: 20px 0;
}
</style>
