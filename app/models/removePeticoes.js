const client = require("../../config/dbConnection");
const { ObjectId } = require("mongodb");

module.exports = class removePeticao {
    static async removeSign(peticaoId, nomeUser) {
        try {
        const id = { _id: new ObjectId(peticaoId) };
        const query = { $pull: { assinatura: nomeUser } };
        const buscaPeticao = await client.db("peticoes").collection("peticoes").findOne(id);
        if(!buscaPeticao) return null;

        return await client.db("peticoes").collection("peticoes").updateOne(id, query);
        } catch (error) {
        console.log(`[autenticaUser] Error: ${error}`);
        }
    }
}