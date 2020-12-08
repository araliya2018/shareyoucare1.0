import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import AnimatedProgressWheel from 'react-native-progress-wheel';

//import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default class ChatScreen extends React.Component{
  render(){
  return (
    <View style={styles.horizontal}>
    <Text style={{marginLeft:80}}>Nurture</Text>
    <View style={{marginTop:10}}>
    <AnimatedProgressWheel 
    size={200} 
    width={20} 
    color={'yellow'}
    progress={60}
    backgroundColor={'green'}
/>
</View>
<View style={{marginTop:40}}>
<Text style={{marginLeft:80}}>Manure</Text>
<AnimatedProgressWheel 
    size={200} 
    width={20} 
    color={'yellow'}
    progress={60}
    backgroundColor={'green'}
/>
</View>
</View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 2,
    marginTop:70,
    marginLeft:100
  },
});