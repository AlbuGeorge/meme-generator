import React, { useState, useEffect } from 'react'

import classes from './Meme.module.css'

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
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

  const handleChange = (event) => {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <div className={classes.main__section}>
      <p className={classes.warning}>
        Some images will not fit the text, generate another image. 😊
      </p>
      <div className={classes.form}>
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button onClick={getRandomImage} className={classes.form__button}>
          Get a new meme image 🖼️
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
