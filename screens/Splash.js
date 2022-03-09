import React, {useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 2000);
  }, [navigation]);
  const screen = Dimensions.get('screen');
  const styles = StyleSheet.create({
    Heading: {
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    containerParent: {
      flex: 1,
      backgroundColor: '#091B6F',
      height: screen.height,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    scale1: {
      width: screen.width,
      height: screen.height * 0.3333,
    },
    scale2: {
      width: screen.width,
      height: '100%',
    },
    image: {
      width: screen.width,
      height: screen.width * 0.55,
    },
    backgroundCar: {
      width: screen.width,
      height: screen.width * 0.4,
      backgroundColor: '#D3D9FD',
      borderTopLeftRadius: 60,
    },
  });
  return (
    <>
      <StatusBar backgroundColor="#091B6F"></StatusBar>
      <View style={[styles.containerParent]}>
        <View style={[styles.scale1, styles.container]}>
          <Text style={styles.Heading}>BCR</Text>
          <Text style={styles.Heading}>Binar Car Rental</Text>
        </View>
        <View style={[styles.scale1, styles.container]}>
          <View
            style={[styles.container2, styles.scale2, {position: 'relative'}]}>
            <Image
              source={require('../assets/car-1.png')}
              style={[styles.image, {position: 'absolute', zIndex: 99, top: 2}]}
            />
            <View style={styles.backgroundCar}></View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Splash;
