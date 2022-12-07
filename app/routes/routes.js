// PUXANDO DOS CONTROLLERS
const adicionaPeticoes = require('../controllers/addPeticoes');
const assPeticoes = require('../controllers/assPeticoes');
const autenticaUser = require('../controllers/autenticaUser');
const delPeticoes = require('../controllers/delPeticoes');
const idPeticoes = require('../controllers/idPeticoes');
const Peticoes = require('../controllers/peticoes');
const removePeticoes = require('../controllers/removePeticoes');
const updatePeticoes = require('../controllers/updatePeticoes');

module.exports = {
    // Route de adicionar novas peticoes
    addPeticao: (app) => {
        app.post('/api/adiciona/peticoes', adicionaPeticoes.addPeticao);
    },

    // Route de assinatura de peticao
    assPeticao: (app) => {
        app.post('/api/assinatura', assPeticoes.assPeticao);
    },

    // Route de autenticar Usuário 
    autenticaUser: (app) => {
        app.post('/api/autentica', autenticaUser.autenticUser);
    },

    // Route de delete de peticoes
    deletePeticao: (app) => {
        app.delete('/api/delete/peticoes', delPeticoes.deletePeticao);
    },

    // Route de ID de peticoes
    idPeticao:(app) => {
        app.get('/api/id/peticoes', idPeticoes.idPeticao);
    },

    // Route da API
    apiPeticoes: (app) => {
        app.get('/api/peticoes', Peticoes.apiPeticoes);
    },

    // Route de remover peticoes
    removeSign: (app) => {
        app.delete('/api/remove', removePeticoes.removeSign);
    },

    // Route de update de peticoes
    updatePeticao: (app) => {
        app.put('/api/update/peticoes', updatePeticoes.updatePeticao);
    }
}