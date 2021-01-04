import React from "react"

const Hero = () => {

  return (
    <header className="hero">
      <svg className="hero-pattern" viewBox="0 0 2029.069 419.656">
        <path className="cls-1" d="M7779.24-695.445v0H6054.269v1.456H5911.412v8h-20v-9.558H5884v-20h20v9.558h7.412v8h142.857v1.543H7779.24v.022L7913.069-1011v419.656Zm-1894.37-.967h6.542v-9.572h11.719v-8.688h-18.26Z" transform="translate(-5884 1011)"/>
      </svg>

      <div className="section-center hero-center">
        <div className="hero-info">
          <div>
            <h1>Front-End Web Development,<br/>
                <span>Chewed Up </span>
            </h1>
            <p><i>React, Strapi, Gatsby,
                JavaScript, CSS, Node.js...</i>
              </p>
              <p>Personal blog by Nitin Rai. 
              </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
