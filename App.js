import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

export default function App() {
  const [User, setUser] = useState([]);

  useEffect(() => {
    fetch('https://gorest.co.in/public/v2/users')
      .then(res => res.json())
      .then(user => {
        // const User = res.json();
        setUser(user);
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
  const oneUser = ({item}) => {
    return (
      <View style={styles.user}>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="idcard" size={30} color="#900" />

          <Text style={styles.text}>{item.id}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="user" size={30} color="#900" />
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="mail" size={30} color="#900" />
          <Text style={styles.text}>{item.email}</Text>
        </View>

        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="man" size={30} color="#900" />
          <Text style={styles.text}>{item.gender}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons
            style={styles.icon}
            name="checksquareo"
            size={30}
            color="#900"
          />
          <Text style={styles.text}>{item.status}</Text>
        </View>
      </View>
    );
  };
  const headerComponent = () => {
    return <Text>User</Text>;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
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
    marginLeft: 20,
    // color: 'black',
  },
  icon: {
    marginLeft: 5,
  },
});
