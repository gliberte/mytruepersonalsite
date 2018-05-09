import React from 'react'
import styled from 'styled-components'
import NodeLogo from '../img/node_logo.svg'
import ReactLogo from '../img/react.svg'
import ReactNativeLogo from '../img/native_logo.png'
import GraphqlLogo from '../img/graphql_logo.svg'
import MongoLogo from '../img/mongodb-logo-white.png'

const Contenedor = styled.div`
    margin-top:7em;
    transition:all 0.6s ease-in-out;
    opacity:${props => props.estado === "entering" ? 0 : 1};
    transform:translateY(${props => props.estado === "entering" ? "-50px" : 0});
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(70px,1fr));
    grid-gap:20px;
`
const ImgLogos = styled.img`
    
    
    
`
const ReactLogoContainer = styled.div`
    color:white;
    img{
        width:100%;
        max-height:70px;
    }
    

`
export default ({ estado }) => (
   
    <Contenedor estado={estado}>
        <ReactLogoContainer>
            <img src={NodeLogo} alt="logo de node.js" />
            <span>Node.js</span>
        </ReactLogoContainer>

        <ReactLogoContainer>
            <img src={ReactLogo} alt="" />
            <span>React</span>
        </ReactLogoContainer>
        <ReactLogoContainer>
            <img src={ReactLogo} alt="" />
            <span>React Native</span>
        </ReactLogoContainer>
        <ReactLogoContainer>
            <img src={GraphqlLogo} alt="" />
            <span>GraphQL</span>
        </ReactLogoContainer>
        <ReactLogoContainer>
            <img src={MongoLogo} alt="" />
            <span>MongoDB</span>
        </ReactLogoContainer>
    </Contenedor>
 
    
)