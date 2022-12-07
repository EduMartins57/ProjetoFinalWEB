const client = require("../../config/dbConnection");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const SECRET = "Edu@rd0M@r71nS"; 

module.exports = class autenticaUser {
    static async autenticaUser(data) {
        try {
        const query = { email: data.email, pass: data.pass };
        const autenticaUser = await client
            .db("peticoes").collection("users").findOne(query);
        const token = jwt.sign({ nome: autenticaUser.nome },SECRET,{expiresIn: "10h",});

        return token;
        } catch (error) {
        console.log(`[autenticaUser] Error: ${error}`);
        }
    }
}