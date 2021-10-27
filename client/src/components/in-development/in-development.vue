<template>
    <div class="in-development">
        <icon name="dev" :size="60" color="#333"></icon>
        <p class="in-development__text">-- 模块开发中 --</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.in-development {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    margin: auto;

    display: flex;
    flex-flow: nowrap column;
    width: 120px;
    height: 120px;
    align-items: center;
    justify-content: center;

    .in-development__text {
        font-size: 16px;
        color: #333;
    }
}
</style>
