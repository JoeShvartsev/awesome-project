import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './src/components/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/components/LoginScreen/LoginScreen';
import PostsScreen from './src/screens/PostsScreen/PostsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const toggleLogin = () => {
		setLoggedIn(!loggedIn);
	};

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				{loggedIn ? (
					<Stack.Screen name="Posts" component={PostsScreen} />
				) : (
					<>
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
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
