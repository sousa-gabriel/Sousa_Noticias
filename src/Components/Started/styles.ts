import styled from 'styled-components';
import {ImageBackground, Text} from 'react-native';

export const Container= styled(ImageBackground)`
    width: 100%;
    height: 500px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled(Text)`
    color: #000;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    font-family: 'RobotoSlab-Regular';
`;