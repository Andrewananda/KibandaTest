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
import styles from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../assets/background.png')}
          resizeMode={'cover'}
          style={styles.container}>
          <View style={styles.mainView}>
            <View style={styles.content}>
              <View>
                <Text style={styles.loginText}>Login</Text>
              </View>
              <View>
                <Text style={{color: colors.darkGray}}>
                  Please sign in to to continue.
                </Text>
              </View>

              <View style={styles.margin}>
                <TextInput label={'Email'} mode={'outlined'} />
              </View>
              <View style={styles.margin}>
                <TextInput
                  label={'Password'}
                  mode={'outlined'}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.btnContainer}>
                <Pressable
                  style={styles.btnView}
                  onPress={() => {
                    console.log('Hello');
                  }}>
                  <Text style={styles.btnText}>LOGIN</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
