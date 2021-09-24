import React, {Component} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {Appbar, TextInput} from 'react-native-paper';
import {colors} from '../../utils/colors';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from '../../utils/Icon';
import {moderateScale} from 'react-native-size-matters';
import styles from './styles';

export default class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCca: 'KE',
      countryCode: 254,
      countryVisible: false,
    };
  }

  onCountrySelect = country => {
    console.log('Code', country.cca2);
    this.setState({
      countryCode: country.callingCode[0],
      countryCca: country.cca2,
    });
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
              <TextInput label={'Client Name'} mode={'outlined'} />
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
                label={'Phone'}
                mode={'outlined'}
              />
            </View>
            <View style={styles.marginTop}>
              <TextInput label={'Location'} mode={'outlined'} />
            </View>
            <View style={styles.marginTop}>
              <TextInput label={'Password'} mode={'outlined'} />
            </View>
            <View style={styles.marginTop}>
              <TextInput label={'Confirm Password'} mode={'outlined'} />
            </View>
            <Pressable style={styles.btnSubmitView}>
              <Text style={styles.submitTxt}>SUBMIT</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
