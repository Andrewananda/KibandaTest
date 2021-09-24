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
import {CommonActions} from '@react-navigation/native';

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
    };
  }

  emailChange = text => {
    if (text.trim() !== '') {
      this.setState({email: text});
    }
  };

  handlePasswordChange = text => {
    if (text.trim() !== '') {
      this.setState({password: text});
    }
  };

  loginUser() {
    if (this.state.email.trim() !== '') {
      if (!this.state.email.includes('@')) {
        //Not valid email
        console.log('not valied email');
        this.setState({
          emailError: true,
          emailErrorMessage: 'Email not valid!',
        });
        return;
      } else {
        this.setState({
          emailError: false,
        });
      }
      if (this.state.password.trim() !== '') {
        if (this.state.password.trim().length < 4) {
          //password wrong password
          this.setState({
            passwordError: true,
            passwordErrorMessage: 'Password not valid!',
          });
        } else {
          this.setState({
            passwordError: false,
          });
        }
      } else {
        this.setState({
          passwordError: true,
          passwordErrorMessage: 'Password field is required',
        });
      }
      //login successfully
      // this.redirect('Home');
    } else {
      //empty inputs
      this.setState({
        emailError: true,
        passwordError: true,
        passwordErrorMessage: 'Password field is required',
        emailErrorMessage: 'Email field is required',
      });
      console.log('empty inputs');
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
                <Pressable
                  style={styles.btnView}
                  onPress={() => {
                    this.loginUser();
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
