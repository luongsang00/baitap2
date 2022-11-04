import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const AnBum = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(photo => {
        console.log(photo);
        // photo.json();
        // setUser(user.map(Data));
        setPhotos(photo);
      });
  }, []);
  function onePhoto({item}) {
    return (
      <View>
        {/* <Icon name="idcard" size={30} /> */}
        <Text style={{color: 'black'}}>{item.id}</Text>
        <Image
          style={{backgroundColor: '#ff7f50', width: 40, height: 40}}
          source={{
            uri: item.url,
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={photos}
        renderItem={onePhoto}
        keyExtractor={item => {
          item.id;
        }}
        ListEmptyComponent={<Text>Danh sách rỗng</Text>}
      />
    </SafeAreaView>

    // <View>
    //   <Text>haha</Text>
    // </View>
  );
};

export default AnBum;
