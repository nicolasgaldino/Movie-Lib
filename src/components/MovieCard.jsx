import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import styles from './MovieCard.module.css';

const imgURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <>
      <div className={styles.movieCard}>
        <img src={imgURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
          <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movies/${movie.id}`} ><span className={styles.details}>Detalhes</span></Link>}
      </div>
    </>
  )
}

export default MovieCard