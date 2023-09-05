import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ImageBackground,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { styles } from './registrationStyles';

const RegistrationScreen = () => {
	const [fontsLoaded] = useFonts({
		Roboto: require('../../../assets/fonts/Roboto.ttf'),
	});
	const image = require('../../../assets/images/mountains.png');
	const { navigate } = useNavigation();
	const [isPasswordVisible, setPasswordVisibility] = useState(false);
	const [inputText, setInputText] = useState('');
	const [userData, setUserData] = useState({
    email: '',
    password: '',
		login:'',
  });

	const handleInputChange = (text) => {
		setInputText(text);
	};

	const handleFieldChange = (text,fieldName) => {
		setUserData({
			...userData,
			[fieldName]: text,
		})
	};

	const handleRegistration = () => {
		console.log({ userData});
		navigate('Home')
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
		<View style={styles.wrapContainer}>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				<KeyboardAvoidingView
					style={styles.formContainer}
					behavior={Platform.OS == "ios" ? "padding" : "height"}
					enabled={false}
					keyboardVerticalOffset={0}
				>
					<View style={styles.formContainer}>
						<Text style={styles.header}>Реєстрація</Text>
						<TextInput
							style={styles.input}
							placeholder="Логін"
							onChangeText={(text) => handleFieldChange( text,'login')}
						/>
						<TextInput
							style={styles.input}
							placeholder="Адреса електронної пошти"
							keyboardType="email-address"
							onChangeText={(text) => handleFieldChange( text,'email')}
						/>
						<View>
							<TextInput
								style={styles.input}
								placeholder="Пароль"
								secureTextEntry={!isPasswordVisible}
								onChangeText={(text) => handleFieldChange( text,'password')}
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

						<TouchableOpacity
							style={styles.button}
							onPress={handleRegistration}
						>
							<Text style={styles.buttonText}>Зареєструватися</Text>
						</TouchableOpacity>
						<View style={styles.linkWrap}>
							<Text style={styles.linkText}>Вже є аккаунт?</Text>
							<TouchableOpacity onPress={() => navigate('Login')}>
								<Text style={styles.linkTextNav}>Увійти</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>
		</View>
		</TouchableWithoutFeedback>
	);
};

export default RegistrationScreen;
