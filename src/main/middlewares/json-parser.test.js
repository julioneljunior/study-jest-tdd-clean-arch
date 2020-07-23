const request = require('supertest');
const app = require('../config/app');

describe('Json Parser Middleware', () => {
  test('Should parser body as json', async () => {
    app.post('/test_json_parser', (req, res) => {
      res.send(req.body);
    });

    await request(app).post('/test_json_parser')
      .send({ name: 'Elcio' })
      .expect({ name: 'Elcio' });
  });
});
