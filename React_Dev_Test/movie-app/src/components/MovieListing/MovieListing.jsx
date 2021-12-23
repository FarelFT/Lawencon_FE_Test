import React from 'react';
import Slider from 'react-slick';
import { Settings } from '../../common/settings';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../redux/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className='movies-error'>
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <span className='movie-title'>Movies</span>
        <div className='movie-container'>
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className='show-list'>
        <span className='movie-title'>Shows</span>
        <div className='movie-container'>
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
