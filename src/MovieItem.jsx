import './MovieItem.css'
import {useState} from 'react'

function MovieItem({movieImg, movieName, movieDesc}) {

    return <div class="movieContainer">
        <img src={movieImg ? movieImg :'src\\assets\\react.svg'} />
        <h3 class="movieName">{movieName ? movieName : "MOVIE NAME"}</h3>
        <p class="movieDesc">{movieDesc ? movieDesc : "Description Here"}</p>
    </div>
}

export default MovieItem;