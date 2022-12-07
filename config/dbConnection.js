const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.mongoURI);

/*
mongodb.connect(client,(erro,banco)=>{
    if(erro)throw erro;
    const dbo=banco.db("DSW")
    const obj={peticoes:" ",assinatura:" "}
    const colecao="PeticoesWEB"
    dbo.collection(colecao).insertOne(obj,(erro, resultado)=>{
        if(erro)throw erro
        console.log("Inserido uma nova coleção")
        banco.close();
    }) 
    dbo.collection(colecao).find({}).toArray((erro,resultado)=>{
        if(erro)throw erro
        console.log(resultado)
        banco.close()
    }) 
}) */

module.exports = client;