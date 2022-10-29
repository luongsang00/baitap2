import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';

export default function App() {
  const [User, setUser] = useState([]);
  // const User = [
  //   {
  //     id: 3660,
  //     name: 'Dinesh Pilla',
  //     email: 'dinesh_pilla@altenwerth.co',
  //     gender: 'male',
  //     status: 'active',
  //   },
  //   {
  //     id: 3659,
  //     name: 'Atreyee Khatri',
  //     email: 'khatri_atreyee@jacobson.co',
  //     gender: 'female',
  //     status: 'inactive',
  //   },
  //   {
  //     id: 3658,
  //     name: 'Chandraprabha Shah',
  //     email: 'chandraprabha_shah@schultz-barton.com',
  //     gender: 'female',
  //     status: 'active',
  //   },
  //   {
  //     id: 3657,
  //     name: 'Atreyi Somayaji',
  //     email: 'somayaji_atreyi@mayert.info',
  //     gender: 'male',
  //     status: 'active',
  //   },
  //   {
  //     id: 3656,
  //     name: 'Baidehi Bharadwaj Ret.',
  //     email: 'ret_bharadwaj_baidehi@reilly-watsica.net',
  //     gender: 'female',
  //     status: 'inactive',
  //   },
  //   {
  //     id: 3655,
  //     name: 'Girindra Chaturvedi LLD',
  //     email: 'lld_girindra_chaturvedi@feeney.net',
  //     gender: 'male',
  //     status: 'inactive',
  //   },
  //   {
  //     id: 3654,
  //     name: 'Girika Kapoor Jr.',
  //     email: 'jr_girika_kapoor@batz.info',
  //     gender: 'male',
  //     status: 'active',
  //   },
  //   {
  //     id: 3653,
  //     name: 'Meghnath Dwivedi',
  //     email: 'dwivedi_meghnath@sanford-bernier.net',
  //     gender: 'female',
  //     status: 'active',
  //   },
  //   {
  //     id: 3652,
  //     name: 'Gaurang Iyengar',
  //     email: 'gaurang_iyengar@toy.biz',
  //     gender: 'female',
  //     status: 'inactive',
  //   },
  //   {
  //     id: 3651,
  //     name: 'Mrs. Jitender Varma',
  //     email: 'mrs_jitender_varma@cormier.name',
  //     gender: 'male',
  //     status: 'inactive',
  //   },
  // ];
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
      <View>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.gender}</Text>
        <Text>{item.status}</Text>
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
});
