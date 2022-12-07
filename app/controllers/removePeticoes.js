const Peticao = require("../models/removePeticoes");
const jwt = require("jsonwebtoken");
const SECRET = "Edu@rd0M@r71nS";

module.exports = class removePeticoes {
static async removeSign(req, res, next) {
    const token = req.headers["x-access-token"];
    jwt.verify(token, SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).send({ error: error });
      }
      req.nome = decoded.nome;
    });
    try {
      if(!req.nome) return;
      const falhaPeticao = await Peticao.removeSign(req.params.id, req.nome);
      if(!falhaPeticao) return res.status(404).json({ error: 'Petição ou assinatura não encontrada' });
      res.status(200).json(falhaPeticao);
      
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}