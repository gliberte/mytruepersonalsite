import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components'


import Bio from '../components/Bio'


const ContainerBlog = styled.div`
  display:grid;
  max-width:1000px;
  margin: 200px auto;
  grid-template-columns:3fr 12fr 5fr;
  grid-gap:10px 50px;
  *{
    grid-column: 2 / -2;
  }
  img{
    margin:0;
    grid-column: 1 / -1;
  }
  blockquote{
    grid-column: 1 / -1;
    font-size:35px;
    font-style:italic;
    text-align:center;
    margin:0;
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
        
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
