const Peticao = require("../models/assPeticoes");
const jwt = require("jsonwebtoken");
const SECRET = "Edu@rd0M@r71nS";

module.exports = class assPeticoes {
    static async assPeticao(req, res, next) {
        const token = req.headers["x-access-token"];
        jwt.verify(token, SECRET, (error, decoded) => {
          if (error) {
            return res.status(401).send({ error: error });
          }
          req.nome = decoded.nome;
        });
        try {
          if(!req.nome) return;
          const assPeticao = await Peticao.assPeticao(req.params.id, req.nome);
          if(!assPeticao) return res.status(404).json({ error: 'Erro na busca da petição' });
          res.status(200).json(assPeticao);
          
        } catch (error) {
          res.status(500).json({ error: error });
        }
      }
}