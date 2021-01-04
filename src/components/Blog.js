import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import Link from "gatsby-plugin-transition-link/AniLink";
const Blog = ({ id, title, image, date, slug }) => {
  return (
    <Link 
    cover
    direction="left"
    duration={1} 
    bg="#BC707B"  
    to={`/blogs/${slug}`} className="blog" aria-label="article-link"  key={id}>
      <article>
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        )}
        <div className="blog-card">
          <div className="blog-footer">
            <p>{date}</p>
          </div>
          <h4>{title}</h4>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}
export default Blog
