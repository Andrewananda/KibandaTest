import React, {Component} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import {addClient} from '../redux/action';
import {connect} from 'react-redux';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    try {
      const user = await AsyncStorage.getItem('user');
      const clients = await AsyncStorage.getItem('client');
      if (user !== null) {
        let clientData = JSON.parse(clients);
        this.props.addClient(clientData);
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
      <View
        style={{
          flex: 1,
          backgroundColor: colors.color_primary,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Text style={{fontSize: 30, color: colors.white, alignSelf: 'center'}}>
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
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addClient: addClient,
    },
    dispatch,
  );
}

export default connect(null, mapDispatchToProps)(Splash);
