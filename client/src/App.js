import React, { useState, useEffect } from "react";

// SERVICES
import service from './service';

function App() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    if(!films) {
      getFilms();
    }
  })

  const getFilms = async () => {
    let res = await service.getFilms();
    setFilms(res);
  }

  const addFilm = async () => {
    await service.createFilm({
      title: "Irish man",
      year: "2020",
      format: "DVD",
      stars: ["Bred Pitt", "Marlon Brando", "Al Pacino", "Tom Hanks"]
    });
    await service.createFilm({
      title: "Charade",
      year: "1953",
      format: "DVD",
      stars: ["Audrey Hepburn", "Bred Pitt", "Cary Grant", "Walter Matthau", "James Coburn", "George Kennedy"],
    });
    await service.createFilm({
      title: "Get Shorty",
      year: "1995",
      format: "DVD",
      stars: ["John Travolta", "Danny DeVito", "Renne Russo", "Gene Hackman", "Dennis Farina"]
    });
    getFilms();
  }

  const deleteFilm = async (film) => {
    let res = await service.deleteFilm(film._id);
    getFilms();
  }

   const findFilm = async () => {
    let res = await service.findFilms({title: 'Hello'});
    setFilms(res);
  }

   const findFilmWithStar = async () => {
    let res = await service.findFilms({stars: 'Bred Pitt'});
    setFilms(res);
  }

  const renderFilm = film => {
    return (
      <li key={film._id}>
        <h3>{film.title}</h3>
        <p>{film.year}</p>
        <p>{film.format}</p>
        {film.stars.map(star => <span>{star} </span>)}
        <button onClick={() => deleteFilm(film)}>
          X
        </button>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(films && films.length > 0) ? (
          films.map(film => renderFilm(film))
        ) : (
          <p>No products found</p>
        )}
      </ul>
      <button onClick={addFilm}>
        Add new Film
      </button>

      <button onClick={findFilm}>
        Find Films
      </button>

      <button onClick={findFilmWithStar}>
        Find Films with Pitt
      </button>
    </div>
  );
}

export default App;