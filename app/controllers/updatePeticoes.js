const Peticao = require("../models/updatePeticoes");
const jwt = require("jsonwebtoken");
const SECRET = "Edu@rd0M@r71nS";

module.exports = class updatePeticoes {
static async updatePeticao(req, res, next) {
    const token = req.headers["x-access-token"];
    jwt.verify(token, SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).send({ error: error });
      }
      req.nome = decoded.nome;
    });
    try {
      if(!req.nome) return; 
      const updatePeticao = await Peticao.updatePeticao(
        req.params.id,
        req.body
      );  
      if(!updatePeticao) return res.status(404).json({ error: 'Petição não encontrada' }); 
      res.status(200).json(updatePeticao);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}