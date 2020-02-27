const mongoose = require('mongoose');
const Film = mongoose.model('films');

module.exports = (app) => {

  // get list
  app.get(`/api/film`, async (req, res) => {
    let films = await Film.find();
    return res.status(200).send(films);
  });

  // find
  app.get(`/api/film/find`, async (req, res) => {
      let films = await Film.find(req.query);
      return res.status(200).send(films);
  });

  // create
  app.post(`/api/film`, async (req, res) => {
    let film = await Film.create(req.body);
    return res.status(201).send({
      error: false,
      film
    })
  });

  // delete
  app.delete(`/api/film/:id`, async (req, res) => {
    let film = await Film.findByIdAndRemove(req.params.id);
    return res.status(202).send({
      error: false,
      film
    })
  });

}