import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <h2>
          <Link to='/'>MoviesLib <BiCameraMovie /></Link>
        </h2>
        <form>
          <input type='text' placeholder='Busque um filme' />
          <button type='submit'>
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </>
  )
}

export default Navbar