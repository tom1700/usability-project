<template>
  <header>
    <div class="content-container">
      <router-link to="/" class="logo">Home</router-link>
      <router-link v-if="isLoggedIn" to="/account" class="nav-link">My account</router-link>
      <router-link to="/messages" class="nav-link">Messages</router-link>
      <router-link to="/premium" class="nav-link">Get premium</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="nav-link">Login</router-link>
    </div>
  </header>
</template>

<script>
export default {
    name: "Header",
    props: ['isLoggedIn']
}
</script>

<style scoped>
header {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #F4F4F4;
}

.content-container {
  width: 100%;
  max-width: 980px;
  display: flex;
  align-items: center;
}

.logo {
  font-size: 24px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  background-color: #C0B283;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
}

.nav-link {
  margin-left: 16px;
  text-decoration: none;
  color: #000;
}

.nav-link.router-link-exact-active {
  font-weight: bold;
}

</style>
