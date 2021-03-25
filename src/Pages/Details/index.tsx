import React from 'react';
import { useSelector } from 'react-redux';
import {
    Container,
    ContainerDetails,
    ContainerImage,
    ContainerData,
    Title,
    Author,
    Description
} from './styles';
interface InterfaceProps{
    onClose :()=>void;
    Id: string;
}
const Details: React.FC <InterfaceProps>= ({onClose, Id}) => {
    const ItemView = useSelector(state => state.News.News)
    const ItemSelecionado = ItemView.findIndex(item => item.id === Id );
    const ItemNews = ItemView[ItemSelecionado]
    return (
        <Container>
            <ContainerDetails>
                <ContainerImage source={{uri:ItemNews.image}} />
                <ContainerData>
                    <Title >{ItemNews.title}</Title>
                    <Description>{ItemNews.description}</Description>
                    <Author >{ItemNews.author}</Author>
                </ContainerData>
            </ContainerDetails>
        </Container>
    );
}
export default Details;