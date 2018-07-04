import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { inject, observer } from 'mobx-react';

// behavior='padding' 
//<Text>{this.props.x.username}</Text>    //for testing below KeyboardAvoidingView
class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                
                <TextInput style={styles.input}
                    placeholder = 'username'
                    placeholderTextColor = 'rgba(255,255,255,0.5)'
                    returnKeyType = 'next'
                    onChangeText={ (y) => {this.props.x.setusername(y)} }
                />
                <TextInput style={styles.input}
                    placeholder = 'password'
                    placeholderTextColor = 'rgba(255,255,255,0.5)'
                    secureKeyEntry
                    returnKeyType = 'go'
                    onChangeText={ (y)=>this.setState({password:y}) }
                />
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={this.props.create_Account}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
LoginForm = inject('x')(observer(LoginForm))
export default LoginForm;

const styles = StyleSheet.create({
  container: {
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