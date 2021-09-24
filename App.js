import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/splash';
import Login from './src/login';
import Home from './src/home';
import AddClient from './src/client/addClient';

const Stack = createStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'Screen'}
            component={SplashScreen}
          />
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen
            name={'Login'}
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name={'Client'}
            component={AddClient}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
