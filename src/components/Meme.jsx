import React, { useState, useEffect } from 'react'

import classes from './Meme.module.css'

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: 'Top Text',
    bottomText: 'Bottom Text',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  })
  const [allMemeImages, setAllMemeImages] = useState('')

  function getRandomImage(arr) {
    const memes = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memes.length)
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memes[randomNumber].url,
    }))
  }

  useEffect(() => {
    fetchMeme()
  }, [])

  const fetchMeme = async () => {
    const data = await fetch('https://api.imgflip.com/get_memes')
    const res = await data.json()
    setAllMemeImages(res)
  }

  return (
    <div className={classes.main__section}>
      <div className={classes.form}>
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
        <button onClick={getRandomImage} className={classes.form__button}>
          Get a new meme image 🖼
        </button>
        <div className={classes.imgCont}>
          <img className={classes.meme__img} src={meme.randomImage} />
          <div className={classes.top__text}>{meme.topText}</div>
          <div className={classes.bottom__text}>{meme.bottomText}</div>
        </div>
      </div>
    </div>
  )
}

export default Meme
