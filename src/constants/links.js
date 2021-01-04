import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink";

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "blog",
    url: "/blog/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link   
      cover
      direction="left"
      duration={1} 
      bg="#BC707B"
      to={link.url}>
      {link.text}
      </Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
