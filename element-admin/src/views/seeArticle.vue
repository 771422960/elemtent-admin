<template>
    <div>
      <h2 class="title">{{article.title}}</h2>
      <div class="body">{{article.body}}</div>
    </div>
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
      
    },
    created(){
      this.$http.get(`articles/${this.$route.params.id}`).then(res => {
          this.article = res.data
        })
    }
  }
</script>

<style scoped>
  .title{
    text-align: center;
  }
  .body {
      margin-left: 20px;
      text-indent:2em;
  }
</style>