import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import MyLogo from '../img/mylogo.png'

const Container = styled.nav`
    position:fixed;
    top:0;
    left:0;
    margin:0;
    padding:0;
    width:100%;
    height:80px;
    border-bottom:1px solid rgba(255,255,255,0.8);
    z-index:1;
    background:rgba(156,204,101 ,0.6);
    

`
const LogoContainer = styled.div`
    float:left;
    color:#fff;
    font-size:16px;
    line-height:80px;
    padding:0 6em;
    letter-spacing:1px;
    @media (max-width:756px){
        float:none;
        margin:0 auto;
        text-align:center;
    }
`
const ContainerMenu = styled.div`
    float:right;
    line-height:50px;
    margin:0 6em;
    ul{
        list-style:none;
    }
    ul li{
        display:inline-block;
    }
    ul li a{
        text-decoration:none;
        color:#fff;
        font-size:16px;
        font-weight:lighter;
        padding:0 20px;
    }
    ul li a:hover{
        color:#fff000;
        text-shadow:0 0 20px #fff000;
    }
    @media (max-width:756px){
        float:none;
        margin:0 auto;
    }
`
const MyLogoImg = styled.img`
    height:60px;
    color:white;
    margin-top:10px;
    @media (max-width:756px){
        width:120px;
        height:40px;
    }
`

export default () => (
    <Container>
        <LogoContainer>
            <Link to="/"><MyLogoImg src={MyLogo} alt="" /></Link>
        </LogoContainer>
        <ContainerMenu>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/portafolio">Portafolio</Link></li>
            </ul>
        </ContainerMenu>
    </Container>
)