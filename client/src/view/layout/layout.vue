<template>
    <common-head></common-head>
    <el-scrollbar class="container__scrollbar" view-class="container">
        <div class="content">
            <router-view></router-view>
        </div>
        <common-foot></common-foot>
    </el-scrollbar>
</template>

<script setup lang="ts">
import CommonHead from '@components/common-head/common-head.vue'
import CommonFoot from '@components/common-foot/common-foot.vue'
</script>

<style lang="less" scoped>
.container__scrollbar {
    height: calc(100vh - 78px);
}

:deep(.container) {
    height: 100%;

    .content {
        position: relative;
        display: flex;
        min-height: calc(100% - 65px);
    }
}
</style>
