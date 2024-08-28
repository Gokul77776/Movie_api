import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from './contexts/Context';

const Movie = () => {
  const { id } = useParams();
  const { movie } = useGlobalContext(); // Get the list of movies from context

  // Ensure movie is an array and find the movie by id
  const selectedMovie = movie && Array.isArray(movie) 
    ? movie.find(movieItem => movieItem.imdbID === id)
    : null;

  if (!selectedMovie) {
    return <p className="text-gray-500">Movie not found. Please select a movie to view details.</p>;
  }

  const { Title, Poster, Year,Type } = selectedMovie;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-md w-full">
        <img src={Poster} alt={Title} className="w-full h-96 object-cover rounded-t-lg mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Title:{Title}</h2>
        <p className="text-gray-600 text-base">Year:{Year}</p>
        <p className='text-lg'>Type:{Type}</p>
      </div>
    </div>
  );
};

export default Movie;
