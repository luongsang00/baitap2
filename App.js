import * as React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconn from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useEffect, useState} from 'react';
import {SignIn, SignUp, FlastList, AlBum} from './screens';
const AuthContext = React.createContext();
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// const status = {active: 'checksquareo'};

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();
export default function App({Navigator}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        barStyle={{backgroundColor: 'tomato'}}>
        <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={{
            tabBarLabel: 'SignIn',
            tabBarIcon: ({color}) => (
              <Icon name="login" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{
            tabBarLabel: 'SignIn',
            tabBarIcon: ({color}) => (
              <Iconn name="registered" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Floatlist"
          component={FlastList}
          options={{
            tabBarLabel: 'SignIn',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AlBum"
          component={AlBum}
          options={{
            tabBarLabel: 'SignIn',
            tabBarIcon: ({color}) => (
              <Icon name="retweet" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
