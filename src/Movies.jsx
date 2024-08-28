import React from 'react'
import { useGlobalContext } from './contexts/Context'
import { NavLink } from 'react-router-dom';
 

const Movies = () => {
  const {movie} = useGlobalContext();
  return (
   <section className='Movie-page  '>
    <div className=' flex flex-wrap items-center justify-center '>
      {
        movie.map((curMovie)=>{
          const {imdbID,Title,Poster}  = curMovie;
          const movieName =  Title.substring(0,20);

          return(
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className='card w-80 h-96 border border-gray-400 p-4 m-4 rounded hover:bg-gray-300'>
                  <div className='car-info text-center transition-transform transform hover:scale-105 '>
                    <h2 className="text-lg font-semibold text-gray-800 italic">{movieName.length>=20 ? `${movieName}...` : movieName}</h2>
                    <img src={Poster} alt={imdbID}   className="w-56 h-56 mx-auto mb-4 mt-9 "  />
                  </div>
                </div>
              </NavLink>
          )
        })
      }
    </div>

   </section>     
  )
}

export default Movies