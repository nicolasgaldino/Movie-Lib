import React from "react";
import { useParams } from 'react-router-dom';
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import MovieCard from '../components/MovieCard';
import styles from './Movies.module.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMG;

const Movies = () => {

  const { id } = useParams();
  const [movie, setMovie] = React.useState(null);

  const getMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

  React.useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL);
  }, []);

  return (
    <>
      <div className={styles.moviePage}>
        {movie && (
          <>
            <div className={styles.movieCard}>
              <img src={imgURL + movie.poster_path} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>
                <FaStar /> {movie.vote_average}
              </p>
            </div>
            <p className={styles.tagline}>{movie.tagline}</p>
            <div className={styles.info}>
              <h3>
                <BsWallet2 /> Orçamento
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>

            <div className={styles.info}>
              <h3>
                <BsGraphUp /> Receita
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>

            <div className={styles.info}>
              <h3>
                <BsHourglassSplit /> Duração
              </h3>
              <p>{movie.runtime} minutos.</p>
            </div>

            <div className={styles.description}>
              <h3>
                <BsFillFileEarmarkTextFill /> Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Movies