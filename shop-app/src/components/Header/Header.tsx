
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Nav from './Nav/Nav'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo}>
            <Link to={"/"}>
              <h2>Shop</h2>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header