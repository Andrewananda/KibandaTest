import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/splash';
import Login from './src/login';

const Stack = createStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name={'Splash Screen'} component={SplashScreen} />
          <Stack.Screen name={'Login'} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
