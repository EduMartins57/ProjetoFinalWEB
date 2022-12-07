const Peticao = require("../models/peticoes");

module.exports = class Peticoes {
  static async apiPeticoes(req, res, next) {
    try {
      const peticoes = await Peticao.getAllPeticoes();
      if (!peticoes) {
        res.status(404).json(`Não existe petição cadastrado.`);
        return;
      }
      res.status(200).json(peticoes);
    } catch (error) {
      console.log(`[apipeticoes error] ${error}`);
      res.status(500).json({ error: error });
      return;
    }
  }
};