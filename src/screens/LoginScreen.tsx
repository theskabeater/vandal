import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const LoginScreen = () => (
  <View style={styles.container}>
    <Text>Login</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
