<template>
    <div class="foot">
        <ul class="foot__items">
            <li class="foot__item" v-for="item in items" :key="item.name">
                <a :href="item.url" target="_blank">{{ item.label }}</a>
            </li>
        </ul>
        <p class="foot__copyright">Copyright ©️ 2021 上海亘岩网络科技有限公司</p>
    </div>
</template>

<script setup lang="ts">
const items = [{
    name: 'help',
    url: '#',
    label: '帮助'
}, {
    name: 'privacy',
    url: '#',
    label: '隐私'
}, {
    name: 'clause',
    url: '#',
    label: '条款'
}]
</script>

<style lang="less" scoped>
.foot {
    padding: 10px 0;
    text-align: center;
    color: var(--foot-color);

    .foot__items {
        display: flex;
        justify-content: center;
    }

    .foot__item {
        margin: 0 20px;
        height: 22px;
        line-height: 22px;
        font-size: 14px;

        a {
            color: var(--foot-color);
        }
    }

    .foot__copyright {
        margin-top: 5px;
        height: 18px;
        line-height: 18px;
    }
}
</style>
