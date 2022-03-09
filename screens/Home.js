import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import Header from '../components/Home/Header';
import Jumbotron from '../components/Home/Jumbotron';
import Featurelist from '../components/Home/FeatureList';
import Title from '../components/Home/Title';
import Listcar from '../components/DaftarMobil/ListCar';
const Home = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#D3D9FD" barStyle="dark-content"></StatusBar>
      <Header />

      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <Jumbotron />
          <Featurelist />
          <Title text={'Daftar Mobil Pilihan'} />
          <Listcar />
          <Listcar />
          <Listcar />
          <Listcar />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
