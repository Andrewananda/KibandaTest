import React, {Component} from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';
import {colors} from '../../utils/colors';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from '../../utils/Icon';
import {moderateScale} from 'react-native-size-matters';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCca: 'KE',
      countryCode: 254,
      countryVisible: false,
      name: '',
      phone: '',
      location: '',
      password: '',
      passwordConfirm: '',
      loading: false,
      nameHasError: false,
      nameError: '',
      phoneHasError: false,
      phoneError: '',
      locationHasError: false,
      locationError: '',
      passwordHasError: false,
      passwordError: '',
      passwordConfirmHasError: false,
      passwordConfirmError: '',
    };
  }

  onCountrySelect = country => {
    console.log('Code', country.cca2);
    this.setState({
      countryCode: country.callingCode[0],
      countryCca: country.cca2,
    });
  };

  handleClientNameChange = text => {
    if (text.trim() !== '') {
      this.setState({name: text});
    }
  };

  handlePhoneTextChange = text => {
    if (text.trim() !== '') {
      this.setState({phone: text});
    }
  };

  handlePasswordChange = text => {
    if (text.trim() !== '') {
      this.setState({password: text});
    }
  };

  handlePasswordConfirm = text => {
    if (text.trim() !== '') {
      this.setState({passwordConfirm: text});
    }
  };

  handleLocationChange = text => {
    if (text.trim() !== '') {
      this.setState({location: text});
    }
  };

  handleSubmitPress = () => {
    if (!this.state.loading) {
      this.validateInputs();
    }
  };

  validateInputs() {
    if (this.state.name.trim() == '') {
      this.setState({nameHasError: true, nameError: 'Name field required'});
    } else if (this.state.phone.trim() == '') {
      this.setState({phoneHasError: true, phoneError: 'Phone field required'});
    } else if (this.state.location.trim() == '') {
      this.setState({
        locationHasError: true,
        locationError: 'Location field required',
      });
    } else if (this.state.password.trim() == '') {
      this.setState({
        passwordHasError: true,
        passwordError: 'Password field required',
      });
    } else if (
      this.state.password.trim() !== this.state.passwordConfirm.trim()
    ) {
      this.setState({
        passwordHasError: true,
        passwordError: 'Password do not match',
        passwordConfirmHasError: true,
        passwordConfirmError: 'Password do not match',
      });
    } else {
      let client = {
        name: this.state.name,
        password: this.state.password,
        location: this.state.location,
        phone: this.state.phone,
        countryCode: this.state.countryCode,
        country: this.state.countryCca,
      };

      this.storeClient(client);
    }
  }

  storeClient = async data => {
    try {
      let client = JSON.stringify(data);
      await AsyncStorage.setItem('client', client);
      this.props.navigation.goBack();
    } catch (e) {
      console.log('Async Error', e);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Appbar style={{backgroundColor: colors.lightGray, elevation: 0}}>
          <Appbar.Action
            icon="close"
            size={30}
            onPress={() => this.props.navigation.goBack()}
          />
        </Appbar>
        <View style={styles.container}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{alignSelf: 'center', fontSize: 30}}>Add Client</Text>
          </View>
          <View style={styles.margin}>
            <View style={styles.marginTop}>
              <TextInput
                onChangeText={this.handleClientNameChange}
                label={'Client Name'}
                mode={'outlined'}
                error={this.state.nameHasError}
              />
              <Text style={{color: 'red'}}>
                {this.state.nameHasError && this.state.nameError}
              </Text>
            </View>

            <View style={styles.countryPicker}>
              <CountryPicker
                onSelect={this.onCountrySelect}
                onClose={() => this.setState({countryVisible: false})}
                visible={this.state.countryVisible}
                cca={this.state.cca2}
                style={{width: 50}}
                withFlagButton={false}
                withCallingCode={true}
                withCallingCodeButton={true}
                countryCode={this.state.countryCca}
              />
              <Icon
                onPress={() => this.setState({countryVisible: true})}
                style={{margin: 5}}
                name="caret-down"
                type="FontAwesome"
              />
              <TextInput
                style={{width: moderateScale(250)}}
                onChangeText={this.handlePhoneTextChange}
                label={'Phone'}
                mode={'outlined'}
                error={this.state.phoneHasError}
              />
              <Text style={{color: 'red'}}>
                {this.state.phoneHasError && this.state.phoneError}
              </Text>
            </View>
            <View style={styles.marginTop}>
              <TextInput
                onChangeText={this.handleLocationChange}
                label={'Location'}
                mode={'outlined'}
              />
              <Text style={{color: 'red'}}>
                {this.state.locationHasError && this.state.locationError}
              </Text>
            </View>
            <View style={styles.marginTop}>
              <TextInput
                onChangeText={this.handlePasswordChange}
                label={'Password'}
                mode={'outlined'}
                error={this.state.passwordHasError}
              />
              <Text style={{color: 'red'}}>
                {this.state.passwordHasError && this.state.passwordError}
              </Text>
            </View>
            <View style={styles.marginTop}>
              <TextInput
                onChangeText={this.handlePasswordConfirm}
                label={'Confirm Password'}
                mode={'outlined'}
                error={this.state.passwordConfirmHasError}
              />
              <Text style={{color: 'red'}}>
                {this.state.passwordConfirmHasError &&
                  this.state.passwordConfirmError}
              </Text>
            </View>
            <Pressable
              onPress={this.handleSubmitPress}
              style={styles.btnSubmitView}>
              <Text style={styles.submitTxt}>
                {this.state.loading ? <ActivityIndicator /> : 'SUBMIT'}
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
