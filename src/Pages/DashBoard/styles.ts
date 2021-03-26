import styled from 'styled-components';
import { FlatList, TextInput, View,TouchableOpacity } from 'react-native';


export const Container = styled(View)`
    padding: 10px;
    flex:1;
    background-color: #6272a4;
    padding-top:50px;
`;

export const ListNews = styled(FlatList)`
    margin-bottom:10%;
`;

export const ContainerModal = styled(View)`
    background-color: #fff;
    height: 80%;
    width: 100%;
    justify-content: center; 
    align-items: center;

`;

export const ButtonNewNews = styled(TouchableOpacity)`
    position: absolute;
    bottom: 20px; 
    right:20px;
    width:60px; 
    height:60px;
    background-color:#fff;

    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border-width: 2px;
    border-color: #6272a4;

`;
export const CampoDeBusca = styled(TextInput)`
    width: 100%;
    height: 50px;    
    margin-bottom: 40px;
    padding-left: 15px;
    color:#fff;
    border-width: 1px;
    border-color: #FFF;
    border-radius: 5px;
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
`;