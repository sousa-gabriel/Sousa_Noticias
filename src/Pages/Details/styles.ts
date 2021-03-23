import styled from 'styled-components';
import { Image, ScrollView, Text, View } from 'react-native';

export const Container = styled(View)`
    width: 100%;
    height: 100%;
    padding-top:5%;
    padding-bottom: 5%;
    padding-right: 2%;
    padding-left: 2px;
    background-color: #6272a4;

    justify-content: center;
    align-items: center;
`;

export const ContainerDetails = styled(ScrollView)`
    width: 90%;
    height: 80%;
    background-color: #fff;
    
    z-index: 2;
    border-radius: 5px;
    elevation: 5;
`

export const ContainerImage = styled(Image)`
    width: 100%;
    height: 200px;
`;

export const ContainerData = styled(View)`
    width: 100%;
    padding: 5px;
`;

export const Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    font-family: 'RobotoSlab-Regular';

    margin: 5px;
`;

export const Author = styled(Text)`
    font-size: 13px;
    margin: 5%;
    text-align: right;
    font-weight: bold;
    font-family: 'RobotoSlab-Regular';

`;

export const Description = styled(Text)`
    font-size: 13px;
    margin: 5%;
    text-align: justify;
    font-weight: 500;
    color: #707070;
    font-family: 'RobotoSlab-Medium'
`;