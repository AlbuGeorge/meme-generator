import React from 'react'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <span>© George Albu {new Date().getFullYear()}</span>
      <div className={classes.socials}>
        <a className={classes.icons} href="https://github.com/AlbuGeorge">
          <IoLogoGithub size={23} />
        </a>
        <a
          className={classes.icons}
          href="https://www.linkedin.com/in/georgealbu24/">
          <IoLogoLinkedin size={23} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
