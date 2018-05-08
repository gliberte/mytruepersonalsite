import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin-bottom:2em;
`
const BotonSocial = styled.a`
    color:white;
    font-size:20px;
    margin-right:2em;
    display:inline-block;
    transition:all ease-in-out 0.3s;
    &:hover{
        color:#fff000;
    }
    @media (max-width:756px){
        font-size:15px;
    }

`

export default ({estado})=>(
    <Container>
        <BotonSocial href="https://www.facebook.com/luis.solano27" target="_blank"><i className="fa fa-facebook fa-2x"></i></BotonSocial>
        <BotonSocial href="https://twitter.com/gliberte" target="_blank"><i className="fa fa-twitter fa-2x"></i></BotonSocial>
        <BotonSocial href="https://www.instagram.com/gliberte/" target="_blank"><i className="fa fa-instagram fa-2x"></i></BotonSocial>
        <BotonSocial href="https://www.linkedin.com/in/luis-solano-07296657/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></BotonSocial>
        <BotonSocial href="https://www.youtube.com/channel/UC-oGMEod30SgMQ1JYlMDrtg" target="_blank"><i className="fa fa-youtube fa-2x"></i></BotonSocial>
    </Container>
)