import './App.css' //adds styling from App.css
import MovieItem from "./MovieItem";
import { useState } from "react";

function App() {
  return <>
  <h1 id="title">Movie Rater</h1>
  <div id="container">
    <MovieItem movieName = {"Cool Movie"} movieDesc={"This is a cool movie!"}></MovieItem>
    <MovieItem movieName = {"Cool Movie"} movieDesc={"This is a cool movie!"}></MovieItem>
    <MovieItem movieName = {"Cool Movie"} movieDesc={"This is a cool movie!"}></MovieItem>
    <MovieItem movieName = {"Cool Movie"} movieDesc={"This is a cool movie!"}></MovieItem>
  </div>
  
  </>
}

export default App;