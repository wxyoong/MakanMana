import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Icon1 from './Asset/Img/Octocat.png'
import RegisterForm from './Components/RegisterForm.js'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
    }
  }
  _createAccount = () => {
   this.props.navigation.navigate('createAccount');
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} 
            source={Icon1}
          />
          <Text style={styles.titleText}>
            No hunger, no trouble with
          </Text>
          <Text style={styles.title}>
            MakanMana
          </Text>
        </View>
        <KeyboardAvoidingView style={styles.container1} behavior='padding' >
          <TextInput style={styles.input}
            placeholder = 'username'
            placeholderTextColor = 'rgba(128,0,128,0.5)'
            returnKeyType = 'next'
            onChangeText={ (x)=>this.setState({username:x}) }
          />
          <TextInput style={styles.input}
            placeholder = 'password'
            placeholderTextColor = 'rgba(128,0,128,0.5)'
            returnKeyType = 'go'
            onChangeText={ (x)=>this.setState({password:x}) }
          />
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonText}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister} onPress={this._createAccount}>
            <Text style={styles.buttonText}>
              Create Account
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}
class CreateAccount extends Component{
  render(){
    return(
      <RegisterForm />
    )
  }
}
export default createStackNavigator({
  Main: {screen: App, navigationOptions: {header: null,}},
  createAccount: {screen: CreateAccount, navigationOptions: {header: null,}},
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  titleText: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,
    paddingTop: 10,
  },
  title: {
    fontWeight: 'bold', 
    fontSize: 40, 
    color: 'rgba(0,0,255,0.8)', 
  },
  text: {
    color: 'purple',
    fontWeight: '900',
    fontSize: 30,
    // background: 'transparent',
    // marginTop: '20',
  },
  row: {
    flexDirection: 'row',
    paddingTop: 40,
  },
  container1: {
    padding: 20,
  },
  input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 20,
      color: '#34576d',
      paddingHorizontal: 10,
  },
  buttonLogin: {
      backgroundColor: '#2980b9',
      paddingVertical: 15,
      marginBottom: 15,
  },
  buttonRegister: {
      backgroundColor: '#2980b9',
      paddingVertical: 15,
      marginBottom: 40,
  },
  buttonText: {
      color: '#FFF',
      textAlign: 'center',
  }
});


//<ImageBackground source={Image1} style={{width:width, height:height}}>
//</ImageBackground>

//const { width, height } = Dimensions.get('window')