import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  AsyncStorage,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List({navigation}) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    console.log(AsyncStorage.getItem('techs'));
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  function handleHome() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={handleHome}>
        <Image style={styles.logo} source={logo} />
      </TouchableHighlight>
      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
});
