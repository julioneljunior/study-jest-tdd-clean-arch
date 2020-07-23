module.exports = router => {
  router.get('/default', (req, res) => res.json('default route'));
};
