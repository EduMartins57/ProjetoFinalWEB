const Peticao = require("../models/autenticaUser");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const schemaLogin = Joi.object().keys({
  email: Joi.string().required().min(1).max(150),
  pass: Joi.string().required().min(1).max(900),
});

module.exports = class autenticaUser {

static async autenticUser(req, res, next) {
    const { error, value } = schemaLogin.validate(req.body);
    if (error) {
      const result = {
        msg: "A autenticação não realizada",
        error: error.details,
      };
      res.status(404).json(result);
      return;
    }
    try {
      const autenticaUser = await Peticao.autenticUser(req.body);
      if (!autenticaUser) {
        res.status(404).json(`Usuário não autenticado`);
        return;
      }
      res.status(200).json(autenticaUser);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}