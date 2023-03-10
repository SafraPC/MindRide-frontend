import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/Home';

const HomeStack = () => {
   const Stack = createNativeStackNavigator();

   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}>
         <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
   );
};

export { HomeStack };
