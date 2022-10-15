/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Listing from './src/screens/Listing';
import Detail from './src/screens/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserData } from './src/network/manager';

export type RootStackParamList = {
  Listing: undefined;
  Detail: { item: UserData };
};

const App = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Listing">
          <RootStack.Screen name="Listing" component={Listing} />
          <RootStack.Screen name="Detail" component={Detail} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
