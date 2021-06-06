export const fetchTableData = query => {
  const tableData = [{
    date: '2016-05-03',
    name: '李逍遥',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '张三',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-01',
    name: '陆游',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-08',
    name: '文天祥',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-06',
    name: '路人甲',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-07',
    name: '路人乙',
    address: '上海市普陀区金沙江路 1518 弄'
  }];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(query ? tableData.filter(x => x.name.indexOf(query) > -1) : tableData);
    }, 300);
  })
}