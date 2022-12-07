const client = require("../../config/dbConnection");
const { ObjectId } = require("mongodb");

module.exports = class PeticaoModel {
  static async apiPeticoes() {
    const cursor = await client.db("peticoes").collection("peticoes").find();
    const peticoes = await cursor.toArray();
    
    return peticoes;
  }
};
