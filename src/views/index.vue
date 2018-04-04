<style scoped>
</style>
<template>
    <div class="index">
       <h1 @click="doIt">Hello World</h1>
    </div>
</template>
<script>
    export default {
        methods: {
            doIt() {
                alert('Just Do It');
                //this.$api.getInfo();
            }
        }
    };
</script>