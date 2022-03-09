import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const Listcar = () => {
  const screen = Dimensions.get('screen');
  const styles = StyleSheet.create({
    container1: {
      width: '100%',
      padding: 16,
    },
    container2: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
    icon: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginRight: 5,
    },
    icon2: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: 'red',
    },
    image: {
      width: 50,
    },
  });
  return (
    <View style={[styles.container1]}>
      <View
        style={[
          styles.container1,
          {
            elevation: 3,
            borderRadius: 8,
            borderColor: 'gray',
          },
        ]}>
        <View style={[styles.container2]}>
          <View
            style={{
              padding: 8,
              marginRight: 8,
            }}>
            <Image
              source={require('../../assets/car-2.png')}
              style={[styles.image]}
            />
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>Daihatsu Xenia</Text>
            <View style={[styles.icon]}>
              <View style={[styles.icon]}>
                <Icon name="users" size={20} color="#8A8A8A" />
                <Text
                  style={{
                    color: '#8A8A8A',
                    fontSize: 14,
                    paddingBottom: 2,
                    paddingLeft: 2,
                  }}>
                  4
                </Text>
              </View>
              <View style={[styles.icon]}>
                <Icon name="briefcase" size={20} color="#8A8A8A" />
                <Text
                  style={{
                    color: '#8A8A8A',
                    fontSize: 14,
                    paddingBottom: 2,
                    paddingLeft: 2,
                  }}>
                  2
                </Text>
              </View>
            </View>
            <Text style={{fontSize: 20, color: '#5CB85F'}}>Rp 230.000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Listcar;
