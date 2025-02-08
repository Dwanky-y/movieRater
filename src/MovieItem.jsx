import './MovieItem.css'
import {useState} from 'react'

function MovieItem({movieImg, movieName, movieDesc, rank}) {

    return <>
    
    <div className="movieContainer">
        <h3 class="movieRank">{rank}</h3>
        <img src={movieImg ? movieImg :'src\\assets\\react.svg'} />
        <div class="movieDetails">
            <h3 className="movieName">{movieName ? movieName : "MOVIE NAME"}</h3>
            <p className="movieDesc">{movieDesc ? movieDesc : "Description Here"}</p>
        </div>
    </div>
    </>

}

export default MovieItem;