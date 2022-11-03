import * as React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from './SignIn';
import SignUp from './SignUp';
import FlastList from './FlastList';
const Tab = createBottomTabNavigator();
const index = () => {
  return (
    // <View>
    //   <SignIn />
    // </View>

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SignIn" component={SignIn} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="Floatlist" component={FlastList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default index;
