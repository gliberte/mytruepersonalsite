import React from 'react'
import Link from 'gatsby-link'
import styled,{injectGlobal} from 'styled-components'
import 'font-awesome/css/font-awesome.css'
import Footer from '../components/Footer'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Acme|Pangolin');;
  body{
    margin:0;
  }
`

const Contenedor = styled.div`
  margin:0;
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/blog') {
      header = (
        <h3>
          <Link to={'/'}>
            Gatsby Starter Blog
          </Link>
        </h3>
      )
    } 
      
    
    return (
      <Contenedor>
        {children()}
        <Footer/>
      </Contenedor>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
