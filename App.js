import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import LogOutBtn from './src/components/LogOutBtn/LogOutBtn';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Публікації',
            headerStyle: {
              backgroundColor: '#FFFFFF',
              justifyContent: 'center',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#212121',
            headerTitleStyle: {
              fontWeight: '500',
              fontSize: 17,
            },
            headerRight: () => (
              <LogOutBtn></LogOutBtn>
            ),
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}









