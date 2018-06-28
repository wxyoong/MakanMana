import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            showME: true,
        }
    }
    componentWillMount() {
        setTimeout(() => { 
            this.setState({showME: false}) 
        }, 3000)
    }
    render() {
        return (
            <View style={styles.containerLoader}>
                {this.state.showME ?
                    <ActivityIndicator size='large' color='#ff0000' />
                    :
                    <View>
                        <Text> Loader is hidden </Text>
                    </View>
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
});