import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-icons">
        <i class="fa-brands fa-lg fa-facebook-f"></i>
        <i class="fa-brands fa-lg fa-instagram"></i>
        <i class="fa-brands fa-lg fa-twitter"></i>
        <i class="fa-brands fa-lg fa-youtube"></i>
        </div>
        <ul>
            <li>Audio Description </li>
            <li>Help Centre </li>
            <li>Gift Cards </li>
            <li>Media Centre </li>
            <li>Investor Relations </li>
            <li>Jobs </li>
            <li>Terms of Use </li>
            <li>Privacy </li>
            <li>Legal Notices </li>
            <li>Cookie Preferences </li>
            <li>Corporate Information </li>
            <li>Contact Us</li>
        </ul>
        <div className="copyright-text">© 1997-2024 Netflix, Inc.</div>
    </div>
  )
}

export default Footer