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
    background:rgba(156,204,101 ,0.6);
    @media (max-width:600px){
        grid-template-columns:1fr;

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
    ul li{
        display:inline-block;
        margin-right:20px;

    }
    ul li a{
        text-decoration:none;
        color:#fff;
        font-size:16px;
        font-weight:lighter;
    }
    ul li a:hover{
        color:#fff000;
        text-shadow:0 0 20px #fff000;
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
                <div><Link to="/">Home</Link></div>
                <div><Link to="/blog">Blog</Link></div>
                <div><Link to="/portafolio">Portafolio</Link></div>
            </div>
        </ContainerMenu>
    </Container>
)