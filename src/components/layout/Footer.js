import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes['footer-container']}>
            <div className={classes['footer-box']}>
                <h1>About ReactMeals</h1>
                <p>Who We Are</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>
            <div className={classes['footer-box']}>
                <h1>Policy</h1>
                <p>Privacy</p>
                <p>Policy</p>
                <p>Terms</p>
                <p>Security</p>
            </div>
            <div className={classes['footer-box']}>
                <h1>Links</h1>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className={classes['footer-box']}>
                <h1>Social Links</h1>
                <p><i className="fa-brands fa-facebook"></i> Facebook</p>
                <p><i className="fa-brands fa-instagram"></i> Instagram</p>
                <p><i className="fa-brands fa-linkedin"></i> Linkedin</p>
                <p><i className="fa-brands fa-twitter"></i> Twitter</p>
            </div>
        </div>
    </div>
  )
}

export default Footer