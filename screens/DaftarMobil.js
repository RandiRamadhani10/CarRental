import React from 'react';
import {View, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import Title from '../components/Home/Title';
import Listcar from '../components/DaftarMobil/ListCar';
const Daftarmobil = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      <Title text={'Daftar Mobil'} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <Listcar />
          <Listcar />
          <Listcar />
          <Listcar />
          <Listcar />
          <Listcar />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Daftarmobil;
