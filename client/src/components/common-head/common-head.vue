<template>
    <div class="head">
        <div class="head__nav">
            <div
                class="nav__item"
                :class="{ 'active': navActive === nav.name }"
                v-for="nav in navList"
                :key="nav.name"
                @click="toggleNav(nav)"
            >{{ nav.label }}</div>
        </div>
        <div class="head__tool">
            <div class="head__search" v-if="showSearch">
                <el-select v-model="versionActive" placeholder="请选择版本" class="search__version">
                    <el-option
                        v-for="versionItem in versionList"
                        :key="versionItem.version"
                        :label="versionItem.version"
                        :value="versionItem.version"
                    ></el-option>
                </el-select>
                <icon name="search" cursor="pointer"></icon>
            </div>
            <icon name="bell" cursor="pointer"></icon>
            <div class="head__user">
                <el-avatar class="user__avatar" :size="29" :src="avatarUrl" alt="头像"></el-avatar>
                <div class="user__name">Dreity</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import avatarUrl from '@assets/img/avatar.png'


const router = useRouter()
const route = useRoute()

// nav
type navName = 'home' | 'test-case' | 'data-manager' | 'global-config'
type nav = {
    name: navName,
    label: string
}
const navList: nav[] = [{
    name: 'home',
    label: '首页'
}, {
    name: 'test-case',
    label: '测试用例'
}, {
    name: 'data-manager',
    label: '数据管理'
}, {
    name: 'global-config',
    label: '全局配置'
}]
const navActive = ref(route.name || 'home')
function toggleNav (nav: nav): void {
    navActive.value = nav.name

    router.push({
        name: nav.name
    })
}

// 搜索
type version = {
    version: string;
    title: string;
    versionType: 0 | 1 // 0 标准版本 1 项目版本
}
const versionActive = ref('')
const versionList = ref<version[]>([])
const showSearch = computed(() => route.name === 'test-case')
</script>

<style lang="less" scoped>
.head {
    display: flex;
    justify-content: space-between;
    padding: 6px 24px 7px 80px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.05);
    z-index: 1;

    background-color: #fff;

    .head__nav {
        display: flex;

        .nav__item {
            display: flex;
            align-items: center;
            justify-content: center;

            margin: 0 10px;
            width: 122px;
            height: 65px;
            border-bottom: 3px solid transparent;

            font-size: 20px;
            color: #303030;
            cursor: pointer;

            &.active {
                color: var(--theme-color);
                border-color: var(--theme-color);
            }
        }
    }

    .head__tool {
        display: flex;
        align-items: center;

        & > * + * {
            margin-left: 27px;
        }
    }

    .head__search {
        display: flex;
        align-items: center;

        & > * + * {
            margin-left: 19px;
        }

        .search__version {
            width: 300px;
        }
    }

    .head__user {
        display: flex;
        align-items: center;

        cursor: pointer;

        .user__name {
            margin-left: 8px;
            line-height: 27px;
            font-size: 17px;
            color: rgba(0, 0, 0, 0.65);
        }
    }
}
</style>
