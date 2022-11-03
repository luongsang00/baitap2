import * as React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useEffect, useState} from 'react';

const status = {active: 'checksquareo'};
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function FlatLists() {
  const [User, setUser] = useState([]);
  function Data(props) {
    // return props;
    return {
      id: props.id,
      name: props.name,
      email: props.email,
      gender: props.gender,
      status: props.status,
      n: props.gender === 'male' ? 'man' : 'woman',
      m: props.status === 'active' ? 'checksquareo' : 'closecircleo',
    };
  }
  // var DATA = User.map(Data);

  useEffect(() => {
    fetch('https://gorest.co.in/public/v2/users')
      .then(res => res.json())
      .then(user => {
        // const User = res.json();
        setUser(user.map(Data));
      });
  }, []);

  // useEffect(() => {
  //   const endpoint = 'https://countries.trevorblades.com/graphql';
  //   const headers = {
  //     'content-type': 'application/json',
  //   };
  //   const graphqlQuery = {
  //     query: `query{
  //       country(code:"BR"){
  //         code
  //         native
  //       }
  //     }`,
  //     variables: {},
  //   };

  //   const options = {
  //     method: 'POST',
  //     headers: headers,
  //     body: JSON.stringify(graphqlQuery),
  //   };
  //   fetch(endpoint, options)
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  // }, []);

  function oneUser({item}) {
    return (
      <View style={styles.user}>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="idcard" size={30} />
          <Text style={styles.text}>{item.id}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="user" size={30} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="mail" size={30} />
          <Text style={styles.text}>{item.email}</Text>
        </View>

        <View style={styles.userContainer}>
          <Icons style={styles.icon} name={status[item.status]} size={30} />
          <Text style={styles.text}>{item.gender}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name={item.m} size={30} />
          <Text style={styles.text}>{item.status}</Text>
        </View>
      </View>
    );
  }
  const headerComponent = () => {
    return <Text style={styles.conten}>User</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={User}
        renderItem={oneUser}
        ListEmptyComponent={<Text>Danh sách rỗng</Text>}
      />
      {/* <Icon name="rocket" size={30} color="#900" />; */}
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Floatlist" component={FlatLists} />
      </Tab.Navigator>
    </NavigationContainer>
    // // <SafeAreaView style={styles.container}>
    // //   <FlatList
    // //     ListHeaderComponent={headerComponent}
    // //     data={DATA}
    // //     renderItem={oneUser}
    // //     ListEmptyComponent={<Text>Danh sách rỗng</Text>}
    // //   />
    //   {/* <Icon name="rocket" size={30} color="#900" />; */}
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  userContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  user: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    marginTop: 20,
  },
  text: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    color: '#ffefd5',
  },
  icon: {
    marginLeft: 5,
    marginVertical: 2,
    color: '#ff6347',
  },
  conten: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 10,
    color: '#ffa07a',
  },
});
