import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { iconAnimation, styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { HomeStack } from './home';
import { SearchStack } from './search';
import { PlaylistStack } from './playlist';

const stackAnimation = {
   HomeStack: 0,
   SearchStack: 1,
   PlaylistStack: 2,
};

const BottomRoutes = () => {
   const Navigation = createBottomTabNavigator();
   const selectedTab = useSharedValue(0);
   const animateIcon = (index: number) => iconAnimation(index, selectedTab);

   return (
      <Navigation.Navigator
         screenOptions={styles}
         initialRouteName="HomeStack"
         screenListeners={{
            tabPress: ({ target }) => {
               const stackName = target?.split(
                  '-'
               )[0] as keyof typeof stackAnimation;
               selectedTab.value = stackAnimation[stackName];
            },
         }}>
         <Navigation.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
               title: 'Início',
               tabBarIcon: ({ focused }) => (
                  <Animated.View style={animateIcon(0)}>
                     <Icon
                        name={focused ? 'ios-home' : 'ios-home-outline'}
                        color="white"
                        size={20}
                     />
                  </Animated.View>
               ),
            }}
         />

         <Navigation.Screen
            name="SearchStack"
            component={SearchStack}
            options={{
               title: 'Procurar',
               tabBarIcon: () => (
                  <Animated.View style={animateIcon(1)}>
                     <Icon name="ios-search" color="white" size={20} />
                  </Animated.View>
               ),
            }}
         />
         <Navigation.Screen
            name="PlaylistStack"
            component={PlaylistStack}
            options={{
               title: 'Playlists',
               tabBarIcon: ({ focused }) => (
                  <Animated.View style={animateIcon(2)}>
                     <Icon
                        name={focused ? 'ios-library' : 'ios-library-outline'}
                        color="white"
                        size={20}
                     />
                  </Animated.View>
               ),
            }}
         />
      </Navigation.Navigator>
   );
};
export { BottomRoutes };
