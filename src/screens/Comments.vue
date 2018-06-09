<template>
  <div class="content-container">
    <div class="post">
      <h2 class="post-title">{{postData.title}}</h2>
      <p class="post-content">{{postData.content}}</p>
    </div>
    <ul class="comments">
      <li class="comment" v-for="comment in postData.comments">
        <div class="top-bar">
          <div class="date">{{comment.date}}</div>
          <div class="author">{{comment.author}}</div>
        </div>
        <div class="content">
          {{comment.content}}
        </div>
      </li>
    </ul>
    <button class="add-comment" v-if="!addingComment" v-on:click="startWritingComment">Add comment</button>
    <div class="new-comment" v-if="addingComment">
      <textarea name="" id="" v-model="comment"></textarea>
      <button class="save" v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script>
import dbMock from '../dbMocks'
import tracker from '../tracker'

export default {
  name: "Comments",
  data: () => ({
    posts: dbMock.posts,
    addingComment: false,
    comment: ''
  }),
  props: ['user'],
  methods: {
    startWritingComment() {
      if (!this.user.isLoggedIn) {
        alert('You need to login first');
        return null
      }

      this.addingComment = true
    },
    save() {
      console.log(this.user.username)
      const newComment = {
        content: this.comment,
        date: new Date().toLocaleString('en-GB', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }),
        author: this.user.username
      };
      this.addingComment = false
      this.postData.comments = this.postData.comments.concat([newComment])
      this.comment = ''
      tracker.save('home')
    }
  },
  computed: {
    postData() {
      const newsId = this.$route.params.newsId

      return this.posts[newsId]
    }
  }
}
</script>

<style scoped>
.content-container {
  width: 100%;
  max-width: 980px;
  margin: 48px auto;
}
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
.comments {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.comment {
  background-color: #F4F4F4;
  margin: 16px 0 0 0;
  color: #373737;
}

.comment .top-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
  background-color: #DCD0C0;
}

.comment .content {
  padding: 8px;
}

.add-comment, .save {
  color: #C0B283;
  margin-top: 16px;
  display: block;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
}

.new-comment {
  margin-top: 16px;
}
.new-comment textarea{
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  padding: 16px;
  font-size: 16px;
}
</style>
