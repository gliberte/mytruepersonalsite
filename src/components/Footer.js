import React from 'react'
import styled from 'styled-components'
import SocialIcons from './SocialIcons'

const Footer = styled.footer`
    grid-row: 2/3;
`
const Contenedor = styled.div`
    margin:0;
    width:100%;
    padding:2em;
    background:#546E7A;
    color:white;
    text-align:center;
    div{
        height:100%;
    }


`
const ContentEnd = styled.div`
    background:#263238;
    font-size:12px;
    font-weight:bold;
    color:white;
    padding:10px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    justify-items:start;
    align-items:center;
    p{
        margin:0;
    }


`

const Ul = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    li{
        display:inline-block;
        margin-right:2em;
    }
`

export default () => (
    <Footer>
        <Contenedor>
            <div>
                <Ul>
                    <li><a href="https://www.facebook.com/luis.solano27" target="_blank"><i className="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href="https://twitter.com/gliberte" target="_blank"><i className="fa fa-twitter fa-2x"></i></a></li>
                    <li><a href="https://www.instagram.com/gliberte/" target="_blank"><i className="fa fa-instagram fa-2x"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/luis-solano-07296657/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UC-oGMEod30SgMQ1JYlMDrtg" target="_blank"><i className="fa fa-youtube fa-2x"></i></a></li>
                </Ul>
            </div>
        </Contenedor>
        <ContentEnd>
        <p>2018 &copy; Luis A. Solano</p>
        <p>Email: <a href="mailto:luis.solano.l@gmail.com">luis.solano.l@gmail.com</a></p>
        <p>Cel.: (507) 6998-3921</p>
        
        </ContentEnd>
    </Footer>

)