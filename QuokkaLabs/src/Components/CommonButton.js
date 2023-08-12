import {View, Text, TouchableOpacity,Button} from 'react-native';
import React from 'react';

const CommonButton = ({ButtonTitle, onPress, toggleCheckBox}) => {
  return (
    <TouchableOpacity 
    disabled={toggleCheckBox?false:true}
      onPress={onPress}
      style={{
        width: '90%',
        height: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50,
      }}>
      <Text style={{alignSelf: 'center', fontWeight: 'bold', color: '#ffff'}}>
        {ButtonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
