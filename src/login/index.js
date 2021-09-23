import React, {Component} from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/colors';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../../assets/background.png')}
          resizeMode={'cover'}
          style={{
            flex: 1,
          }}>
          <View style={{flex: 1, marginTop: '55%'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                marginLeft: '10%',
                marginRight: '10%',
              }}>
              <View>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Login</Text>
              </View>
              <View>
                <Text style={{color: '#c0c0c0'}}>
                  Please sign in to to continue.
                </Text>
              </View>

              <View style={{marginTop: 10}}>
                <TextInput label={'Email'} mode={'outlined'} />
              </View>
              <View style={{marginTop: 10}}>
                <TextInput
                  label={'Password'}
                  mode={'outlined'}
                  secureTextEntry={true}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Pressable
                  style={{
                    backgroundColor: colors.color_primary,
                    elevation: 4,
                    borderRadius: 10,
                    height: 40,
                    width: 150,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    console.log('Hello');
                  }}>
                  <Text style={{alignSelf: 'center', color: colors.white}}>
                    LOGIN
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
