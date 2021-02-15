import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Restaurante do Fílip</Text>
        </View>
    );
};

const Header = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Header" component={HomeScreen} options={{ title: 'Restaurante do Fílip'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Header;