import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
	wrapContainer: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	formContainer: {
		height: 549,
		backgroundColor: 'white',
		padding: 16,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
  
	input: {
		width: 343,
		fontSize: 16,
		borderColor: '#E8E8E8',
		borderWidth: 1,
		fontFamily: 'Roboto',
		color: '#BDBDBD',
		padding: 16,
		marginBottom: 16,
		borderRadius: 10,
		backgroundColor: '#F6F6F6',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	header: {
		fontSize: 30,
		fontWeight: '500',
		letterSpacing: 0.3,
		color: '#212121',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: 33,
	},
	button: {
		backgroundColor: '#FF6C00',
		borderRadius: 25,
		paddingVertical: 16,
		alignItems: 'center',
		width: 343,
		marginTop: 43,
		marginBottom: 16,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Roboto',
		fontWeight: '400',
	},
	passwordVisibilityButton: {
		position: 'absolute',
		top: 19,
		right: 19,
	},
	passwordVisibilityButtonText: {
		fontFamily: 'Roboto',
		color: '#1B4371',
		fontSize: 16,
	},

	linkWrap: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 'auto',
		marginLeft: 'auto',
		marginBottom: 78,
	},
	linkText: {
		fontSize: 16,
		color: '#1B4371',
		marginHorizontal: 5,
	},
	linkTextNav: {
		fontSize: 16,
		color: '#1B4371',
		marginHorizontal: 5,
		textDecorationLine: 'underline',
	},
	background: {
		resizeMode: 'cover',
	},
});
