import styled,{css} from 'styled-components';
import { ImageBackground, Text, View, TouchableOpacity} from 'react-native';
interface ContainerProps{
    Selected: boolean;   
}

export const ContainerNews = styled(TouchableOpacity)<ContainerProps>`
    width: 100%;
    height: 100px;
    background: #fff;

    border-width: 2px;
    border-color: #fff;
    ${(props) =>props.Selected && css `border-color:#ff9000`};
    border-radius: 5px;
    margin-top:20px;
`;

export const Title = styled(Text)`
    font-size: 16px;
    margin-top: 5px;
    height: 200px;
    font-weight: bold;
    font-family: 'RobotoSlab-Regular';
    text-align: left;
`;

export const Author = styled(Text)`
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 13px;
    font-weight: bold;
    font-family: 'RobotoSlab-Regular';
    text-align: right;
`;

export const Background = styled(ImageBackground)`
    position: absolute;
    left: 5px;
    top: 5px;
    width: 120px;
    height: 90px;
    z-index: 2;
    border-radius: 2px;
    elevation: 2;
`;

export const ContainerImage = styled(View)`
    width: 100%;
    height: 150px;
`;
export const ContainerData = styled(View)`
    position: absolute;
    right: 10px;
    width: 55%; 
    height:100%;
`;