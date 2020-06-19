import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return <header className={styles.header}>
    <img alt="Logo" src='https://eco-logros.es/wp-content/uploads/2018/11/cropped-eco-logros-1-1.jpg' />
    <div className={styles.loginBlock}>
      {props.isAuth ? props.login
      :<NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}

export default Header