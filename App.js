import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pie from './Pie';
import Streak from './Streak';
import { Dimensions } from 'react-native';
import Progress from './Progress';
import Line from './Line';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Pie'>
      <Tab.Screen name="Pie" component={Pie} />
      <Tab.Screen name="Streak" component={Streak} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Line" component={Line} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}