import React from 'react'
import styled from 'styled-components'
import fondo from '../img/backencabezado.jpeg'

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
    min-height:100vh;
    p{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        font-family: 'Oswald', sans-serif;
    }

`

class Portafolio extends React.Component{
    render(){
        return (
            <Container>
                <Encabezado>
                    <p>Próximamente</p>
                </Encabezado>
            </Container>
        )
    }
}

export default Portafolio