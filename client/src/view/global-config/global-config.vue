<template>
    <div class="global-config">
        <el-tabs class="global-config__tabs" v-model="globalTabActive">
            <el-tab-pane
                v-for="globalTab in globalTabList"
                :label="globalTab.label"
                :name="globalTab.name"
            ></el-tab-pane>
        </el-tabs>

        <div class="config">
            <div class="config__list">
                <div class="config__title">环境列表</div>
                <el-tabs class="config__tabs" v-model="envTabActive" tab-position="left">
                    <el-tab-pane
                        v-for="envTab in envTabList"
                        :label="envTab.label"
                        :name="envTab.name"
                    ></el-tab-pane>
                </el-tabs>
            </div>
            <div class="config__content">
                <label class="config__name">
                    <div class="name">环境名称：</div>
                    <el-input v-model="envName" placeholder="请输入环境名称" />
                </label>
                <label class="config__URL">
                    <div class="name">环境地址：</div>
                    <el-select
                        class="config__protocol"
                        v-model="envProtocol"
                       
                        placeholder="请选择协议"
                    >
                        <el-option
                            v-for="protocol in envProtocolList"
                            :key="protocol.value"
                            :label="protocol.label"
                            :value="protocol.value"
                        ></el-option>
                    </el-select>
                    <el-input
                        class="config__host"
                        v-model="envURL"
                       
                        placeholder="请输入环境地址"
                    />
                </label>
                <div class="params">
                    <div class="params__head">
                        <div class="params__title">全局参数</div>
                        <global-config-import></global-config-import>
                    </div>
                    <el-table class="params__table" :data="tableData" border style="width: 100%">
                        <el-table-column prop="name" label="参数名" width="120" />
                        <el-table-column prop="value" label="参数值" width="150" />
                        <el-table-column prop="desc" label="描述" />
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GlobalConfigImport from './global-config-import.vue'

// tab 切换
const globalTabList = [
    {
        name: 'env',
        label: '环境配置'
    }, {
        name: 'second',
        label: '标签二'
    }
]
let globalTabActive = ref('env')

// 环境
const envTabList = [{
    name: 'local',
    label: 'local'
}, {
    name: 'me',
    label: 'me 环境'
}, {
    name: 'cn',
    label: 'cn 环境'
}]
let envTabActive = ref('local')

let envName = ref('')
let envProtocol = ref('http')
let envProtocolList = [{
    value: 'http',
    label: 'http://'
}, {
    value: 'https',
    label: 'https://'
}]
let envURL = ref('localhost:9081')

const tableData = [
    {
        name: 'contractId',
        value: '20210908109879',
        desc: '合同代码',
    },
    {
        name: 'contractName',
        value: '',
        desc: '',
    },
    {
        name: 'id',
        value: '',
        desc: '',
    },
    {
        name: 'interface',
        value: '',
        desc: '',
    },
]
</script>

<style lang="less" scoped>
.global-config {
    position: absolute;
    top: 30px;
    right: 50px;
    bottom: 0;
    left: 50px;
    display: flex;
    flex-flow: nowrap column;
    background-color: #fff;

    &__tabs {
        padding: 30px 40px 0;
    }

    :deep(.global-config__tabs .el-tabs__item) {
        height: 59px;
        line-height: 59px;
        font-size: 27px;
    }

    .config {
        display: flex;
        flex: 1;
        width: 900px;

        .config__list {
            flex: 0 0 200px;
            padding-left: 40px;
            // border-right: 1px solid rgba(240, 242, 245, 1);
        }

        .config__title {
            font-size: 16px;
            line-height: 30px;
            font-weight: bold;
            color: rgba(80, 80, 80, 1);
        }

        :deep(.el-tabs__item) {
            width: 180px;
            text-align-last: left;
            padding: 0;
        }

        // :deep(.el-tabs__header) {
        //     margin-right: 0;
        // }

        .config__content {
            flex: 1;
            padding: 30px;
        }

        .config__name,
        .config__URL {
            display: flex;
            align-items: center;
            height: 50px;

            .name {
                flex: 0 0 90px;
            }
        }

        .config__protocol {
            width: 150px;
        }

        .config__host {
            margin-left: 10px;
        }
    }

    .params {
        .params__head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 50px;
        }
        .params__title {
            font-weight: bold;
        }
    }
}
</style>
