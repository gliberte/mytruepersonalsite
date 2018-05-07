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
        Written by <strong>Kyle Mathews</strong> who lives and works in San
        Francisco building useful things.{' '}
        <a href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
