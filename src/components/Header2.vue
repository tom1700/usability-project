<template>
  <header>
    <div class="content-container">
      <router-link to="/" class="logo">Home</router-link>
      <div class="drop-down-menu">
        <div class="icon" v-on:click="toggleMenu">
          <img v-if="isOpened" src="../assets/cross.svg" />
          <img v-else src="../assets/menu.svg" />
        </div>
        <div v-if="isOpened" class="nav-list">
          <router-link v-if="isLoggedIn" to="/account" class="nav-link">My account</router-link>
          <router-link to="/messages" class="nav-link">Messages</router-link>
          <router-link to="/premium" class="nav-link">Get premium</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
          <router-link v-if="!isLoggedIn" to="/login" class="nav-link">Login</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header2",
    props: ['isLoggedIn'],
    data: () => ({
      isOpened: false
    }),
    methods: {
      toggleMenu() {
        console.log('Got in');
        this.isOpened = !this.isOpened;
      }
    }
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
  justify-content: space-between;
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

.drop-down-menu {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.icon {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-list {
  position: absolute;
  width: 300px;
  right: 0;
  top: 50px;
  background-color: #DCD0C0;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  flex-direction: column;
}

.nav-link {
  text-decoration: none;
  color: #000;
  padding: 8px 0;
}

.nav-link.router-link-exact-active {
  font-weight: bold;
}
</style>
