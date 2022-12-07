const client = require("../../config/dbConnection");
const { ObjectId } = require("mongodb");

module.exports = class addPeticoes {
    static async addPeticao(nomeUser, data) {
        try {
          const peticao = {
            titulo: data.titulo, descricao: data.descricao, autor: nomeUser, date: new Date(),
          };
          const addedPeticoes = await client
            .db("peticoes").collection("peticoes").insertOne(peticao);
          return addedPeticoes;
        } catch (error) {
          console.log(`[addPeticao] Error: ${error}`);
        }
      }
}