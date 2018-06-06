<style scoped>
</style>
<template>
    <div class="index-page">
        <h1>{{$router.history.current.meta.title}}</h1>
        <div class="mb-10 mt-10">
            <my-button @click.native="doIt">Do Me A Faver</my-button>
            <my-button @click.native="goAbout">About</my-button>
        </div>
        <textarea rows="30" style="width:95%">{{res}}</textarea>
    </div>
</template>
<script>
// import {
//     Bar,Foo
// } from 'SomeUi'; 同步引用

export default {
    components: {
        'my-button': (resolve) => require(['../coms/button.vue'], resolve),
        //Bar,
        //Foo
    },
    data() {
        return {
            res: ''
        }
    },
    mounted(){},
    methods: {
        doIt() {
            this.$api.getIndex().then(res => {
                this.res = res;
            });
        },
        goAbout(){
            this.$router.push('about')
        }
    }
};
</script>