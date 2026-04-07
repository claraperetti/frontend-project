<template>
  <div class="container">
    <div class="form-box">
      <h2>Cadastro de Produto</h2>

      <form>
        <label>Nome do Produto</label>
        <input type="text" placeholder="Digite o nome do produto" />

        <label>Preço</label>
        <input type="text" placeholder="Digite o preço" />

        <label>Categoria</label>
        <input type="text" placeholder="Digite a categoria" />

        <button type="submit">Salvar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f6f8;
  padding: 30px;
}

.form-box {
  background: white;
  width: 100%;
  max-width: 420px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 25px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: bold;
  color: #444;
}

input {
  margin-bottom: 16px;
  padding: 11px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
}

button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
}

button:hover {
  background-color: #1f2d3a;
}
</style>