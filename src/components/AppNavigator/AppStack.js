import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PostsTabNavigator from '../PostsScreen/PostsTabNavigator';
import Login from '../UsersScreen/Login';
import Signup from '../UsersScreen/Signup';
import NewPost from '../NewPost/NewPost';
import Colors from '../../res/Colors';
import PostsDetail from '../PostsDetail/PostsDetail';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          BackgroundColor: Colors.charade,
          shadowColor: Colors.charade,
        },
        headerTintColor: Colors.white,
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />

      <Stack.Screen name="NewPost" component={NewPost} />
      <Stack.Screen name="PostsDetail" component={PostsDetail} />
      <Stack.Screen name="FavoritesDetails" component={PostsDetail} />
      <Stack.Screen name="PostsTabNavigator" component={PostsTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppStack;
