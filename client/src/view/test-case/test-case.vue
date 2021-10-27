<template>
    <div class="test-case">
        <case-menu></case-menu>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import CaseMenu from './case-menu.vue'

</script>

<style lang="less" scoped>
.test-case {
    display: flex;
    width: 100%;
}
</style>
