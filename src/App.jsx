import './App.css' //adds styling from App.css
import MovieItem from "./MovieItem";
import { useState } from "react";

//https://education.github.com/git-cheat-sheet-education.pdf
function App() {
  
  const [movies, setMovies] = useState([
    { movieName: "Cool Movie", movieDesc: "This is a cool movie!" },
    { movieName: "Cool Movie 2", movieDesc: "This is a cool movie!" },
    { movieName: "Cool Movie 33", movieDesc: "This is a movie!" }
  ])

  return <>
  <h1 id="title">Movie Rater</h1>
  <div id="container">
    {movies.map((movie, index) => (
      <MovieItem
        key={index}
        movieName={movie.movieName}
        movieDesc={movie.movieDesc}
        rank = {index + 1}
      />
      ) )}
  </div>
  
  </>
}

export default App;