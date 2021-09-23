import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import {colors} from '../utils/colors';

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
              style={{
                width: 160,
                justifyContent: 'center',
                borderRadius: 10,
                elevation: 4,
              }}>
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
              style={{
                width: 160,
                justifyContent: 'center',
                borderRadius: 10,
                elevation: 4,
              }}>
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

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <View>
              <Text style={{fontSize: 18, marginLeft: 10}}>Latest Order</Text>
            </View>
            <View>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: colors.blue,
                  marginRight: 10,
                }}>
                View all
              </Text>
            </View>
          </View>
          <FAB
            icon="plus"
            onPress={() => console.log('Pressed')}
            style={{
              position: 'absolute',
              margin: 16,
              right: 0,
              bottom: 0,
              backgroundColor: colors.color_primary
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
