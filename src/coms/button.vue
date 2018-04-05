<style scoped>
.button-mod{
    display:inline-block;
    border:1px solid rgba(0,0,0,0.06);
    background:#eee;
    line-height:1.86;
    padding:0 5%;
    white-space:nowrap;
    cursor:pointer;
}
</style>
<template>
  <div class="button-mod">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>