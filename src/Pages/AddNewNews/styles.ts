import styled from 'styled-components';
import { View, Text, TextInput }from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export const ContainerDetails = styled(ScrollView)`
    width: 100%;
    height: 100%;
    background-color: #fff;
`
export const TitleHeader = styled(View)`
    height: 60px;
    width: 100%;
    background-color: #6272a4;
    justify-content:center;
`;

export const TitleHeaderText = styled(Text)`
    color: #fff; 
    font-size: 20px;
    font-family: 'RobotoSlab-Regular';
    font-weight: bold;
    margin-left: 20px;
`;

export const ContainerData = styled(View)`
    width: 100%;
    height: 100%;
    padding-left: 5%;
    padding-right: 5%;
`;
export const Title = styled(Text)`
    font-size: 15px;
    margin: 10px;
    font-family: 'RobotoSlab-Regular';
`;

export const DataItem = styled(TextInput)`
    height: auto;
    width: 100%;
    border-radius: 10px;
    padding-left: 10px;
    border-width: 2px;
    border-color:#6272a4;
    color:grey;
    font-weight:bold;
    font-size: 15px;
    font-family: 'RobotoSlab-Regular';
`;

export const SalvarDados = styled(RectButton)`
    width: 90%;
    height: 50px;
    margin-top: 10px;
    margin-left: 5%;
    border-radius: 20px;
    
    align-items: center;
    justify-content: center;
`;

export const SalvarDadosTitle = styled(Text)`
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    color: #6272a4;
    font-weight: bold;
`;

export const TextError = styled(Text)`
    font-size: 13px;
    font-family: 'RobotoSlab-Regular';
    color: red;
`;