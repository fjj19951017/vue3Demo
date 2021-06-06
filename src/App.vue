<template>
  <Index />
</template>

<script>
import Index from '@/views/Index.vue';

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
@import url('~@/assets/styles/reset.css');

#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eee;
}
</style>
