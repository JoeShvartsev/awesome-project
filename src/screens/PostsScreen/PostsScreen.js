import React from 'react';
import { View, Text } from 'react-native';

const PostsScreen = () => {
  return (
    <View>
      <Text>Екран з постами</Text>
    </View>
  );
};
export default PostsScreen
// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';



// const PostFeedItem = () => {
// 		const { navigate } = useNavigation();
		
//     const onCommentPress = () => {
// 			navigate('');
// 		};

// 		return (
// 			<View style={styles.container}>
// 				<Text style={styles.header}>тут будут картинки</Text>
// 				<TouchableOpacity
// 					onPress={onCommentPress}
// 					style={styles.commentButton}
// 				></TouchableOpacity>
// 			</View>
// 		);
	
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		padding: 10,
// 	},
// 	image: {
// 		width: 100,
// 		height: 100,
// 		marginRight: 10,
// 	},
// 	likeButton: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 		marginRight: 10,
// 	},
// 	icon: {
// 		width: 20,
// 		height: 20,
// 		marginRight: 5,
// 	},
// 	likeCount: {
// 		fontWeight: 'bold',
// 	},
// 	commentButton: {
// 		flexDirection: 'row',
// 		alignItems: 'center',
// 	},
// });

// export default PostFeedItem;
