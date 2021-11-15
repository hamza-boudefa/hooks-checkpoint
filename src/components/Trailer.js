import React from 'react'
import Iframe from 'react-iframe'
import { useParams } from 'react-router-dom'

const Trailer = ({movies}) => {
    const {id}=useParams()
     const movie =  movies.find((el)=> el.id==id)
     
    return (
        <div> 
      <h1> {movies.title}</h1>
<Iframe width="1309" height="480" src={movie.trailer}  title="YouTube video player" ></Iframe>
        </div>
    )
}

export default Trailer
