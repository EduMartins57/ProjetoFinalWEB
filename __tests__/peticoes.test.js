const supertest = require('supertest');
const app = require('../index');

const apiAutica = '/api/autentica';
var token = "";

// TESTE DE AUTENTICAÇÃO DE USUÁRIOS
describe('auth', () => {
// TESTE 01
  describe('JWT TOKEN', () => {
    describe('USER AUTENTICADO', () => {
      it('RETURN 200', async () => {
        await supertest(app).post(apiAutica).send(
            {email: 'teste@gmail.com', 
            pass: 'teste123456789'}).expect(200).then((rest) => {

        token = rest.body;
        });
      });
    });
  });

// TESTE 02
  describe('NÃO AUTENTICADO', () => {
    it('RETURN 404', async () => {
      await supertest(app).post(apiAutica).send({
        email: 'teste@gmail.com', 
        pass: 'teste123456789'}).expect(404)
  });
});

});
