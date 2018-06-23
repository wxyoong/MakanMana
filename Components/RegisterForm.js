import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

export default class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            a: '',
            b: '',
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={{flex:1, fontSize:20}}>
                    Username :
                </Text>
                <TextInput 
                    style={{flex:2, fontSize:20}}
                    placeholder = 'Insert username'
                    value = {this.state.a}
                    onChangeText = { (x) => this.setState({a:x}) }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    row: {
        flexDirection: 'row',
        paddingTop: 40,
    },
});

//     <View style = {styles.row}>
// <Text style = {{flex: 1, fontSize: 20}}>
//     Password :
// </Text>
// <TextInput style = {{flex:2, fontSize:20}}
//     placeholder =  'Insert password'
//     value = {this.state.password}
//     onChangeText={ (x) => this.setState({password:x}) }
// />
// </View>
// <View style = {{paddingTop: 40}}>
// <Button onPress={this.createAccount} title='Create account'/>
// </View>
