import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Card} from 'react-native-paper';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              height: 160,
              marginTop: 10,
              alignContent: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Card
              style={{width: 160, justifyContent: 'center', borderRadius: 10}}>
              <View style={{justifyContent: 'center', marginTop: 60}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  Total Orders
                </Text>
                <Text style={{alignSelf: 'center', fontSize: 18}}>100</Text>
              </View>
            </Card>
            <Card
              style={{width: 160, justifyContent: 'center', borderRadius: 10}}>
              <View style={{justifyContent: 'center', marginTop: 60}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  Total Clients
                </Text>
                <Text style={{alignSelf: 'center', fontSize: 18}}>50</Text>
              </View>
            </Card>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
