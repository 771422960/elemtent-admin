<template>  
  <el-form ref="form" :model="article" label-width="80px" @submit.native.prevent="saveArticle">
    <el-form-item label="文章名称">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保持</el-button>
      <el-button>取消</el-button>
    </el-form-item>
</el-form>

</template>

<script>
  export default {
    data() {
      return {
        article: {

        }
      }
    },
    methods: {
      saveArticle() {
        this.$http.put(`articles/${this.$route.params.id}`,this.article).then(res => {
          this.$message({
          message: '文章修改成功',
          type: 'success'
        })
        }),
        this.$router.push('/articles/listarticle')
      },
      fetch(){
        this.$http.get(`articles/${this.$route.params.id}`).then(res => {
          this.article = res.data
        })
      }
    },
    created() {
      this.fetch()
    }
  }
</script>

<style>

</style>