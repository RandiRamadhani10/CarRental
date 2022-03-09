import React from 'react';
import {View, Text} from 'react-native';
const Title = ({text}) => {
  return (
    <View style={{padding: 16, backgroundColor: 'white'}}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
        {text}
      </Text>
    </View>
  );
};

export default Title;
