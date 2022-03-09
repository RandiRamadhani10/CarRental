import React from 'react';

import {View, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import Title from '../components/Home/Title';
import Content from '../components/Akun/Content';
const Akun = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      <Title text={'Akun'} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          <Content />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Akun;
