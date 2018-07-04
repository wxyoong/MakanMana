import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Icon1 from './Asset/Img/IronOcto.png';
import LoginForm from './Components/LoginForm.js';
import { Hello, CreateProfile }from './Components/RegisterForm.js';

import { Provider } from 'mobx-react';
import mobxstores from './mobxstores';

class App extends Component{
  constructor() {
    super();
    this.state = {
        showME: true,
    }
  }
  componentWillMount() {
    setTimeout(() => { 
        this.setState({showME: false}) 
    }, 1000)
  }
  _createAccount = () => {
    this.props.navigation.navigate('createAccount');
  }
  _back = () => {
    this.props.navigation.goBack(null);
  }
  render(){
    return(
      <Provider {...mobxstores}>
        <View style={styles.containerLoader}>
          {this.state.showME ?
            <ActivityIndicator size='large' color='#ff0000' />
            :
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={Icon1} />
                <Text style={styles.titleText}> No hunger, no trouble with </Text>
                <Text style={styles.title}> MakanMana </Text>
              </View>
              <LoginForm create_Account={this._createAccount} />
            </View>
          }
        </View>
      </Provider>
    )
  }
}
class CreateAccount extends Component{
  render(){
    return(
      <Provider {...mobxstores}>
        <Hello create={this.props.navigation.navigate} />
      </Provider>
    )
  }
}

export default createStackNavigator({
  Main: { 
    screen: App, 
    navigationOptions: {header: null}, 
  },
  createAccount: {
    screen: CreateAccount, 
  },
  registerForm: {
    screen: createStackNavigator({
      Main1: {
        screen: Hello,
        navigationOptions: {header: null},
      },
      createProfile: {
          screen: CreateProfile,
      },
    })
  },
})


const styles = StyleSheet.create({
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
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
});


//<ImageBackground source={Image1} style={{width:width, height:height}}>
//</ImageBackground>

//const { width, height } = Dimensions.get('window')