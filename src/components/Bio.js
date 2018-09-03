import React from 'react'
import styled from 'styled-components'
import profilePic from '../img/me.jpg'

const ImageMe = styled.img`
  width:80px;
  height:80px;
  border-radius:50%;
  
`
const Container = styled.p`
  @media (max-width:600px){
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:10px;
  }
`

class Bio extends React.Component {
  render() {
    return (
      <Container>
        <ImageMe
          src={profilePic}
          alt={`Kyle Mathews`}
        />
        <p>Autor: <strong>Luis Solano</strong>. Vivo en Panama{' '}
        <a href="https://twitter.com/gliberte">
          Sigueme por Twitter
        </a></p>
      </Container>
    )
  }
}

export default Bio
