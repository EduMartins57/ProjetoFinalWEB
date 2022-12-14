console.log('[server.js] Iniciando a configuração do servidor');
const express = require('express');
const expressSession = require('express-session');

const app = express();
const port = process.eventNames.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static('./public'));
app.set('views', './app/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressSession({
    secret: 'test',
    resave: false,
    saveUninitialized: false
}))

app.listen(port, () => {
    console.log('Servidor rodando na porta: ', port);
})

module.exports = app;
 