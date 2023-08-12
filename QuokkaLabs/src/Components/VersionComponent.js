import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const VersionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.versionText}>Version 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    padding: 10,
  },
  versionText: {
    color: '#333',
  },
});

export default VersionComponent;
