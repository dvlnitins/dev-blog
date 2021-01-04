import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink";
const Navbar = () => {
  return (
  <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
    <Link 
            cover
            direction="left"
            duration={1} 
            bg="#BC707B" 
            to={`/`} 
            aria-label="home-btn">
      <svg className="logo"  width="30.877" height="37" viewBox="0 0 50.877 57">
          <g transform="translate(-20770.41 675.286)">
            <path id="Path_1" data-name="Path 1" d="M35.574,57,16.949,32.483V28.739l-1.647-2.5V48.452L0,29.413V0H15.3L33.927,24.517v3.745l1.647,2.5V8.548l15.3,19.039V57Z" transform="translate(20770.41 -675.286)"/>
          </g>
      </svg>
    </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
