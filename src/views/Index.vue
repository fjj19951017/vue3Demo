<template>
  <el-container class="app_container">
    <el-header class="header">
      <h3>Vue3 Demo</h3>
    </el-header>
    <el-main>
      <Filter @query-change="handleQueryChange" @select-change="handleSelectChange" />
      <Table ref="table" :queryString="queryString" />
    </el-main>
    <el-footer class="footer">
      <Footer/>
    </el-footer>
  </el-container>
</template>

<script>
  import { ref } from 'vue';
  import Table from '@/components/Table';
  import Filter from '@/components/Filter';
  import Footer from '@/components/Footer';

  export default {
    components: {
      Table,
      Filter,
      Footer,
    },
    setup() {
      let queryString = ref('');
      let table = ref(null);
      const handleQueryChange = val => {
        queryString.value = val;
      }
      const handleSelectChange = type => {
        table.value.handleSelectTypeChange(type);
      }
      return {
        queryString,
        handleQueryChange,
        handleSelectChange,
        table,
      }
    }
  }
</script>

<style scoped>
  .app_container {
    min-height: 100%;
  }

  .header {
    background: #fff;
  }

  .header h3 {
    line-height: 60px;
  }

  .footer {
    height: auto !important;
    padding: 0;
  }
</style>