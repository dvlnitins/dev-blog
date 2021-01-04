import React from "react"
import {
  RiLinkedinLine,
  RiDribbbleLine,
  RiGithubLine,
  RiInstagramLine,
} from "react-icons/ri"

const data = [
  
  {
    id: 1,
    icon: <RiGithubLine className="social-icon"></RiGithubLine>,
    url: "http://github.com/dvlnitins",
  },
  {
    id: 2,
    icon: <RiLinkedinLine className="social-icon"></RiLinkedinLine>,
    url: "https://www.linkedin.com/in/dvlnitins",
  },
  {
    id: 3,
    icon: <RiDribbbleLine className="social-icon"></RiDribbbleLine>,
    url: "https://dribbble.com/dvlnitins",
  },
  {
    id: 4,
    icon: <RiInstagramLine className="social-icon"></RiInstagramLine>,
    url: "http://instagram.com/dvlnitins",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" aria-label="social-link" >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
