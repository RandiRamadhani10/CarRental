import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
const Jumbotron = () => {
  const screen = Dimensions.get('screen');
  const styles = StyleSheet.create({
    container1: {
      position: 'relative',
      width: screen.width,
      height: 150,
      justifyContent: 'flex-start',
    },
    container2: {
      width: '100%',
      height: 75,
      backgroundColor: '#D3D9FD',
    },
    jumCont: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      paddingHorizontal: 16,
    },
    jumChild: {
      position: 'relative',
      padding: 24,
      width: '100%',
      backgroundColor: '#091B6F',
      height: 150,
      borderRadius: 10,
    },
    heading: {
      fontSize: 16,
      color: 'white',
      width: '50%',
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    },
    button: {
      paddingVertical: 4,
      paddingHorizontal: 16,
      backgroundColor: '#5CB85F',
    },
    image: {
      width: screen.width * 0.4,
      height: screen.width * 0.22,
    },
  });
  return (
    <>
      <View style={[styles.container1]}>
        <View style={[styles.container2]}></View>
        <View style={[styles.jumCont]}>
          <View style={[styles.jumChild]}>
            <Text style={[styles.heading]}>
              Sewa Mobil Berkualitas di kawasanmu
            </Text>
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <TouchableOpacity style={[styles.button]}>
                <Text style={[styles.buttonText]}>Sewa Mobil</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '50%',
                height: 100,
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  position: 'relative',
                }}>
                <View
                  style={{
                    borderTopLeftRadius: 50,
                    borderBottomRightRadius: 10,
                    width: '100%',
                    height: '50%',
                    backgroundColor: '#0D28A6',
                  }}></View>
                <Image
                  source={require('../../assets/car-1.png')}
                  style={[styles.image, {position: 'absolute', left: 7}]}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Jumbotron;
