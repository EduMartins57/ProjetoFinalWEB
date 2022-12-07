const Peticao = require("../models/addPeticoes");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const SECRET = "Edu@rd0M@r71nS";

const schema = Joi.object().keys({
  titulo: Joi.string().required().min(1).max(150),
  descricao: Joi.string().required().min(1).max(900),
});

module.exports = class adicionaPeticoes {
  static async addPeticao (req, res, next) {
    const token = req.headers["x-access-token"];
    jwt.verify(token, SECRET, (error, decoded) => {
      if (error) {
        res.status(401).json({ error: error });
        return;
      }

      req.nome = decoded.nome;
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      const result = {
        msg: "Erro na petição.", error: error.details,
      };
      res.status(404).json(result);
      return;
    }
    try {
      if (req.nome != null) {
        const addedPeticao = await Peticao.addPeticao(req.nome, req.body);
        res.status(200).json(addedPeticao);
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}