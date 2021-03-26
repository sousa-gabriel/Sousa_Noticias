import React from 'react';
import {
    Container,
    Title
} from './styles'

import Fundo from '../../../assets/Fundo.png';

const Started: React.FC = () => { 
    return (
        <Container source={Fundo}>
            <Title>
                Aperte o botão para inserir sua noticia!
            </Title>
        </Container>
    );
}

export default Started;