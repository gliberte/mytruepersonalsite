import React from 'react'
import styled from 'styled-components'
import fondo from '../img/backencabezado.jpeg'

import barraza from '../img/barraza.jpg'

import Mongodb from '../img/mongodb-logo-white.png'
import grapql from '../img/graphql_logo.svg'

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

`
const ItemPortaforlio = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:20px;
    
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
                    <ContainerImage><img src={barraza} alt="barraza"/></ContainerImage>
                </ItemPortaforlio>
            </Container>
        )
    }
}

export default Portafolio