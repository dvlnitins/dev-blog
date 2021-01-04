import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <hr />
        <a href="mailto:nitinrai535@gmail.com" target="_self" rel="noreferrer noopener" className="strike">
          <span><h2>LET'S TALK!</h2></span>
        </a>
      </div>
        <h4>
        &copy;{new Date().getFullYear()} <a href="https://dvlnitins.in"><span>dvlnitins</span></a>
        </h4>
    </footer>
  )
}
export default Footer
