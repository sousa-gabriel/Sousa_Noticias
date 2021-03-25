import styled from 'styled-components';
import { ImageBackground, Text, TouchableOpacity, View} from 'react-native';

export const ImageBack = styled(ImageBackground)`
    width: 100%; 
    height: 200px;
`;
export const Container = styled(View)`
    width: 100%; 
    height: 200px;
    background-color:#fff;
`;
export const Title = styled(Text)`
    font-size: 20px;
    height: 200px;
    color: #fff;
    margin: 5%;
    font-weight: bold;
    font-family: 'RobotoSlab-Regular';
    text-align: left;
`;

export const Author = styled(Text)`
    position: absolute;
    bottom: 5px;
    color: #fff;
    right: 10px;
    font-size: 13px;
    font-weight: bold;
    font-family: 'RobotoSlab-Regular';
    text-align: right;
`;

export const ContainerOpacity = styled(TouchableOpacity)`
    width: 100%; 
    height:100%; 
    background-color:#00000033;
`;