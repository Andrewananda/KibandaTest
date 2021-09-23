import React, {Component} from 'react';
import {Text, View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text style={{fontSize: 25}}>Hello Andrea</Text>
      </View>
    );
  }
}

export default App;
