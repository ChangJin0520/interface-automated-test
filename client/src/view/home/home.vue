<template>
    <div class="home">
        <div class="home__navs">
            <div class="nav__list">
                <div
                    class="nav__item"
                    :class="{ active: navActive === nav.name }"
                    v-for="nav in navList"
                    :key="nav.name"
                    @click="toggleNav(nav)"
                >{{ nav.label }}</div>
            </div>
        </div>
        <el-scrollbar class="home__scrollbar" view-class="home__modules">
            <div class="module" v-for="index in moduleList" :key="index">
                <div class="module__container">
                    <icon class="module__icon" name="bell" :size="18"></icon>
                    <div class="module__content">
                        <div class="module__name">签署服务</div>
                        <div class="module__count">
                            <div class="module__interface">
                                <div class="title">接口数量</div>
                                <div>
                                    <span class="number">23</span>
                                    <span class="unit">&nbsp;个</span>
                                </div>
                            </div>
                            <div class="module__test-case">
                                <div class="title">测试用例</div>
                                <div class="number">4,345</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="module__tools">
                    <icon
                        v-for="tool in moduleToolList"
                        :key="tool.name"
                        class="module__tool"
                        :name="tool.icon"
                        :size="20"
                        :title="tool.title"
                        color="#dedede"
                        cursor="pointer"
                    ></icon>
                </div>
            </div>
            <!-- module--blank 用于占位，方便布局 Chang-Jin 2021-10-11 -->
            <div class="module module--blank"></div>
            <div class="module module--blank"></div>
            <div class="module module--blank"></div>
            <div class="module module--blank"></div>
            <div class="module module--blank"></div>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const Ax = axios.create({
    baseURL: ''
})

// nav
type nav = {
    name: string;
    label: string;
    data: number
}
const navList: nav[] = [{
    name: 'private',
    label: '私有云',
    data: 8
}, {
    name: 'public',
    label: '公有云',
    data: 30
}]
const navActive = ref('private')
function toggleNav (nav: nav) {
    navActive.value = nav.name
    moduleList.value = nav.data
    console.log('log');
    log()
}

// 模块
const moduleList = ref(8)
const moduleToolList = [{
    name: 'download',
    title: '下载',
    icon: 'download'
}, {
    name: 'edit',
    title: '编辑',
    icon: 'edit'
}, {
    name: 'share',
    title: '分享',
    icon: 'share'
}, {
    name: 'more',
    title: '更多',
    icon: 'more'
}]

function log() {
    Ax.get('/api/v1/hello').then((res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })
}
</script>

<style lang="less" scoped>
.home {
    display: flex;
    flex-flow: nowrap column;

    .home__navs {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 130px;
        padding-top: 50px;
        font-size: 18px;

        .nav__list {
            display: flex;
            align-items: center;
            width: 400px;
            border: 1px solid var(--theme-color);
            border-radius: 4px;
            color: var(--theme-color);
            background-color: #fff;

            .nav__item {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1;
                height: 38px;

                cursor: pointer;

                &.active {
                    color: #fff;
                    background-color: var(--theme-color);
                }
            }
        }
    }

    .home__scrollbar {
        margin: 0 10%;
        flex: 0 0 calc(100vh - 273px);
        height: calc(100vh - 273px);
    }

    :deep(.home__modules) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;

        font-size: 14px;

        .module {
            flex: 0 0 266px;
            margin: 12px;
            border: 1px solid rgba(232, 232, 232, 1);
            border-radius: 2px;
            box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
            background-color: rgba(255, 255, 255, 1);

            &.module--blank {
                height: 0;
                margin: 0 12px;
                border: none;
                box-shadow: none;
                background-color: transparent;
            }

            .module__container {
                display: flex;
                padding: 24px 24px 18px;
            }

            .module__icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                // font-size: 18px;
                // color: var(--theme-color);
                background-color: #ccc;
            }

            .module__content {
                flex: 1;
                padding-left: 16px;
            }

            .module__name {
                margin-bottom: 12px;
                font-size: 16px;
                line-height: 24px;
            }

            .module__count {
                display: flex;
            }

            .module__interface,
            .module__test-case {
                flex: 1;

                .title {
                    font-size: 12px;
                    line-height: 20px;
                }

                .number {
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 32px;
                }

                .unit {
                    font-size: 14px;
                    line-height: 26px;
                    color: rgba(0, 0, 0, 0.65);
                }
            }

            .module__test-case {
                .number {
                    color: rgba(0, 0, 0, 0.65);
                }
            }

            .module__tools {
                display: flex;
                align-items: center;
                height: 40px;
                border-top: 1px solid #dedede;
                background-color: rgba(247, 249, 250, 1);
            }

            .module__tool {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1;
                & + .module__tool {
                    border-left: 1px solid;
                }
            }
        }
    }
}
</style>
