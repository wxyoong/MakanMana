import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import ProfileForm from './ProfileForm.js'
import { Provider } from 'mobx-react'
import mobxstores from '../mobxstores';
class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            phone_no: '',
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <KeyboardAvoidingView style={{padding: 20}} behavior='padding' enabled>
                    <Text style={styles.text}>Username</Text>
                    <TextInput style={styles.input}
                        placeholder = 'at least contains 4 characters'
                        placeholderTextColor = 'rgba(255,255,255,0.6)'
                        returnKeyType = 'next'
                        value = {this.props.x.username}
                        onChangeText = { (y)=>{this.props.x.setusername(y)} }
                    />
                    <Text style={styles.text}>Email Address</Text>
                    <TextInput style={styles.input}
                        placeholder = 'example123@hotmail.com or ...gmail.com'
                        placeholderTextColor = 'rgba(255,255,255,0.6)'
                        returnKeyType = 'next'
                        onChangeText = { (x)=>{ this.setState({email:x}) } }
                    />
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.input}
                        placeholder = 'at least contains 5 characters & 3 numbers'
                        placeholderTextColor = 'rgba(255,255,255,0.6)'
                        returnKeyType = 'next'
                        onChangeText = { (x)=>{ this.setState({password:x}) } }
                    />
                    <Text style={styles.text}>Confirm Password</Text>
                    <TextInput style={styles.input}
                        placeholder = 're-type your password'
                        placeholderTextColor = 'rgba(255,255,255,0.6)'
                        returnKeyType = 'next'
                        onChangeText = { (x)=>{ this.setState({confirm_password:x}) } }
                    />
                    <Text style={styles.text}>Phone number</Text>
                    <TextInput style={styles.input}
                        placeholder = 'example: 012345678'
                        placeholderTextColor = 'rgba(255,255,255,0.6)'
                        returnKeyType = 'go'
                        onChangeText = { (x)=>{ this.setState({phone_no:x}) } }
                    />
                </KeyboardAvoidingView>
                <View style={{paddingStart: 80, paddingEnd: 80}}>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={ ()=>{this.props.create('createProfile')} }>
                        <Text style={styles.buttonText}> Submit </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}> Back </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
RegisterForm = inject('x')(observer(RegisterForm))
export class Hello extends Component{
    render(){
        return(
            <Provider {...mobxstores}>
                <RegisterForm  create = {this.props.create}/>
            </Provider>
        )
    }
}
export class CreateProfile extends Component{
    render(){
        return(
            <ProfileForm />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ecc71',
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#5e7382',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#34576d',
        //paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#27ae60',
        padding: 20,
        // paddingVertical: 15,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,
    },
});


