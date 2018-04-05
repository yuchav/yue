<style scoped>
</style>
<template>
    <div class="about-page">
        <h1>{{$router.history.current.meta.title}}</h1>
        <div class="mb-10 mt-10">
            <my-button @click.native="goIndex">Index</my-button>
        </div>
    </div>
</template>
<script>

export default {
    components: {
        'my-button': (resolve) => require(['../coms/button.vue'], resolve),
    },
    data() {
        return {}
    },
    methods: {
        goIndex(){
            this.$router.push('index');
        }
    }
};
</script>