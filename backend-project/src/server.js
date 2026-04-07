const express = require('express');
const cors = require('cors');

const app = express();

const productRoutes = require('./routes/productRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});