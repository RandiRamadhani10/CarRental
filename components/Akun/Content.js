import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const Content = () => {
  const screen = Dimensions.get('screen');
  const styles = StyleSheet.create({
    container1: {
      width: screen.width,
      height: screen.height * 0.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2: {
      width: screen.width * 0.8,
    },
    image: {
      width: '100%',
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
    text: {
      fontSize: 14,
      color: 'black',
      textAlign: 'center',
      marginTop: 20,
    },
  });
  return (
    <View style={[styles.container1]}>
      <View style={[styles.container2]}>
        <Image
          source={require('../../assets/Allura.png')}
          style={[styles.image]}
        />
        <Text style={[styles.text]}>
          Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR
          lebih mudah
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={[styles.button]}>
            <Text style={[styles.buttonText]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Content;
