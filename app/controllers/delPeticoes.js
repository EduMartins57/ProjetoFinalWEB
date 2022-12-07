const Peticao = require("../models/delPeticoes");
const jwt = require("jsonwebtoken");
const SECRET = "Edu@rd0M@r71nS";

module.exports = class delPeticoes {

static async deletePeticao(req, res, next) {
    const token = req.headers["x-access-token"];
    jwt.verify(token, SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).send({ error: error });
      }
      req.nome = decoded.nome;
    });
    try {    
      if(!req.nome) return; 
      const deletePeticao = await Peticao.deletePeticao(req.params.id);
      if(!deletePeticao) return res.status(404).json({ error: 'Erro petição' });
      res.status(200).json(deletePeticao);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
