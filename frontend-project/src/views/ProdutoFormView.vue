<template>
  <div class="container">
    <div class="form-box">
      <h2>{{ editando ? 'Editar Produto' : 'Cadastro de Produto' }}</h2>

      <form @submit.prevent="salvarProduto">
        <label>Nome do Produto</label>
        <input v-model="produto.nome" type="text" placeholder="Digite o nome do produto" />

        <label>Preço</label>
        <input v-model="produto.preco" type="number" step="0.01" placeholder="Digite o preço" />

        <label>Categoria</label>
        <input v-model="produto.categoria" type="text" placeholder="Digite a categoria" />

        <p v-if="mensagemErro" class="erro">{{ mensagemErro }}</p>

        <div class="acoes">
          <button type="button" class="voltar" @click="router.push('/produtos')">
            Voltar
          </button>
          <button type="submit">
            {{ editando ? 'Atualizar' : 'Salvar' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '../api'

const router = useRouter()
const route = useRoute()

const produto = ref({
  nome: '',
  preco: '',
  categoria: ''
})

const editando = ref(false)
const mensagemErro = ref('')

async function carregarProduto() {
  const id = route.query.id

  if (id) {
    editando.value = true

    try {
      const response = await api.get(`/produtos/${id}`)

      produto.value = {
        nome: response.data.nome || '',
        preco: response.data.preco || '',
        categoria: response.data.categoria || ''
      }

    } catch (error) {
      console.error('Erro ao buscar produto:', error)
      mensagemErro.value = 'Não foi possível carregar o produto.'
    }
  }
}

async function salvarProduto() {
  mensagemErro.value = ''

  // ✅ VALIDAÇÃO MELHORADA
  if (!produto.value.nome || !produto.value.preco || !produto.value.categoria) {
    mensagemErro.value = 'Preencha todos os campos.'
    return
  }

  if (produto.value.preco <= 0) {
    mensagemErro.value = 'Preço deve ser maior que zero.'
    return
  }

  try {
    if (editando.value) {
      await api.put(`/produtos/${route.query.id}`, produto.value)
    } else {
      await api.post('/produtos', produto.value)
    }


    produto.value = {
      nome: '',
      preco: '',
      categoria: ''
    }

    router.push('/produtos')

  } catch (error) {
    console.error('Erro ao salvar produto:', error)
    mensagemErro.value = 'Não foi possível salvar o produto. Verifique a API.'
  }
}

onMounted(() => {
  carregarProduto()
})
</script>

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

.erro {
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 12px;
}

.acoes {
  display: flex;
  gap: 10px;
}

button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  flex: 1;
}

button:hover {
  background-color: #1f2d3a;
}

.voltar {
  background-color: #7f8c8d;
}

.voltar:hover {
  background-color: #6c7a7b;
}
</style>