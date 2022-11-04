import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textTop}>Sign up</Text>
      </View>
      <View style={styles.mid}>
        <View>
          <Text style={styles.text}>Address</Text>
          <TextInput
            placeholderTextColor={'#a9a9a9'}
            placeholder="123 Street Rd"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.text}>State</Text>
          <TextInput
            placeholderTextColor={'#a9a9a9'}
            placeholder="Victoria"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.text}>Your phone number</Text>
          <TextInput
            placeholderTextColor={'#a9a9a9'}
            placeholder="+61 1234567890"
            style={styles.input}
          />
        </View>
        <View style={styles.midToch}>
          <TouchableHighlight style={styles.toch}>
            <Text style={styles.textRegister}>Register</Text>
          </TouchableHighlight>
          {/* <Button title="Register" color={'#0000ff'} borderRadius={'10'} /> */}
        </View>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ff7f50',
  },
  top: {
    flex: 20,
  },
  textTop: {
    height: 60,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#ff7f50',
    paddingVertical: 10,
  },
  mid: {
    flex: 60,
    // backgroundColor: '#f0e68c',
  },
  bottom: {
    flex: 20,
    // backgroundColor: '#add8e6',
  },
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
