<template>
    <iframe style="width: 100%; height: 70%;" ref="tempHtml" frameborder="0" :src="iframeSrc"></iframe>
    
</template>

<script>
export default {
    data() {
        return {
            // 存储iframe的源地址
            iframeSrc: 'http://todolist.jxoj.top/',
        };
    },
};
</script>