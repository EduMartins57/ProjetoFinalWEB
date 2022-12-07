const client = require("../../config/dbConnection");
const { ObjectId } = require("mongodb");

module.exports = class PeticaoModel {

static async deletePeticao(delete_id) {
    const query = { _id: new ObjectId(delete_id) };
    const findPeticao = await client.db("peticoes").collection("peticoes").findOne(query);
    if(findPeticao == null) return null;

    return await client.db("peticoes").collection("peticoes").deleteOne(query);
  }
}