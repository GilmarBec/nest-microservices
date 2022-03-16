import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/home';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
});

export default createAppContainer(MainNavigator);
