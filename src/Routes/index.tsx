import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import Teste from '../Pages/teste'//nova visita
import DashBord from '../Pages/DashBoard'
const Navegation = createStackNavigator();

const NavigationRoutes: React.FC = () =>(
    <Navegation.Navigator headerMode='none'  >
        <Navegation.Screen name="DashBord" component={DashBord}/>
        {/* <Navegation.Screen name="Teste" component={Teste} /> */}
    </Navegation.Navigator>
);
export default NavigationRoutes;