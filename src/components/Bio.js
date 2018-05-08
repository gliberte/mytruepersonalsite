import React from 'react'
import styled from 'styled-components'
import profilePic from '../img/me.jpg'

const ImageMe = styled.img`
  width:80px;
  height:80px;
  border-radius:50%;
`

class Bio extends React.Component {
  render() {
    return (
      <p>
        <ImageMe
          src={profilePic}
          alt={`Kyle Mathews`}
        />
        Autor <strong>Luis Solano</strong>. Vivo en Panama{' '}
        <a href="https://twitter.com/gliberte">
          Sigueme por Twitter
        </a>
      </p>
    )
  }
}

export default Bio
