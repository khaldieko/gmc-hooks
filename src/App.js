import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/";
import { moviesList } from "./assets/MockData";
import SearchBar from "./Components/SearchBar";
import MovieList from "./Components/MovieList";
import Addmovie from "./Components/Addmovie";

function App() {
  const [movieList, setMovieList] = useState(moviesList);
  const [searchWord, setSearchWord] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);
  const handleSearch = (event) => setSearchWord(event.target.value);

  return (
    <div className="container">
      <div style={{ justifyContent: "space-evenly", width: "80%" }}>
        <SearchBar
          handleSearch={handleSearch}
          setRatingSearch={setRatingSearch}
          ratingSearch={ratingSearch}
          addMovie={addMovie}
        />
      </div>
      <MovieList
        moviesArray={
          searchWord
            ? movieList.filter((movie) =>
                movie.title.toLowerCase().includes(searchWord.toLowerCase())
              )
            : ratingSearch > 1
            ? movieList.filter((movie) => movie.rate >= ratingSearch)
            : movieList
        }
      />
      <Addmovie></Addmovie>
    </div>
  );
}

export default App;
