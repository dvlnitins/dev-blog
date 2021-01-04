import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Title from "../components/Title"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa"


const ComponentName = ({ data }) => {
  const { content, title, image, slug, category, date, desc } = data.blog
  
  const baseUrl = encodeURIComponent('https://dvlnitins.netlify.app/blogs/')
  
  const tweet = encodeURIComponent(title);

  return (
    <Layout>
    <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
        <Title title={title} />
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="detail-img" />
        )}
        <div className="blog-footer">
          <p className="stack">{category}</p>
            <p>{date}</p>
        </div>
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
        </div>

        <div class="btn_wrap center-btn">
              <span>Share</span>
              <div class="container">
                  <a href={'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + slug} target="blank" rel="noopener noreferrer">
                  <FaFacebookF className="shareIcon"></FaFacebookF>
                  </a>
                  <a href={'https://twitter.com/intent/tweet?url=' + baseUrl + slug + "&text=" + tweet} target="blank" rel="noopener noreferrer">
                  <FaTwitter className="shareIcon"></FaTwitter>
                  </a>
                  <a href={'https://www.linkedin.com/shareArticle?mini=true&url=' + baseUrl + slug} target="blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="shareIcon"></FaLinkedinIn>
                  </a>
                  <a href={'https://t.me/share/url?url=' + baseUrl + slug + "&text=" + tweet} target="blank" rel="noopener noreferrer">
                  <FaTelegramPlane className="shareIcon"></FaTelegramPlane>
                  </a>
                  <a href={'whatsapp://send?text=' + baseUrl + slug} target="blank" rel="noopener noreferrer">
                  <FaWhatsapp className="shareIcon"></FaWhatsapp>
                  </a>
              </div>
          </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      category
      date(formatString: "MMMM Do, YYYY")
      slug
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ComponentName
