import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Picker, Button } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      language: 'Default value',
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text> The default language is {this.state.language} </Text>
        <Button title='press me'>
      </View>
    )
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
})

