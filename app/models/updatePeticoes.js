const client = require("../../config/dbConnection");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");

module.exports = class updatePeticao {
    static async updatePeticao(update_id, data) {
        const id = { _id: new ObjectId(update_id) };
        const query = { $set: { titulo: data.titulo, descricao: data.descricao } };
        const buscaPeticao = await client.db("peticoes").collection("peticoes").findOne(id);
        if(buscaPeticao == null) return null;
        
        return await client.db("peticoes").collection("peticoes").updateOne(id, query);
      }
}