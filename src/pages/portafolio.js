import React from 'react'
import styled from 'styled-components'
import fondo from '../img/backencabezado.jpeg'

import barraza from '../img/barraza.jpg'
import yarisite from '../img/yarisite.jpg'

import Mongodb from '../img/mongodb-logo-white.png'
import grapql from '../img/graphql_logo.svg'
import Hildesite from '../img/hildesite.jpg'

const Container = styled.div`

`
const Encabezado = styled.div`
    width:100%;
    height:400px;
    background:url(${fondo}) no-repeat;
    background-size:cover;
    color:white;
    font-size:46px;
    position:relative;
    p{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        font-family: 'Oswald', sans-serif;
    }

    @media (max-width:600px){
        height:300px;
        font-size:36px;
    }

`
const ItemPortaforlio = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:20px;
    margin:100px auto;

    @media (max-width:600px){
        grid-template-columns:1fr;
    }
    
`
const Descripcion = styled.p`
    padding:30px;
    font-family: 'Raleway', sans-serif;
`
const Tecnologias = styled.div`
    display:flex;
    background:#B0BEC5;
    padding:10px;
    p{
        background:#26A69A;
        height:40px;
        line-height:40px;
        margin-right:10px;
        padding:0 10px;
        border-radius:7px;
        transition:0.3s;
        
    }
    p a{
        color:white;
    }
    p:hover{
        box-shadow:0 5px 7px 0 rgba(0,0,0,0.6);
    }

`
const ContainerImage = styled.div`
    box-shadow:0 5px 7px 0 rgba(0,0,0,0.6);
    margin:0 50px;

    @media (max-width:600px){
        margin:10px 10px;
    }
`


class Portafolio extends React.Component{
    render(){
        return (
            <Container>
                <Encabezado>
                    <p>Algunos Proyectos Realizados</p>
                </Encabezado>
                <ItemPortaforlio>
                    
                    <div>
                        <h2>El Bochinchoso, WebSite de caricaturas</h2>
                        <Descripcion>Sitio y aplicación web con contenido servido mediante modernas tecnologías web tales como React.js, GraphQL, MongoDb y Node.js. Mas que un sitio web, 
                            es una aplicación web dinámica. Los usuarios que se registran pueden marcar sus caricaturas favoritas. El trabajo artístico pertenece al genial caricaturista panameño 
                            Hildebrando Sucre. Sus caricaturas y ocurrencias son de corte político - social.

                        </Descripcion>
                        <Tecnologias>
                            
                            <p><a href="http://reactjs.org" target="_blank">React.js</a></p>
                            <p><a href="http://nodejs.org" target="_blank">Node.js</a></p>
                            <p><a href="http://graphql.org" target="_blank">GraphQL</a></p>
                            <p><a href="http://reactjs.org" target="_blank">React.js</a></p>
                            <p><a href="http://heroku.com" target="_blank">Heroku</a></p>
                            <p><a href="http://cloudinary.com" target="_blank">Cloudinary</a></p>
                        </Tecnologias>


                    </div>
                    <ContainerImage> <a href="https://youtu.be/PgLM_RzmKB8" target="_blank"><img src={Hildesite} alt="yarisite"/></a></ContainerImage>
                </ItemPortaforlio>
                <ItemPortaforlio>
                    <div>
                        <h2>Mapa Interactivo para análisis de ventas</h2>
                        <Descripcion>Aplicacion web de uso interno para análsis de ventas por regiones. 
                            La aplicación esta conformada por una capa servidor en Node.Js que se conecta 
                            a una base de datos transaccional en SQL Server. Utiliza el API de desarrollo de MapBox Gl.

                        </Descripcion>
                        <Tecnologias>
                            <p><a href="http://nodejs.org" target="_blank">Node.js</a></p>
                            <p><a href="http://graphql.org" target="_blank">GraphQL</a></p>
                            <p><a href="http://reactjs.org" target="_blank">React.js</a></p>
                            <p><a href="http://mapbox.com" target="_blank">MapBox</a></p>
                        </Tecnologias>


                    </div>
                    <ContainerImage> <a href="https://youtu.be/eopJSG9d6zs" target="_blank"><img src={barraza} alt="barraza"/></a></ContainerImage>
                </ItemPortaforlio>
                <ItemPortaforlio>
                    
                    <div>
                        <h2>Web Site personal y portafolio</h2>
                        <Descripcion>Sencillo website para una profesional en diseño gráfico. Portafolio de trabajo. Desplegado en produccion a través de Netlify

                        </Descripcion>
                        <Tecnologias>
                            
                            <p><a href="http://reactjs.org" target="_blank">React.js</a></p>
                            <p><a href="http://netlify.com" target="_blank">Netlify</a></p>
                        </Tecnologias>


                    </div>
                    <ContainerImage> <a href="https://youtu.be/4TSw7wAo2G8" target="_blank"><img src={yarisite} alt="yarisite"/></a></ContainerImage>
                </ItemPortaforlio>
            </Container>
        )
    }
}

export default Portafolio