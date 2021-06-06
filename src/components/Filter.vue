<template>
  <div class="filter_box">
    <el-input v-model="queryString" placeholder="请输入用户名搜索" @input="handleInput" class="input"></el-input>
    <div class="btn_group">
      <el-button @click="handleSelectChange('all')">全选</el-button>
      <el-button @click="handleSelectChange('reverse')">反选</el-button>
      <el-button @click="handleSelectChange('cancel')">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['query-change', 'select-change'],
  setup(props, { emit }) {
    let queryString = ref('');
    // 输入处理
    const handleInput = val => {
      emit('query-change', val)
    };
    // 选择处理
    const handleSelectChange = type => {
      emit('select-change', type);
    }
    return {
      queryString,
      handleInput,
      handleSelectChange,
    }
  }
}
</script>

<style scoped>
  .filter_box {
    display: flex;
    margin-bottom: 20px;
  }

  .input {
    width: 300px;
  }

  .btn_group {
    margin-left: 50px;
  }
</style>