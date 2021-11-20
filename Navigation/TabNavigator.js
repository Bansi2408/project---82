import React  from 'react';
import {CreateBottomNavigator} from '@react-navigation/bottom-tabs' ;
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
qwr
const tab = CreateBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions = {({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let IconName;
                    if(route.name === 'Feed'){
                        IconName = focused
                                  ? 'book'
                                  : 'book-outline';
                    } else if(route.name === 'CreatePost'){
                        IconName = focused ? 'create' : 'create-outline';
                    }


                   return <Ionicons name={iconName} size={size} color={color}/>;
                },
                })}
                tabBarOptions={{
                    activeTintColor: 'Tomato',
                    inactiveTintColor: 'gray'
                }}
                >

                    <Tab.Screen name='Feed' component={Feed}/>
                    <Tab.Screen name='CreatePost' component={CreatePost}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;