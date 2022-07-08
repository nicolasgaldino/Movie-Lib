import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import styles from './Navbar.module.css';


const Navbar = () => {

  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');

  };

  return (
    <>
      <nav className={styles.navbar}>
        <h2>
          <Link to='/'>MoviesLib <BiCameraMovie /></Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={search}
            placeholder='Busque um filme'
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type='submit'>
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </>
  )
}

export default Navbar