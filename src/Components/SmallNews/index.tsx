import React, { useState } from 'react';

import {
    ContainerNews,
    Title,
    Author,
    Background,
    ContainerImage,
    ContainerData,
} from './styles';

interface DataNewsItem{
    author:string,
    title:string,
    image:string,
    ID:string,
    onselected: (ID:string)=>string,
}

const SmallNews: React.FC<DataNewsItem> = ({ID, author,title,image, onselected}) => {
    const [isSelected, setIsSelected] = useState(false);


    const handleInputFocus = (ID:string) => {
        setIsSelected(!isSelected);
        onselected(ID);
    };
    return(
        <ContainerNews 
            onPress={()=>{handleInputFocus(ID)}}
            Selected = {isSelected}
        >
            <ContainerImage>
                <Background source={{uri:image}} />
            </ContainerImage>
            <ContainerData >
                <Title>{title}...</Title>
                <Author>{author}</Author>
            </ContainerData>
        </ContainerNews>
    );
}
export default SmallNews;
