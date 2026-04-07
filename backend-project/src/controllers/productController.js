const db = require('../database/db');

exports.createProduct = (req, res) => {
  const { nome, preco, categoria } = req.body;

  db.run(
    `INSERT INTO produtos (nome, preco, categoria) VALUES (?, ?, ?)`,
    [nome, preco, categoria],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
      res.json({ id: this.lastID });
    }
  );
};

exports.getProducts = (req, res) => {
  db.all(`SELECT * FROM produtos`, [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.getProductById = (req, res) => {
  db.get(
    `SELECT * FROM produtos WHERE id = ?`,
    [req.params.id],
    (err, row) => {
      if (err) return res.status(500).json(err);
      res.json(row);
    }
  );
};

exports.updateProduct = (req, res) => {
  const { nome, preco, categoria } = req.body;

  db.run(
    `UPDATE produtos SET nome=?, preco=?, categoria=? WHERE id=?`,
    [nome, preco, categoria, req.params.id],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
      res.json({ updated: this.changes });
    }
  );
};

exports.deleteProduct = (req, res) => {
  db.run(
    `DELETE FROM produtos WHERE id=?`,
    [req.params.id],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ deleted: this.changes });
    }
  );
};