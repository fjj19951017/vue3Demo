<template>
  <el-table v-loading="loading" ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="日期" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column>
  </el-table>
</template>

<script>
  import { ref, watch } from 'vue';
  import { fetchTableData } from '@/service/api';

  export default {
    props: {
      queryString: String,
    },
    setup(props) {
      let tableData = ref([]);
      let multipleSelection = ref([]);
      let loading = ref(false);
      // 查询表格数据
      const queryData = async(queryString) => {
        loading.value = true;
        const res = await fetchTableData(queryString);
        tableData.value = res;
        loading.value = false;
      }
      // 首次查询
      queryData();
      // 搜索框变化后查询
      watch(() => props.queryString, queryData);
      // 选择类型变化
      const multipleTable = ref(null);
      const handleSelectTypeChange = type => {
        switch (type) {
          case 'all': {
            tableData.value.map(row => {
              multipleTable.value.toggleRowSelection(row, true);
            });
          }
          break;
          case 'cancel': {
            multipleTable.value.clearSelection();
          }
          break;
          case 'reverse': {
            tableData.value.map(row => {
              multipleTable.value.toggleRowSelection(row, multipleSelection.value.indexOf(row) < 0);
            });
          }
        }
      }
      // 选择checkbox事件
      const handleSelectionChange = val => {
        multipleSelection.value = val;
      }
      return {
        tableData,
        multipleSelection,
        loading,
        queryData,
        handleSelectionChange,
        multipleTable,
        handleSelectTypeChange,
      }
    }
  }
</script>

<style scoped>
</style>