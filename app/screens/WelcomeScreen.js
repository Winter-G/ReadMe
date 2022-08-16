import React from 'react';
import { StyleSheet, Text, Alert, View, Image, SafeAreaView,TouchableHighlight,Button, loginButton, registerButton } from 'react-native';

function WelcomeScreen(props) {


  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text></Text>
      <Text>Good Day! It's ReadMe2</Text>

      <TouchableHighlight onPress={() => console.log("Image tapped")}>
      <Image source={require('./app/assets/icon1.png')}
    
    />


      </TouchableHighlight>
      <Text></Text>
      <View style={styles.loginButton}></View>

       <View style={styles.registerButton}></View>

        
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor : "#b18363"};

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    backgroundColor: '#b18363',
    alignItems: 'center',
    justifyContent: 'center',    
  },

  loginButton: {
      width: '100%',
      height: 70,
      backgroundColor: '#778ba5'
  },

  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#778ba5'
},
}
);



export default WelcomeScreen;