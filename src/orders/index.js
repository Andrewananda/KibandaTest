import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Card} from 'react-native-paper';

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  renderItem(data) {
    return (
      <Card>
        <View style={{borderWidth: 1, borderColor: '#e7e7e7', width: '100%'}} />
      </Card>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            ListEmptyComponent={() => (
              <View style={{justifyContent: 'center', alignContent: 'center'}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: moderateScale(24),
                    marginTop: '50%',
                    fontWeight: 'bold',
                  }}>
                  No orders available
                </Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
