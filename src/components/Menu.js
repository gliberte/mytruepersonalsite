import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import MyLogo from '../img/mylogo.png'

const Container = styled.div`
    grid-area:menu;
    display:grid;
    grid-template-columns:1fr 2fr;
    align-items:center;
    padding:0;
    width:100%;
    border-bottom:1px solid rgba(255,255,255,0.8);
    z-index:1;
    background:rgba(0,0,0,1);
    @media (max-width:600px){
        grid-template-columns:1fr;

    }
    

`
const MyLink = styled(Link)`    

    color:white;
    &:visited{
        color:yellow;
    }
    &:hover{
        color:white;
    }
    
`
const LogoContainer = styled.div`
  
    @media (max-width:756px){
        margin:0 auto;
        text-align:center;
    }
`
const ContainerMenu = styled.div`
    >div{
        display:grid;
        
        grid-template-columns:repeat(3,200px);
        justify-content:end;
        @media (max-width:600px){
            grid-template-columns:repeat(3,100px);
            justify-content:center;
        }
    }
    
    @media (max-width:756px){
        margin:0 auto;
    }
`
const MyLogoImg = styled.img`
    width:60px;
    height:60px;
    @media (max-width:756px){
        width:70px;
        height:60px;
    }
`

export default () => (
    <Container>
        <LogoContainer>
            <Link to="/"><MyLogoImg src={MyLogo} alt="" /></Link>
        </LogoContainer>
        <ContainerMenu>
            <div>
                <div><MyLink to="/">Home</MyLink></div>
                <div><MyLink to="/blog">Blog</MyLink></div>
                <div><MyLink to="/portafolio">Portafolio</MyLink></div>
            </div>
        </ContainerMenu>
    </Container>
)