import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouterConst from './RouterConst';
import { Home } from '../screens';
import { Welcome } from '../screens';
import { Detail } from '../screens';
import { globalStore } from '../store';

const Stack = createNativeStackNavigator();
const HomeWithStore = (props) => <Home globalStore={globalStore} {...props} />;
const DetailWithStore = (props) => <Detail  globalStore={globalStore} {...props}/>;

export const AuthNavigation = () => {
    return <NavigationContainer initialRouteName={RouterConst.WELCOMESCREEN}>
        <Stack.Navigator>
            <Stack.Screen
                name={RouterConst.WELCOMESCREEN} component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name={RouterConst.HOMESCREEN} component={HomeWithStore} options={{ headerShown: false }}  />
            <Stack.Screen name={RouterConst.DETAIALSCREEN} component={DetailWithStore} options={{ header: () => null }} />
        </Stack.Navigator>
    </NavigationContainer>

}