import React from 'react';
// import { Provider } from 'react-redux';
import {View, StatusBar, Text} from 'react-native';
// import Routes from '../src/Routes';
// import {NavigationContainer} from '@react-navigation/native';

// import store from './store';

const App: React.FC = () =>(
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={{flex:1, padding: 10}}>
            <Text>Ola Redux</Text>
            {/* <NavigationContainer>
                <Provider store={store}>
                    <Routes/>
                </Provider>
            </NavigationContainer> */}
        </View>
    </>
);

export default App;