<template>
    <div class="content-container">
      <div class="login-box">
        <span>username</span>
        <input type="text" v-model="username">
        <span>password</span>
        <input type="password" v-model="password">
        <button class="login-button" v-on:click="save">Login</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  props: ['user', 'updateUser'],
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    save() {
      this.updateUser({username: this.username, password: this.password, isLoggedIn: true});
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.content-container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-box {
  display: flex;
  flex-direction: column;
}

input {
  width: 300px;
  font-size: 16px;
  margin-bottom: 8px;
}

.login-button {
  color: #C0B283;
  margin-top: 16px;
  display: block;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
}

</style>
