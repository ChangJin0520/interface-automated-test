<template>
    <i class="iat" :class="`iat-${props.name}`" :title="props.title || ''"></i>
</template>

<script setup lang="ts">
interface Props {
    name: string
    size?: number
    color?: string
    cursor?: string
    title?: string
}
const props = withDefaults(defineProps<Props>(), {
    size: 24,
    color: 'rgba(80, 80, 80, 1)',
    cursor: 'auto'
})
</script>

<style lang="less" scoped>
.iat {
    font-size: v-bind("`${props.size}px`");
    color: v-bind("props.color");
    cursor: v-bind("props.cursor");
}
</style>
