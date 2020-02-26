import axios from 'axios';

export default {
  getFilms: async () => {
    let res = await axios.get(`/api/film`);
    return res.data || [];
  },
  createFilm: async (film) => {
    await axios.post(`/api/film`, film);
  },
  deleteFilm: async (id) => {
    await axios.delete(`/api/film`, { params: { id } });
  }
}