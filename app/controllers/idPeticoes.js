const Peticao = require("../models/idPeticoes");

module.exports = class idPeticoes {
static async idPeticao(req, res, next) {
    try {
      const peticoes = await Peticao.getById(req.params.id);
      if (!peticoes) {
        res.status(404).json(`Petição não encontrada`);
        return;
      }
      res.status(200).json(peticoes);
    } catch (error) {
      console.log(`[idpeticao error] ${error}`);
      res.status(500).json({ error: error });
      return;
    }
  }
}