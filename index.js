const app = require('./config/server');
const routes = require('./app/routes/routes');

// Route ADD
routes.addPeticao(app);
// Route ASS
routes.assPeticao(app);
// Route AUTENTICA
routes.autenticaUser(app);
// Route DELETE
routes.deletePeticao(app);
// Route ID
routes.idPeticao(app);
// Route API
routes.apiPeticoes(app);
// Route REMOVE
routes.removeSign(app);
// Route UPDATE
routes.updatePeticao(app);

module.exports = app;