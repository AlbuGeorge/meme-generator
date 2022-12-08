import React from 'react'

import classes from './Meme.module.css'

const Meme = () => {
  return (
    <form className={classes.form}>
      <div>
        <input type="text" name="headText" id="headText" />
        <input type="text" name="footerText" id="footerText" />
      </div>
      <input type="submit" value="Get a new meme image  🖼" />
    </form>
  )
}

export default Meme
