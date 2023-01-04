import React from 'react'

import classes from './Header.module.css'

const Header = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src="./meme.png" width={'100px'} alt="logo" />
        <h3>Meme Generator</h3>
      </div>
      <p>React Project</p>
    </nav>
  )
}

export default Header
