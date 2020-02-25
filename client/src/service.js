import axios from 'axios';

export default {
  getFilms: async () => {
    let res = await axios.get(`/api/film`);
    return res.data || [];
  },
  createFilm: async (film) => {
    let res = await axios.post(`/api/film`, film);
  }
}