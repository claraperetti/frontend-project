<template>
  <header class="header">
    <h1>Sistema de Produtos</h1>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/produtos">Produtos</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #2c3e50;
  padding: 15px 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 22px;
}

nav {
  display: flex;
  gap: 16px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding-bottom: 4px;
}

nav a.router-link-active {
  border-bottom: 2px solid white;
}
</style>