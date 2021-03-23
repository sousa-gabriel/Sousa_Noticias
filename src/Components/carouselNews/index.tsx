import React from 'react';
import {
    Title,
    Author,
    ContainerOpacity,
    ImageBack,
} from './styles';

import Fundo from '../../../assets/inter.png'

const CarouselNews :React.FC =()=>{
    return(
        <ImageBack source={Fundo}>
            <ContainerOpacity >
                <Title>Marcos Guilherme Atende Pedido da esposa</Title>
                <Author>Abel braga</Author>
            </ContainerOpacity>
        </ImageBack>
    );
} 

export default CarouselNews;