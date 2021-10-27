<template>
    <div class="case-menu">
        <case-menu-breadcrumb></case-menu-breadcrumb>
        <div class="case-menu__search">
            <el-input
                v-model="searchValue"
               
                expand-on-click-node
                placeholder="可输入关键字搜索"
                suffix-icon="el-icon-search"
            />
        </div>
        <div class="case-menu__munu">
            <el-tree
                :data="dataSource"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
            >
                <template #default="{ node, data }">
                    <span class="custom-tree-node">
                        <span @click="log(node, data)">{{ node.label }}</span>
                        <span
                            v-if="showNodeTag(data)"
                            :class="`node__type node__type--${data.type}`"
                        >{{ typeMap[data.type].label }}</span>
                    </span>
                </template>
            </el-tree>
        </div>
    </div>
</template>

<script setup lang="ts">
import CaseMenuBreadcrumb from './case-menu-breadcrumb.vue'
import { ref } from 'vue'

const searchValue = ref('')

const data = [
    {
        id: 1,
        label: '合同管理',
        type: 'class',
        children: [
            {
                id: 4,
                label: '创建合同',
                type: 'interface',
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
const typeMap = {
    module: {
        name: 'module',
        label: '模块',
        color: 'rgba(166, 166, 166, 1)'
    },
    class: {
        name: 'class',
        label: '分类',
        color: 'rgba(255, 141, 26, 1)'
    },
    interface: {
        name: 'interface',
        label: '接口',
        color: 'rgba(24, 144, 255, 1)'
    },
    case: {
        name: 'case',
        label: '用例',
        color: 'rgba(0, 186, 173, 1)'
    }
}
const dataSource = JSON.parse(JSON.stringify(data))
function showNodeTag (data) {
    return data.type === 'class' || data.type === 'interface'
}

function log (node, data) {
    console.log(node, data)
}
</script>

<style lang="less" scoped>
.case-menu {
    flex: 0 0 350px;
    padding: 20px;
    background-color: #fff;

    .case-menu__search {
        margin-top: 20px;
    }

    .case-menu__munu {
        margin-top: 20px;
    }

    :deep(.el-tree-node__content) {
        height: 30px;

        .custom-tree-node {
            display: flex;
            align-items: center;
        }
    }

    .node__type {
        margin-left: 10px;
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 12px;
        color: #fff;

        &.node__type--module {
            background-color: var(--module-color);
        }
        &.node__type--class {
            background-color: var(--class-color);
        }
        &.node__type--interface {
            background-color: var(--interface-color);
        }
        &.node__type--case {
            background-color: var(--case-color);
        }
    }
}
</style>
