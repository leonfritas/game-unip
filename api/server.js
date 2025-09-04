const express = require("express");
const sql = require("mssql");
const app = express();
app.use(express.json());
const cors = require("cors");


app.use(cors());

// Configuração do banco
const config = {
  user: "leonardo",
  password: "01042018",
  server: "localhost",
  database: "GameUnip",
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

// Rota para buscar dados
app.get("/ranking", async (req, res) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query("SELECT * FROM Ranking ORDER BY pontos DESC");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/ranking", async (req, res) => {
  const { nomeJogador, pontos } = req.body;

  if (!nomeJogador || pontos === undefined) {
    return res.status(400).json({ error: "Nome e pontos são obrigatórios" });
  }

  try {
    let pool = await sql.connect(config);
    await pool.request()
      .input("nomeJogador", sql.VarChar(100), nomeJogador)
      .input("pontos", sql.Int, pontos)
      .query("INSERT INTO Ranking (nomeJogador, pontos) VALUES (@nomeJogador, @pontos)");

    res.status(201).json({ message: "Registro inserido com sucesso!" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
