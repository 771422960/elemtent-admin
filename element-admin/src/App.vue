<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router="" :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <el-menu-item index="/articles/createarticle">新建文章</el-menu-item>
          <el-menu-item index="/articles/listarticle">文章列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
        <el-container class="head">
          文章管理系统
        </el-container>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  export default {

  };
</script>



<style>
  html,body {
    margin: 0;
    padding: 0;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .head {
    padding-left: 550px;
    font-size: 20px;
  }
</style>
