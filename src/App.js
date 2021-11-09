import {Data }from './Data'
import {useState } from 'react';
import './App.css';
import MovieList from './components/MovieList'
import NavBar from './components/NavBar';
import AddMovie from './components/AddMovie'


function App() {
  const [movies, setMovies] = useState(Data)
  const [search, setSearch] = useState("")
  const [rating, setRating] = useState(0)
  
  const add = (newMovie) =>{
    setMovies([...movies,newMovie])
    
  }
  const searchMovie=(e)=>{
    setSearch(e.target.value)
  }

  const rateMovie =(x)=> {
    setRating(x)
      }
  return (
    <div className="App">
      <NavBar farkes={searchMovie}  nejma={rateMovie} />
      <MovieList movies={movies} search={search} rating={rating} />
      <AddMovie add={add}/>
    </div>
  );
}

export default App;
