import React from 'react';
import {View, ScrollView, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './Home';
import Daftarmobil from './DaftarMobil';
import Akun from './Akun';
const Tab = createMaterialBottomTabNavigator();
const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      activeColor={'blue'}
      inactiveColor="black"
      labeled={true}
      barStyle={{backgroundColor: 'white', elevation: 10}}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="home" size={20} color={color} />,
          title: 'Home',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="list" size={20} color={color} />,
          title: 'Daftar Mobil',
        }}
        name="DaftarMobil"
        component={Daftarmobil}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="user" size={20} color={color} />,
          title: 'Akun',
        }}
        name="Akun"
        component={Akun}
      />
    </Tab.Navigator>
  );
};

export default Main;
