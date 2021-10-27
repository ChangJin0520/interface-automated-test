<script lang="ts">
import { h } from 'vue'

export default {
    setup () {
        const breadcrumbList = ['私有化', '用例管理', '签署服务']

        const breadcrumbNodeList = breadcrumbList.map((el, index, list) => {
            if (index === list.length - 1) {
                return h('span', {
                    class: ['breadcrumb__item--last']
                }, el)
            }

            return h('span', {
                class: ['breadcrumb__item']
            }, el + ' / ')
        })

        return () => h('div', {
            class: ['case-menu-breadcrumb']
        }, breadcrumbNodeList)
    }
}
</script>

<style lang="less" scoped>
.case-menu-breadcrumb {
    // color: rgba(0, 0, 0, 0.45);
    :deep(.breadcrumb__item) {
        color: rgba(0, 0, 0, 0.45);
        cursor: pointer;
    }

    :deep(.breadcrumb__item--last) {
        color: rgba(80, 80, 80, 1);
        cursor: pointer;
    }
}
</style>
