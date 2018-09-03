import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components'


import Bio from '../components/Bio'


const ContainerBlog = styled.div`
  max-width:95%;
  margin: 200px auto;
  grid-area:body;
  

`
const Encabezado = styled.div`

  
  margin:0 auto;

`
const Fecha = styled.p`
  font-size:18px;
  font-style:italic;
  
`
const Contenido = styled.div`
  display:grid;
  
  grid-template-columns:2fr 8fr 2fr;
  p,h1,h2,h3,h4,div{
    grid-column:2/-2;
  }
  blockquote{
    grid-column:1/2;
  }
  .imagen{
   
    width:80%;
    margin:0 auto;
    
    img{
      
      width:100%;
      border:1px solid #ccc;
    }
  }

  @media (max-width:600px){
    grid-template-columns:1fr;
    p,h1,h2,h3,h4,div{
      grid-column:1/-1;
    }
    blockquote{
    grid-column:1/-1;
  }
    pre{
      grid-column:1/-1;
    }
  }
 

`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <ContainerBlog>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Encabezado>
          <h1>{post.frontmatter.title}</h1>
          <Fecha>{post.frontmatter.date}</Fecha>
        </Encabezado>

        <Contenido dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Bio />

        <ul>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </ContainerBlog>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "LL",locale:"es")
      }
    }
  }
`
