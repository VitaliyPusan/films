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

  app.delete(`/api/film/:id`, async (req, res) => {
    const {id} = req.params;

    let film = await Film.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      film
    })

  })

}