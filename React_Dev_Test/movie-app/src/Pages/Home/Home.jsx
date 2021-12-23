import { useEffect } from 'react';
import MovieListing from '../../components/MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../redux/movies/movieSlice';
import './Home.scss'

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Star wars';
  const showText = 'Friends';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div className='home'>
      <MovieListing />
    </div>
  );
};

export default Home;
