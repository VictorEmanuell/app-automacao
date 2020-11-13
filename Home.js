import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-paper';

export default class Home extends Component {

    state = {
        ventilador: false,
        luz: false
    }

    lampada = async () => {
        this.setState({ luz: !this.state.luz })
        await axios.get('http://192.168.0.26:80/luz').catch((error) => {
            console.log(error)
        })
    }

    tomada = async () => {
        this.setState({ ventilador: !this.state.ventilador })
        await axios.get('http://192.168.0.26:80/tomada').catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={{
                flex: 1, justifyContent: 'center', backgroundColor: '#2E2E2E'
            }}>
                <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 300 }}
                />

                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Image source={require('./assets/lightbulb.png')} style={{ width: 50, height: 50,  marginRight: 20 }} />
                    <TouchableOpacity onPress={this.lampada} >
                        {(!this.state.luz) && (<Image source={require('./assets/ligar.png')} style={{ width: 200, height: 200 }} />)}
                        {(this.state.luz) && (<Image source={require('./assets/desligar.png')} style={{ width: 200, height: 200 }} />)}
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Image source={require('./assets/fan.png')} style={{ width: 50, height: 50, marginRight: 20 }} />
                    <TouchableOpacity onPress={this.tomada} style={{ alignItems: 'center' }}>
                        {(!this.state.ventilador) && (<Image source={require('./assets/ligar.png')} style={{ width: 200, height: 200 }} />)}
                        {(this.state.ventilador) && (<Image source={require('./assets/desligar.png')} style={{ width: 200, height: 200 }} />)}
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
