import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  renderItem(data) {
    return (
      <View>
        <Text>Data Available</Text>
      </View>
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
                <Text style={{alignSelf: 'center'}}>No orders available</Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
