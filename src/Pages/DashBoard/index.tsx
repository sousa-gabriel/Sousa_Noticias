import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import CarouselNews from '../../Components/carouselNews';
import SmallNews from '../../Components/SmallNews';
import {
    Container
} from './styles'

const Dashboard : React.FC = ()=>{
    const ListNews = useSelector(state => state.News.News)
        console.log("+++++++++++++++++++++++++++++++");
        console.log(ListNews);
        console.log("+++++++++++++++++++++++++++++++");

    return (
        <Container>
            <CarouselNews/>
            <FlatList
                data={ListNews}
                renderItem={({item})=>(
                    <SmallNews />
                )}
            />
        </Container>
    );
}

export default Dashboard;