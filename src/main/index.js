const env = require('./config/env');
const MongoHelper = require('../infra/helpers/mongo-helper');

MongoHelper.connect(env.mongoUrl)
  .then(() => {
    const app = require('./config/app');
    app.listen(3000, () => console.log('Server Running!'));
  })
  .catch(console.error);
