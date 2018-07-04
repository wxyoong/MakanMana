import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Picker } from 'react-native';

class ProfileForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      first_name: 'hello',
      last_name: 'byebye',
    }
  }
    render(){
        return(
            <View style={styles.container}>  
              <Text style={styles.text}>Full Name :</Text>
              <View style={styles.row}>
                <TextInput style={styles.input1}
                  placeholder = 'First Name'
                  placeholderTextColor = 'rgba(255,255,255,0.6)'
                  returnKeyType = 'next'
                  value = {this.props.first_name}
                  onChangeText = { (y)=>this.setState({first_name:y}) }
                />
                <TextInput style={styles.input2}
                  placeholder = 'Last Name'
                  placeholderTextColor = 'rgba(255,255,255,0.6)'
                  returnKeyType = 'next'
                  value = {this.props.last_name}
                  onChangeText = { (y)=>this.setState({last_name:y}) }
                />
              </View>
              <Text style={styles.text}>Gender :</Text>
              <TextInput style={styles.input}
                placeholder = 'temporarily'
                placeholderTextColor = 'rgba(255,255,255,0.6)'
                returnKeyType = 'next'
              />
              <Text style={styles.text}>Address :</Text>
              <TextInput style={styles.input}
                placeholder = 'Address line 1'
                placeholderTextColor = 'rgba(255,255,255,0.6)'
                returnKeyType = 'next'
              />
              <TextInput style={styles.input}
                placeholder = 'Address line2: Optional'
                placeholderTextColor = 'rgba(255,255,255,0.6)'
                returnKeyType = 'next'
              />
              <View style={styles.row1}>
                <Text style={styles.text1}>City :</Text>
                <Text style={styles.text2}>Postcode :</Text>
              </View>
              <View style={styles.row}>
                <TextInput style={styles.input3}
                  placeholder = 'eg. KL, Cheras'
                  placeholderTextColor = 'rgba(255,255,255,0.6)'
                  returnKeyType = 'next'
                />
                <TextInput style={styles.input4}
                  placeholder = 'eg. 43300'
                  placeholderTextColor = 'rgba(255,255,255,0.6)'
                  returnKeyType = 'next'
                />
              </View>
            </View>
        )
    }
}
export default ProfileForm;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1c40f',
      padding: 20,
      paddingTop: 40,
    },
    text: {
      fontSize: 16,
      fontWeight: '400',
      color: '#ecf0f1',
    },
    text1: {
      fontSize: 16,
      fontWeight: '400',
      color: '#ecf0f1',
      flex: 5,
    },
    text2: {
      fontSize: 16,
      fontWeight: '400',
      color: '#ecf0f1',
      flex: 4,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    row1: {
      flexDirection: 'row',
    },
    input: {
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: '#f39c12',
      fontSize: 16,
      marginBottom: 20,
    },
    input1: {
      flex: 1,
      paddingBottom: 5,
      paddingTop: 5,
      backgroundColor: '#f39c12',
      fontSize: 16,
      marginRight: 5,
    },
    input2: {
      flex: 2,
      paddingBottom: 5,
      paddingTop: 5,
      backgroundColor: '#f39c12',
      fontSize: 16,
      marginLeft: 5,
    },
    input3: {
      flex: 5,
      paddingBottom: 5,
      paddingTop: 5,
      backgroundColor: '#f39c12',
      fontSize: 16,
      marginRight: 5,
    },
    input4: {
      flex: 4,
      paddingBottom: 5,
      paddingTop: 5,
      backgroundColor: '#f39c12',
      fontSize: 16,
    },
});