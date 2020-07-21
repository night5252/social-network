import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return <header className={styles.header}>
    <img alt="Logo" src='https://eco-logros.es/wp-content/uploads/2018/11/cropped-eco-logros-1-1.jpg' />
    <div className={styles.loginBlock}>
      {props.isAuth 
      ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
      :<NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}

export default Header