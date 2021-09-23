import React, {Component} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user !== null) {
        this.redirect('Home');
      } else {
        this.redirect('Login');
      }
    } catch (e) {
      console.log('AsyncStorageError', e);
    }
  }

  redirect(page) {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: page}],
      }),
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.color_primary,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={{fontSize: 30, color: colors.white, alignSelf: 'center'}}>
            Kibanda Agent App
          </Text>
          <View>
            <ActivityIndicator
              size={24}
              color={colors.white}
              style={{marginTop: 20}}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
