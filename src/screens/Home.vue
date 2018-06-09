<template>
<div class="content-container">
  <h1>Recent news</h1>
  <post
    v-for="post in posts"
    class="post"
    :key="post.id"
    :post-data="post"
  />
</div>
</template>

<script>
import Post from '@/components/Post'
import dbMock from '../dbMocks'

export default {
  name: "Home",
  data: () => ({
    posts: dbMock.posts
  }),
  components: {
    Post
  }
}
</script>

<style scoped>
.content-container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  color: #373737;
}

.post {
  margin-bottom: 16px;
}
</style>
