import React from 'react'
import styled from 'styled-components'
import NodeLogo from '../img/node_logo.svg'
import ReactLogo from '../img/react.svg'
import ReactNativeLogo from '../img/react_native.png'
import GraphqlLogo from '../img/graphql_logo.svg'

const Contenedor = styled.div`
    margin-top:2em;
    transition:all 0.6s ease-in-out;
    opacity:${props => props.estado === "entering" ? 0 : 1};
    transform:translateY(${props => props.estado === "entering" ? "-50px" : 0});
`
const ImgLogos = styled.img`
    width:100px;
    height:100px;
    margin-right:20px;
    
`
const ReactLogoContainer = styled.div`
    display:inline-block;
    color:white;
    
    img{
        width:70px;
        height:70px;
    }
`
export default ({estado})=>(
    <Contenedor estado={estado}>
        <ImgLogos src={NodeLogo} alt="logo de node.js"/>
        <ReactLogoContainer>
            <img src={ReactLogo} alt=""/>
            <span>React</span>
        </ReactLogoContainer>
        <ReactLogoContainer>
            <img src={ReactNativeLogo} alt=""/>
            <span>React Native</span>
        </ReactLogoContainer>
        <ReactLogoContainer>
            <img src={GraphqlLogo} alt=""/>
            <span>GraphQL</span>
        </ReactLogoContainer>
    </Contenedor>
)