<template>
    <footer class="footer">
      <div class="content-container">
        <p><router-link to="/contact" class="nav-link">Contact</router-link></p>
        <p>Created by Tomasz Morawski</p>
      </div>
    </footer>
</template>

<script>
export default {
    name: "FooterDefault"
}
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #F4F4F4;
  display: flex;
  justify-content: center;
}

.content-container {
  width: 100%;
  max-width: 980px;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: #000;
}
</style>
