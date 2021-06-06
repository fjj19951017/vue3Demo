<template>
  <div class="footer_box">
    <ul class="foot_ul">
      <li>产品与服务</li>
      <li>关于我们</li>
      <li>联系方式</li>
      <li>意见反馈</li>
      <li>帮助中心</li>
      <li>友情链接</li>
      <li>人才招聘</li>
      <li>免责申明</li>
    </ul>
    <div class="foot_bottom">
      <p>xxxx技术有限公司 Copyright © 2009-2012</p>
      <p>粤ICP备xxxxxxx号 增值电信业务经营许可证 粤xx-xxxxxxxx</p>
    </div>
  </div>
</template>

<style scoped>
.footer_box {
  width: 100%;
  height: 190px;
  background: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
}
.footer_box .foot_ul {
  width: 759px;
  overflow: hidden;
  padding: 37px 0 42px;
  box-sizing: border-box;
  margin: 0 auto;
}
.footer_box .foot_ul li {
  float: left;
  font-size: 16px;
  border-right: 1px solid #ffffff;
  padding: 0 16px;
  height: 20px;
  line-height: 20px;
  color: #ffffff;
  opacity: .8;
}
.footer_box .foot_ul li:hover,.foot_bottom p:hover {
  cursor: pointer;
  opacity: 1;
}
.footer_box .foot_ul li:first-child {
  padding-left: 0;
}
.footer_box .foot_ul li:last-child {
  border: none;
  padding-right: 0;
}
.foot_bottom {
  padding: 0 32%;
}
.foot_bottom p {
  text-align: center;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  padding-bottom: 12px;
  color: #ffffff;
  opacity: .6
}
</style>