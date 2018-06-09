<template>
  <div class="post">
    <h2 class="post-title">{{postData.title}}</h2>
    <p class="post-content">{{postData.content}}</p>
    <p class="comment">
      <router-link :to="postUrl">Comments</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ['postData'],
  computed: {
    postUrl() {
      return `/comments/${this.postData.id}`;
    }
  }
}
</script>

<style scoped>
.post {
  color: #373737;
  text-decoration: none;
  background-color: #F4F4F4;
  padding: 16px;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
h2 {
  margin: 0 0 16px 0;
}
p {
  margin: 0 0 16px 0;
}
.comment a {
  color: #C0B283;
  font-weight: bold;
}

</style>
