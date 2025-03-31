import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative'
    },
    homeButton: {
      position: 'absolute',
      right: 20,
      top: 40,
      zIndex: 1000,
      padding: 10,
      backgroundColor: '#242424',
      borderRadius: 10,
    }
  });