import React from 'react'
import styled from 'styled-components'

const Contenedor = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    background:rgba(0,0,0,0.5);
    color:white;
    p{
        text-align:center;
        font-family: 'Acme', sans-serif;
    }

`

export default ()=>(
    <Contenedor>
        <p>Luis A. Solano &copy; 2018</p>
    </Contenedor>
)