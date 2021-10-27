<template>
    <div class="case-module">
        <div class="case-module__head">
            <div class="case-module__title">
                <div class="case-module__name">签署服务</div>
                <div class="case-module__tag">模块</div>
            </div>
            <div class="case-module__execution">
                <div class="case-module__execution-history">执行记录</div>
                <el-button class="case-module__execute-all" type="primary">全部执行</el-button>
            </div>
        </div>
        <div class="case-module__condition">
            <div class="case-module__operation">
                <el-button class="operation__execute-case">运行测试</el-button>
                <el-popover placement="bottom" :width="200" trigger="click">
                    <el-button>删除</el-button>
                    <el-button>新增</el-button>
                    <template #reference>
                        <el-button class="operation__more">
                            更多操作
                            <i class="el-icon-arrow-down"></i>
                        </el-button>
                    </template>
                </el-popover>
            </div>
            <div class="case-module__filter">
                <el-select class="filter__type" v-model="type" placeholder="类别">
                    <!-- <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>-->
                </el-select>
                <el-select class="filter__status" v-model="status" placeholder="状态">
                    <!-- <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>-->
                </el-select>
                <el-select class="filter__interface" v-model="interface1" placeholder="接口">
                    <!-- <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>-->
                </el-select>
            </div>
        </div>
        <div class="case-module__table">
            <case-table></case-table>
        </div>
    </div>
</template>

<script setup lang="ts">
import CaseTable from './case-table.vue'
import { ref } from 'vue'

let type = ref('')
let status = ref('')
let interface1 = ref('')
</script>

<style lang="less" scoped>
.case-module {
    flex: 1;
    margin-left: 20px;
    padding: 30px 80px 30px 15px;
    background-color: #fff;

    .case-module__head {
        display: flex;
        justify-content: space-between;

        .case-module__title {
            display: flex;
            align-items: center;

            .case-module__name {
                line-height: 1.5;
                font-size: 26px;
            }

            .case-module__tag {
                margin-left: 10px;
                padding: 3px 10px;
                border-radius: 4px;
                background-color: var(--module-color);
                color: #fff;
            }
        }

        .case-module__execution {
            display: flex;
            align-items: center;

            .case-module__execution-history {
                color: var(--theme-color);
                cursor: pointer;
            }

            .case-module__execute-all {
                margin-left: 20px;
            }
        }
    }

    .case-module__condition {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;

        .case-module__operation {
            display: flex;
            align-items: center;

            & > * + * {
                margin-left: 10px;
            }
        }

        .case-module__filter {
            & > * + * {
                margin-left: 10px;
            }
            .filter__type,
            .filter__status,
            .filter__interface {
                width: 120px;
            }
        }
    }
}
</style>
