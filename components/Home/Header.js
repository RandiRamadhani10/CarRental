import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const Header = () => {
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#D3D9FD',
      padding: 16,
    },
  });
  return (
    <View style={[styles.header]}>
      <View>
        <Text style={{fontSize: 12, color: 'black'}}>Hi, Randos</Text>
        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
          Jombang
        </Text>
      </View>
      <Image
        source={require('../../assets/Ellipse.png')}
        style={{width: 30, height: 30}}
      />
    </View>
  );
};

export default Header;
