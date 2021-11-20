import React from "react";
import TabNavigator from './TabNavigator';
import Profile from '../Screens/Profile';


const Drawer = CreateDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component = {TabNavigator}/>
            <Drawer.Screen name="Profile" component = {Profile}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;