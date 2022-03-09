import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const Featurelist = () => {
  const screen = Dimensions.get('screen');
  const styles = StyleSheet.create({
    container1: {
      width: screen.width,
      paddingHorizontal: 20,
      paddingVertical: 25,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    icon: {
      width: 75,
      height: 75,
      backgroundColor: '#DEF1DF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      marginBottom: 8,
    },
  });
  return (
    <View style={[styles.container1]}>
      <View style={{alignItems: 'center'}}>
        <View style={[styles.icon]}>
          <Icon
            name="truck"
            color="#5CB85F"
            size={30}
            style={{alignSelf: 'center'}}
          />
        </View>
        <Text>Sewa Mobil</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={[styles.icon]}>
          <Icon
            name="box"
            color="#5CB85F"
            size={30}
            style={{alignSelf: 'center'}}
          />
        </View>
        <Text>Oleh-Oleh</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={[styles.icon]}>
          <Icon
            name="key"
            color="#5CB85F"
            size={30}
            style={{alignSelf: 'center'}}
          />
        </View>
        <Text>Penginapan</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={[styles.icon]}>
          <Icon
            name="camera"
            color="#5CB85F"
            size={30}
            style={{alignSelf: 'center'}}
          />
        </View>
        <Text>Wisata</Text>
      </View>
    </View>
  );
};

export default Featurelist;
