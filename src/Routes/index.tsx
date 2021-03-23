import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Teste from '../Pages/teste'//nova visita
import DashBord from '../Pages/DashBoard'
import Details from '../Pages/Details'
const Navegation = createStackNavigator();

const NavigationRoutes: React.FC = () =>(
    <Navegation.Navigator headerMode='none'  >
        <Navegation.Screen name="Teste" component={Teste} />
        <Navegation.Screen name="Details" component={Details}/>
        <Navegation.Screen name="DashBord" component={DashBord}/>
    </Navegation.Navigator>
);
export default NavigationRoutes;