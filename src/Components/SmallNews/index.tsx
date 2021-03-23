import React from 'react';
import {
    ContainerNews,
    Title,
    Author,
    Background,
    ContainerImage,
    ContainerData,
} from './styles';

const SmallNews: React.FC = () => {
    return(
        <ContainerNews>
            <ContainerImage>
                <Background source={{uri:"https://cdn1.staticpanvel.com.br/produtos/15/706040-15.jpg?ims=480x"}} />
            </ContainerImage>
            <ContainerData >
                <Title>Marcos Guilherme Atende Pedido da esposa</Title>
                <Author>Abel braga</Author>
            </ContainerData>
        </ContainerNews>
    );
}
export default SmallNews;
