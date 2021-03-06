import React from 'react'
import styled from 'styled-components'
import ImgCover from '../img/fondo_montana.jpg'
import Transition from 'react-transition-group/Transition'
import TechLogos from '../components/TechLogos'
import SocialIcons from '../components/SocialIcons'
const Container = styled.section`

`

const Hero = styled.div`
    background:url(${ImgCover});
    grid-area:body;
    background-size:cover;
    height:100vh;
    display:grid;
    justify-content:center;
    align-items:center;
    transition:all 0.4s ease-in-out;
    opacity:${props => props.estado === "entering" ? 0 : 1};
    transform:translateY(${props => props.estado === "entering" ? "-50px" : 0});
    

`
const Inner = styled.div`
    text-align:center;
    color:#fff000;
    p{
        
        font-family: 'Pangolin', cursive;
        font-size:60px;
        transition:all 0.5s ease-in-out;
        opacity:${props => props.estado === "entering" ? 0 : 1};
        transform:translateY(${props => props.estado === "entering" ? "-50px" : 0});
        margin-bottom:0;
        text-shadow:4px 4px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px  1px 0 #000,
        1px  1px 0 #000;
        @media (max-width:756px){
            font-size:40px;
        }

    }
    span{
        color:white;
        font-style:italic;
        display:block;
        
    }

`

export default class extends React.Component {
    render() {
        return (
            <Transition appear={true} in={true} timeout={400}>
                {state => (
                    <Hero estado={state}>
                        <Transition appear={true} in={true} timeout={500}>
                            {state2 => (
                                <Inner estado={state2}>
                                    <SocialIcons />
                                    <p>hola, me llamo Luis Solano</p>
                                    <span>Programador web, full-stack</span>
                                    <span>Javascript rules!</span>
                                    <TechLogos estado={state2} />
                                </Inner>
                            )}
                        </Transition>


                    </Hero>
                )}
            </Transition>

        );
    }
}