import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav>
        <h2>
          <Link to='/'>MoviesLib </Link>
        </h2>
        <Link to='/movies/1'>Lib </Link>
        <Link to='/search'>Movies</Link>
      </nav>
    </>
  )
}

export default App