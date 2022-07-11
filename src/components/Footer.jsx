import { BiCameraMovie } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2>
        <Link to='/'>MoviesLib <BiCameraMovie /></Link>
      </h2>
      <div className={styles.socialFoot}>
        <a href="https://www.linkedin.com/in/nícolas-galdino-esmael-8370ab199" target="_blank">
          <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=flat" height="30" alt="linkedin logo" />
        </a>
        <a href="https://twitter.com/galdino_esmael" target="_blank">
          <img src="https://img.shields.io/static/v1?message=Twitter&logo=twitter&label=&color=1DA1F2&logoColor=white&labelColor=&style=flat" height="30" alt="twitter logo" />
        </a>
        <a href="https://www.instagram.com/galdino_esmael/" target="_blank">
          <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=flat" height="30" alt="instagramlogo" />
        </a>
        <a href="mailto:nicolasesmael1998@gmail.com" target="_blank">
          <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=flat" height="30" alt="gmail logo" />
        </a>
      </div>
    </div>
  )
}

export default Footer