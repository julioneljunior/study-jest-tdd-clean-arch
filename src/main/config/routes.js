const router = require('express').Router();
const fastGlob = require('fast-glob');

module.exports = app => {
  app.use('/api', router);
  fastGlob.sync('**/src/main/routes/**routes.js').forEach(file => require(`../../../${file}`)(router));
};
