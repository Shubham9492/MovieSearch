import React, {useState} from 'react';
import MovieCard from './movieCard.js'

export default function MovieSearch () {  
 
 //states-input query,movies 
 const [query,setQuery]=useState(''); 
 
 const [movies,setMovies] =useState([]);
 
 const movieSearch = async(e)=>{
 e.preventDefault(); 
 const url=`https://api.themoviedb.org/3/search/movie?api_key=30beaacf362b0810e1872ab515881c1d&language=en-US&query=${query}&page=1&include_adult=false`;

 try{
  const res= await fetch(url);
  const data =await res.json();
  setMovies(data.results);
}
  catch(er)
  {
    console.error(er);
  }
  }

 return (  
  <>
  <form className="form" onSubmit={movieSearch} >
  <label htmlFor="query" className="label">Movie Name</label> 
  <input className="input" type="text" name="query" placeholder="Enter the movie name" value={query} onChange={(e)=>setQuery(e.target.value)}/>
  <button type="submit" className="button">Search</button>
  </form>
  <div className='card-list'>
    {movies.filter(movie=>movie.poster_path).map(movie=>(
      <MovieCard movie={movie} key={movie.id}/> 
     ))}
  </div>
  </> 
 )
}