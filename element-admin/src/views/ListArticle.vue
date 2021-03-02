<template>
      <el-table :data="articles" fit="false" >
        <el-table-column prop="title" label="标题" width="140" height="100px">
        </el-table-column>
        <el-table-column prop="body" label="内容" width="800" height="100px" show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column prop="date" label="时间" width="100" height="100px">
        </el-table-column>
         <el-table-column fixed="right" label="操作" width="150" height="100px">
            <template slot-scope="scope">
            <el-button @click="see(scope.row._id)" type="text" size="small">查看</el-button>
            <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
            <el-button @click="remove(scope.row._id)"  type="text" size="small">删除</el-button>
            </template>
         </el-table-column>
      </el-table>
</template>

<script>
export default {
    data() {
      return {
        articles: []
      }
    },
    methods: {
      fetch(){
        this.$http.get('articles').then(res => {
         this.articles = res.data
        })
      },
      edit(id){
        this.$router.push(`/articles/${id}/editarticle`)
      },
      remove(id){
        this.$http.delete(`articles/${id}`).then(res => {
          this.$message({
          message: '删除成功',
          type: 'success'
        }),
        this.fetch()
        })
      },
      see(id){
        this.$router.push(`/articles/${id}/seearticle`)
      }
    },
    created() {
      this.fetch()
    }
}
</script>

<style>
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>