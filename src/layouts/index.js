import React from 'react'
import Link from 'gatsby-link'
import styled,{injectGlobal} from 'styled-components'
import 'font-awesome/css/font-awesome.css'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Acme|Pangolin');
@import url('https://fonts.googleapis.com/css?family=Oswald');
@import url('https://fonts.googleapis.com/css?family=Raleway');
  body{
    margin:0;
    width:100%;
    height:100vh;
  }
`

const Contenedor = styled.div`
  margin:0;
  padding:0;
  width:100%;
  height:100%;
  display:grid;
  grid-template-rows:auto;
  grid-template-areas:
    "menu"
    "body"
    "footer";
  
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
        <Menu/>
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
