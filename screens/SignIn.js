import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const SignIn = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          //   backgroundColor: '#8a2be2',
          flex: 30,
          //   alignItems: 'center',
        }}>
        <Text
          style={{
            backgroundColor: '#ff7f50',
            textAlign: 'center',
            height: 60,
            paddingVertical: 10,
            fontSize: 30,
            color: '#fffaf0',
          }}>
          Sign in
        </Text>
      </View>
      <View style={{flex: 60}}>
        <View
          style={{
            marginVertical: 10,
          }}>
          <Text style={styles.text}>Your email</Text>

          <TextInput
            placeholderTextColor={'#a9a9a9'}
            placeholder="example@gmail.com"
            style={styles.input}
          />
        </View>
        <View
          style={{
            marginVertical: 10,
          }}>
          <Text style={styles.text}>Your password</Text>
          <TextInput
            placeholderTextColor={'#a9a9a9'}
            placeholder="********"
            style={styles.input}
            keyboardType="visible-password"
          />
        </View>
        <View style={styles.midToch}>
          <TouchableHighlight style={styles.toch}>
            <Text style={styles.textRegister}>Register</Text>
          </TouchableHighlight>
          {/* <Button title="Register" color={'#0000ff'} borderRadius={'10'} /> */}
        </View>
        <View
          style={{
            marginVertical: 10,
          }}>
          <Text style={styles.textbotom}>Forgot your password?</Text>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: '#8a2be2',
          flex: 10,
          alignItems: 'center',
        }}></View>
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  text: {
    color: '#a9a9a9',
    marginVertical: 10,
    marginLeft: 10,
  },
  input: {
    // marginVertical: 2,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ff7f50',
  },
  textbotom: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 12,
    color: '#a9a9a9',
  },
  midToch: {
    marginTop: 10,
    alignItems: 'center',
  },
  toch: {
    height: 40,
    borderRadius: 10,
    width: '40%',
    backgroundColor: '#0000ff',
    justifyContent: 'center',
  },
  textRegister: {
    textAlign: 'center',
    fontSize: 20,
  },
});
