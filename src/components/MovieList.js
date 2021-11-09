import React from 'react'
import Movie from './Movie'


const MovieList = ({movies,search,rating}) => {
    return (
        <div className="movies">
            { movies.filter((elF)=> elF.rate>=rating && elF.title.toLowerCase().includes(search.toLowerCase())).map((movie) =>  <Movie movie={movie} /> )}
        </div>
    )
}

export default MovieList

