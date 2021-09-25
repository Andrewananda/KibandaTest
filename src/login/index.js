import React, {Component} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/colors';
import styles from './styles';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Users} from '../data/index';
import DialogComponent from '../utils/Dialog';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordError: false,
      emailError: false,
      emailErrorMessage: '',
      passwordErrorMessage: '',
      isLoading: false,
    };
  }

  emailChange = text => {
    if (text.trim() !== '') {
      this.setState({email: text});
    }
  };

  handlePress = () => {
    if (!this.state.isLoading) {
      this.loginUser();
    }
  };

  handlePasswordChange = text => {
    if (text.trim() !== '') {
      this.setState({password: text});
    }
  };

  loginUser() {
    this.setState({isLoading: true});
    if (this.state.email.trim() !== '') {
      if (!this.state.email.includes('@')) {
        //Not valid email
        console.log('not valied email');
        this.setState({
          emailError: true,
          emailErrorMessage: 'Email not valid!',
          isLoading: false,
        });
        return;
      } else {
        this.setState({
          emailError: false,
          isLoading: false,
        });
      }
      if (this.state.password.trim() !== '') {
        if (this.state.password.trim().length < 4) {
          //password wrong password
          this.setState({
            passwordError: true,
            passwordErrorMessage: 'Password not valid!',
            isLoading: false,
          });
        } else {
          this.setState({
            passwordError: false,
            isLoading: false,
          });
        }
      } else {
        this.setState({
          passwordError: true,
          passwordErrorMessage: 'Password field is required',
          isLoading: false,
        });
      }
      const user = Users.filter(item => {
        return (
          this.state.email == item.email && this.state.password == item.password
        );
      });

      if (user.length > 0) {
        this.storeUser(user[0]);
      } else {
        ToastAndroid.show('User not found', 1000);
      }
    } else {
      //empty inputs
      this.setState({
        emailError: true,
        passwordError: true,
        passwordErrorMessage: 'Password field is required',
        emailErrorMessage: 'Email field is required',
        isLoading: false,
      });
      console.log('empty inputs');
    }
  }

  storeUser = async user => {
    try {
      let user_data = JSON.stringify(user);
      await AsyncStorage.setItem('user', user_data);
      this.dialog.show('Success!!', 'Login successfully');
      this.redirect('Home');
    } catch (e) {
      console.log('Async storage error', e);
    }
  };

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
      <SafeAreaView style={styles.container}>
        <DialogComponent ref={ref => (this.dialog = ref)} />
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
                <TextInput
                  label={'Email'}
                  onChangeText={text => this.emailChange(text)}
                  text={this.state.email}
                  mode={'outlined'}
                  error={this.state.emailError}
                />
                {this.state.emailError && (
                  <Text style={{color: 'red'}}>
                    {this.state.emailErrorMessage}
                  </Text>
                )}
              </View>
              <View style={styles.margin}>
                <TextInput
                  label={'Password'}
                  mode={'outlined'}
                  onChangeText={text => this.handlePasswordChange(text)}
                  secureTextEntry={true}
                  error={this.state.passwordError}
                />
                {this.state.passwordError && (
                  <Text style={{color: 'red'}}>
                    {this.state.passwordErrorMessage}
                  </Text>
                )}
              </View>
              <View style={styles.btnContainer}>
                <Pressable style={styles.btnView} onPress={this.handlePress}>
                  <Text style={styles.btnText}>
                    {this.state.isLoading ? <ActivityIndicator /> : 'LOGIN'}
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
