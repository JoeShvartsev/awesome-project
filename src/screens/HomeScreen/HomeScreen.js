import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';
const HomeScreen = ({ navigation }) => {
	const Tabs = createBottomTabNavigator();
	return (
		<Tabs.Navigator
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
        showLabel: false,
			}}
		>
			<Tabs.Screen
				name="PostsScreen"
				component={PostsScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Svg
							width={size}
							height={size}
							viewBox="0 0 24 24"
							fill="none"
							stroke={color}
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<Path
								id="Rectangle-path"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3 3H10V10H3V3Z"
								stroke="#212121"
								stroke-opacity="0.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<Path
								id="Rectangle-path_2"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M14 3H21V10H14V3Z"
								stroke="#212121"
								stroke-opacity="0.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<Path
								id="Rectangle-path_3"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M14 14H21V21H14V14Z"
								stroke="#212121"
								stroke-opacity="0.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<Path
								id="Rectangle-path_4"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3 14H10V21H3V14Z"
								stroke="#212121"
								stroke-opacity="0.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</Svg>
					),
				}}
			/>
			<Tabs.Screen
				name="CreatePostsScreen"
				component={CreatePostsScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Svg width={70} height={40} viewBox="0 0 70 40" fill="none">
							<G id="40 / Toolbar / new">
								<Rect width="70" height="40" rx="20" fill="#FF6C00" />
								<Path
									id="Union"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.5 13.5H34.5V19.5H28.5V20.5H34.5V26.5H35.5V20.5H41.5V19.5H35.5V13.5Z"
									fill="white"
								/>
							</G>
							<Defs>
								<ClipPath id="clip0">
									<Rect width="70" height="40" fill="white" />
								</ClipPath>
							</Defs>
						</Svg>
					),
				}}
			/>
			<Tabs.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Svg
							width={size}
							height={size}
							viewBox="0 0 24 24"
							fill="none"
							stroke={color}
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<Path
								id="Shape"
								d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
								stroke="#212121"
								stroke-opacity="0.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<Path
								id="Oval"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
								stroke="#212121"
								stroke-opacity="0.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</Svg>
					),
				}}
			/>
		</Tabs.Navigator>
	);
};

export default HomeScreen;
