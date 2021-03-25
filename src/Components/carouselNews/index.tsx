import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Title,
    Author,
    ContainerOpacity,
    ImageBack,
    Container
} from './styles';

const CarouselNews :React.FC =()=>{
    const ItemView = useSelector(state => state.News.News)
    const TotalItens = ItemView.length
    const [value, setValue]= useState(0);

    useEffect(()=>{
        setTimeout(handleAdd, 100);
    },[])
    const handleAdd = () => {
        var position = Math.floor(Math.random() * TotalItens) + 0
        setValue(position);        
    }; 

    return(
        <Container >
            <ImageBack source={{uri:ItemView[value].image}}>
                <ContainerOpacity onPress={handleAdd} >
                    <Title>{ItemView[value].title}</Title>
                    <Author>{ItemView[value].author}</Author>
                </ContainerOpacity>
            </ImageBack>
         </Container> 
    );
} 

export default CarouselNews;