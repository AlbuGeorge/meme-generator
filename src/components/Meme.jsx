import React, { useState, useEffect } from 'react'

import classes from './Meme.module.css'

const Meme = () => {
  const [memeUrl, setMemeUrl] = useState('')

  function randomImage(arr) {
    const memes = arr.data.memes
    const randomMeme = Math.floor(Math.random() * memes.length)
    return memes[randomMeme].url
  }

  useEffect(() => {
    fetchMeme()
  }, [])

  const fetchMeme = async () => {
    const data = await fetch('https://api.imgflip.com/get_memes')
    const res = await data.json()
    setMemeUrl(randomImage(res))
  }

  return (
    <div className={classes.main__section}>
      <div className={classes.form}>
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
        <img className={classes.meme__img} src={memeUrl} />
        <button className={classes.form__button}>Get a new meme image 🖼</button>
      </div>
    </div>
  )
}

export default Meme
