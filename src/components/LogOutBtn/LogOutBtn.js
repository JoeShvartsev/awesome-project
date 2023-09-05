import { View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
const LogOutBtn = () => {
	const { navigate } = useNavigation();
	return (
		<View>
      
			<TouchableOpacity
				onPress={() => navigate('Login')}
				style={{ marginRight: 15 }}
			>
				<Svg width={24} height={24} fill="none" viewBox="0 0 24 24">
					<Path
						id="Shape"
						d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
						stroke="#BDBDBD"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<Path
						id="Shape_2"
						d="M17 16L21 12L17 8"
						stroke="#BDBDBD"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<Path
						id="Shape_3"
						d="M21 12H9"
						stroke="#BDBDBD"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</Svg>
			</TouchableOpacity>
		</View>
	);
};
export default LogOutBtn;
