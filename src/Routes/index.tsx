import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashBord from '../Pages/DashBoard'
import Details from '../Pages/Details'
const Navegation = createStackNavigator();

const NavigationRoutes: React.FC = () =>(
    <Navegation.Navigator headerMode='none'  >
        <Navegation.Screen name="DashBord" component={DashBord}/>
        <Navegation.Screen name="Details" component={Details}/>
    </Navegation.Navigator>
);
export default NavigationRoutes;