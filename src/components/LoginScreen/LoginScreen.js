import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/loginStyles';
import { useFonts } from 'expo-font';

const LoginScreen = () => {
	const [fontsLoaded] = useFonts({
		Roboto: require('../../../assets/fonts/Roboto.ttf'),
	});
	const image = require('../images/mountains.png');
	const { navigate } = useNavigation();
	const [isPasswordVisible, setPasswordVisibility] = useState(false);
	const [inputText, setInputText] = useState('');

	const handleInputChange = (text) => {
		setInputText(text);
	};
	const handleLogin = () => {};

	return (
		<View style={styles.wrapContainer}>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				<KeyboardAvoidingView>
					<View style={styles.formContainer}>
						<Text style={styles.header}>Увійти</Text>
						<TextInput
							style={styles.input}
							placeholder="Адреса електронної пошти"
							keyboardType="email-address"
						/>
						<View>
							<TextInput
								style={styles.input}
								placeholder="Пароль"
								secureTextEntry={!isPasswordVisible}
								onChangeText={handleInputChange}
							/>
							{inputText.length > 0 ? (
								<TouchableOpacity
									style={styles.passwordVisibilityButton}
									onPress={() => setPasswordVisibility(!isPasswordVisible)}
								>
									<Text style={styles.passwordVisibilityButtonText}>
										{isPasswordVisible ? 'Приховати' : 'Показати'}
									</Text>
								</TouchableOpacity>
							) : null}
						</View>
						<TouchableOpacity style={styles.button} onPress={handleLogin}>
							<Text style={styles.buttonText}>Увійти</Text>
						</TouchableOpacity>
						<View style={styles.linkWrap}>
							<Text style={styles.linkText}>Не має аккаунту?</Text>
							<TouchableOpacity onPress={() => navigate('Registration')}>
								<Text style={styles.linkTextNav}>Зареєструватися</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>
		</View>
	);
};
export default LoginScreen;
