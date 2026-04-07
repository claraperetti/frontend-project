<template>
  <div class="container">
    <div class="topo">
      <h2>Lista de Produtos</h2>

      <router-link to="/formulario">
        <button class="novo-btn">Novo Produto</button>
      </router-link>
    </div>

    <div class="table-box">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mouse Gamer</td>
            <td>R$ 120,00</td>
            <td>Periféricos</td>
            <td>
              <button class="editar">Editar</button>
              <button class="excluir">Excluir</button>
            </td>
          </tr>

          <tr>
            <td>Teclado Mecânico</td>
            <td>R$ 250,00</td>
            <td>Periféricos</td>
            <td>
              <button class="editar">Editar</button>
              <button class="excluir">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 40px;
  background-color: #f4f6f8;
  min-height: calc(100vh - 70px);
}

.topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

h2 {
  color: #2c3e50;
}

.novo-btn {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
}

.novo-btn:hover {
  background-color: #1f2d3a;
}

.table-box {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 14px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  color: #2c3e50;
}

.editar {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 12px;
  margin-right: 8px;
  border-radius: 6px;
  cursor: pointer;
}

.excluir {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}
</style>