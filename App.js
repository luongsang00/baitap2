import * as React from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
import {AuthContext} from './screens/util';

import {FlastList, SignIn, SignUp, Splash, Logout, AlBum} from './screens';

// const Tab = createBottomTabNavigator();

export default function App({Navigator}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );
  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName="Feed"
    //     activeColor="#e91e63"
    //     barStyle={{backgroundColor: 'tomato'}}>
    //     <Tab.Screen
    //       name="SignIn"
    //       component={SignInScreen}
    //       options={{
    //         tabBarLabel: 'SignIn',
    //         tabBarIcon: ({color}) => (
    //           <MaterialCommunityIcons name="home" color={color} size={26} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="SignUp"
    //       component={HomeScreen}
    //       options={{
    //         tabBarLabel: 'SignIn',
    //         tabBarIcon: ({color}) => (
    //           <MaterialCommunityIcons name="home" color={color} size={26} />
    //         ),
    //       }}
    //     />
    //     {/* <Tab.Screen
    //       name="Floatlist"
    //       component={FlastList}
    //       options={{
    //         tabBarLabel: 'SignIn',
    //         tabBarIcon: ({color}) => (
    //           <Icon name="home" color={color} size={26} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="AlBum"
    //       component={AlBum}
    //       options={{
    //         tabBarLabel: 'SignIn',
    //         tabBarIcon: ({color}) => (
    //           <Icon name="retweet" color={color} size={26} />
    //         ),
    //       }}
    //     /> */}
    //   </Tab.Navigator>
    // </NavigationContainer>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Tab.Navigator>
          {state.isLoading ? (
            <Tab.Screen name="Splash" component={Splash} />
          ) : state.userToken == null ? (
            <>
              <Tab.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  headerTitle: 'Sign In',
                  headerTitleAlign: 'center',
                  headerStyle: {
                    backgroundColor: '#ff7f50',
                  },
                  headerTitleStyle: {
                    color: 'white',
                  },
                  tabBarIcon: ({ff7f50, size}) => (
                    <MaterialCommunityIcons
                      name="login"
                      color="#ff7f50"
                      size={26}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  title: 'Sign Up',
                  headerTitleAlign: 'center',
                  headerStyle: {
                    backgroundColor: '#ff7f50"',
                  },
                  headerTitleStyle: {
                    color: 'white',
                  },
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                      name="account-multiple-plus"
                      color="#ff7f50"
                      size={26}
                    />
                  ),
                }}
              />
            </>
          ) : (
            <>
              <Tab.Screen
                name="Home"
                component={FlastList}
                options={{
                  tabBarLabel: 'home',
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                      name="home"
                      color="#ff7f50"
                      size={26}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="AlBum"
                component={AlBum}
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                      name="album"
                      color="#ff7f50"
                      size={26}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Logout"
                component={Logout}
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                      name="logout"
                      color="#ff7f50"
                      size={26}
                    />
                  ),
                }}
              />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
const styles = StyleSheet.create({
  button: {},
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 14,
    opacity: 0.5,
    alignSelf: 'flex-start',
    marginBottom: '5%',
  },

  // input: {
  //   fontSize: 18,
  //   width: '100%',
  //   padding: 10,
  //   height: 40,
  //   borderWidth: 1,
  //   borderColor: 'black',
  //   marginBottom: 10,
  //   borderRadius: 5,
  //   borderColor: '#FF4500',
  // },

  buttonContainer: {
    width: 120,
    height: 40,
    marginBottom: '10%',
  },
});
