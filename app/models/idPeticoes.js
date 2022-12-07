const client = require("../../config/dbConnection");
const { ObjectId } = require("mongodb");

module.exports = class PeticaoModel {
  static async idPeticao(id) {
    const query = { _id: new ObjectId(id) };
    const cursor = await client.db("peticoes").collection("peticoes").findOne(query);

    return cursor;
  }
}