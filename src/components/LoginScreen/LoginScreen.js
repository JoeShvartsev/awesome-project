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
import { styles } from '../../styles/loginStyles';
import { useFonts } from 'expo-font';

const LoginScreen = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('../../../assets/fonts/Roboto.ttf'),
  });
  const image = require('../../../assets/images/mountains.png');
  const { navigate } = useNavigation();
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (text, fieldName) => {
    setUserData({
      ...userData,
      [fieldName]: text,
    });
  };
  const handleLogin = () => {
    console.log(userData);
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
            <Text style={styles.header}>Увійти</Text>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
              onChangeText={(text) => handleInputChange(text, 'email')}
            />
            <View>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={!isPasswordVisible}
                onChangeText={(text) => handleInputChange(text, 'password')}
              />
              {userData.password.length > 0 ? (
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
		</TouchableWithoutFeedback>
  );
};
export default LoginScreen;
