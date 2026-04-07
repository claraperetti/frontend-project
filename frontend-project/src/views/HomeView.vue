<template>
  <div class="container">
    <div class="card">
      <h2>Bem-vindo ao Sistema de Cadastro de Produtos</h2>
      <p>
        Este sistema permite visualizar, cadastrar, editar e excluir produtos
        de forma simples e organizada.
      </p>

      <router-link to="/produtos">
        <button>Ver Produtos</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #f4f6f8;
}

.card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 600px;
}

h2 {
  color: #2c3e50;
  margin-bottom: 15px;
}

p {
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
}

button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
}

button:hover {
  background-color: #1f2d3a;
}
</style>