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
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Listing from './src/screens/Listing';
import Detail from './src/screens/Detail';
import { UserData } from './src/store/user/models';
import configureStore from './src/store';
import AddUser from './src/screens/AddUser';

export type RootStackParamList = {
  Listing: undefined;
  Detail: { item: UserData };
  AddUser: undefined
};

const App = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const store = configureStore();

  return (
    <Provider store={store} >
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName='Listing'>
            <RootStack.Screen name="Listing" component={Listing} />
            <RootStack.Screen name="Detail" component={Detail} />
            <RootStack.Screen name="AddUser" component={AddUser} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
