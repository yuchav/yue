<style scoped>
</style>
<template>
    <div class="index">
        <h1 @click="doIt">Hello World</h1>
        <div>{{res}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            res: ''
        }
    },
    methods: {
        doIt() {
            this.$api.getIndex().then(res => {
                this.res = res;
            });
            //alert('Just Do It');
        }
    }
};
</script>