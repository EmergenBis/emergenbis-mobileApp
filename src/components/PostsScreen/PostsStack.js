import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BadgeLanding from '../BadgesLanding/BadgeLanding'
import PostsScreen from './PostsScreen'
import PostsDetail from '../PostsDetail/PostsDetail'
import NewPost from '../NewPost/NewPost'
import Signup from '../UsersScreen/Signup'
import Login from '../UsersScreen/Login'
import Colors from '../../res/Colors'

const Stack = createStackNavigator(); 

const PostsStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{ 
                headerShown: false,
                headerStyle:{
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl,
                },
                headerTintColor: Colors.white,
             }}>
            <Stack.Screen name="PostsScreen" component={PostsScreen} />
            <Stack.Screen name="PostsDetail" component={PostsDetail} />
            <Stack.Screen name="NewPost" component={NewPost} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default PostsStack;