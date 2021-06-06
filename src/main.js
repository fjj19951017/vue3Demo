import { createApp } from 'vue';
import App from './App.vue';
// Element
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElTable,
  ElTableColumn,
  ElLoading,
  ElButton,
  ElInput,
} from 'element-plus';

const app = createApp(App);
app.use(ElContainer);
app.use(ElHeader);
app.use(ElMain);
app.use(ElFooter);
app.use(ElTable);
app.use(ElTableColumn);
app.use(ElLoading);
app.use(ElButton);
app.use(ElInput);
app.mount('#app');