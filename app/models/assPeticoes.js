const client = require("../../config/dbConnection");
const { ObjectId } = require("mongodb");

module.exports = class assPeticao {
  static async autenticaUser(peticaoId, nomeUser) {
    try {
      const id = { _id: new ObjectId(peticaoId) };
      const queryToUpdate = { $push: { assinatura: nomeUser } };
      const queryToFind = { _id: new ObjectId(peticaoId), assinatura: nomeUser };
      const findPeticao = await client.db("peticoes").collection("peticoes").findOne(id);
      const hasSing = await client.db("peticoes").collection("peticoes").findOne(queryToFind);

      if (hasSing != null) return hasSing;
      if(!findPeticao) return null;

      return await client.db("peticoes").collection("peticoes").updateOne(id, queryToUpdate);
    } catch (error) {
      console.log(`[autenticaUser] Error: ${error}`);
    }
  }
}