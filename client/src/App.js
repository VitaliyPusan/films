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
    console.log(res);
    setFilms(res);
  }

  const addFilm = async () => {
    console.log("add clicked!");

    let res = await service.createFilm({
      title: "Hello",
      year: "2020",
      format: "DVD"
    });
    getFilms();
  }

  const renderFilm = film => {
    return (
      <li key={film._id}>
        <h3>{film.title}</h3>
        <p>{film.year}</p>
        <p>{film.format}</p>
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
    </div>
  );
}

export default App;