import React from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import styles from './MovieGrid.module.css';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = React.useState([]);
  const query = searchParams.get('q')

  const getSearchMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.results);
  }

  React.useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchMovies(searchWithQueryURL);
  }, [query])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Resultados para: <span className={styles.queryText}>{query}</span>
      </h2>
      <div className={styles.moviesContainer}>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  )
}

export default Search