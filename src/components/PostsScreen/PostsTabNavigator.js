import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostsStack from './PostsStack';
import UserStack from '../UsersScreen/UserStack';
import NewPost from '../NewPost/NewPost';
import Colors from '../../res/Colors';

const Tab = createBottomTabNavigator();

const PostsTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl,
        },
        headerTintColor: Colors.white,
      }}>
      <Tab.Screen
        name="User"
        component={UserStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={require('../../assets/profile.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PostsStack"
        component={PostsStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={require('../../assets/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewPost"
        component={NewPost}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={require('../../assets/plus.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default PostsTabNavigator;
