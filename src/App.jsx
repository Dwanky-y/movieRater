import './App.css' //adds styling from App.css
import MovieItem from "./MovieItem";
import { useState } from "react";

//https://education.github.com/git-cheat-sheet-education.pdf
function App() {
  
  const [movies, setMovies] = useState([
    <MovieItem movieName = {"Cool Movie"} movieDesc={"This is a cool movie!"}></MovieItem>,
    <MovieItem movieName = {"Cool Movie 2"} movieDesc={"This is a cool movie!"}></MovieItem>,
    <MovieItem movieName = {"Cool Movie 33"} movieDesc={"This is a movie!"}></MovieItem>
  ])

  return <>
  <h1 id="title">Movie Rater</h1>
  <div id="container">
    {movies.map((item) => item)}
  </div>
  
  </>
}

export default App;