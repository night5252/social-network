import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to='/Profile' activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to='/Dialogs' activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to='/News' activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to='/Musice' activeClassName={classes.active}>Musice</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to='Settings' activeClassName={classes.active}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
