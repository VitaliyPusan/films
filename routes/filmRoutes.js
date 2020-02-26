const mongoose = require('mongoose');
const Film = mongoose.model('films');

module.exports = (app) => {

  app.get(`/api/film`, async (req, res) => {
    let films = await Film.find();
    return res.status(200).send(films);
  });

  app.post(`/api/film`, async (req, res) => {
    let film = await Film.create(req.body);
    return res.status(201).send({
      error: false,
      film
    })
  })

  app.delete(`/api/film`, async (req, res) => {
    let film = await Film.findByIdAndRemove(req.query.id);
    return res.status(202).send({
      error: false,
      film
    })
  })
}