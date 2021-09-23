import React, {Component} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../utils/colors';

export default class Splash extends Component {
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
