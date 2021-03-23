import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import {
    Container,
    ContainerNews,
    Title,
    Author,
    Background
} from './styles'
import Fundo from '../../../assets/inter.png' 

const Dashboard : React.FC = ()=>{
    return (
        <Container>
            <ImageBackground source={Fundo} style={{width: '100%', height:'80%'}}>
                <View style={{width: '100%', height:'80%', backgroundColor:'#00000033'}}>
                    <Title style={{color: '#fff', margin: '5%'}}>Marcos Guilherme Atende Pedido da esposa</Title>
                    <Author style={{color: '#fff'}}>Abel braga</Author>
                </View>
            </ImageBackground>
            <ContainerNews>
                <View>
                    <Background source={Fundo} />
                </View>
                <View style={{position:'absolute', right:0, width:'55%'}}>
                    <Title >Marcos Guilherme Atende Pedido da esposa</Title>
                    <Author>Abel braga</Author>
                </View>
            </ContainerNews>
     
            
        </Container>
    );
}

export default Dashboard;