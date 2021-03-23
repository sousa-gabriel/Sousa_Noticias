import styled from 'styled-components';
import { ImageBackground, ScrollView, Text, View} from 'react-native';


export const Container = styled(ScrollView)`
    flex: 1;
    padding: 10px;
    background-color: #6272a4;
    padding-top:50px;

`;

export const ContainerNews = styled(View)`
    width: 100%;
    height: 200px;
    background: #fff;
    border-radius: 5px;
    margin-top:20px;

    padding: 10px;
`;

export const Background = styled(ImageBackground)`
    position: absolute;
    left: 0px;
    width: 150px;
    height: 180px;
    background-color: red;
`;

export const Title = styled(Text)`
    font-size: 20px;
    height: 170px;
    font-weight: bold;
    font-family: 'RobotoSlab-Regular';
    text-align: left;
`;

export const Author = styled(Text)`
    font-size: 13px;
    font-weight: bold;
    margin-right: 10px;
    font-family: 'RobotoSlab-Regular';
    text-align: right;
`;