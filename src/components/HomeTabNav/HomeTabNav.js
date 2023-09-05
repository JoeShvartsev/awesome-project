// HomeNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'; // Ваша домашня сторінка

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      {/* Додайте тут вкладки для домашньої сторінки */}
    </Tab.Navigator>
  );
};

export default HomeNavigator;