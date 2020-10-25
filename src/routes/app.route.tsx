import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';

import CustomTab from '../components/CustomTab';

const icons: any = {
  Home: {
    icon: 'home',
    lib: Feather,
  },
  Users: {
    icon: 'users',
    lib: Feather,
  },
  Wallet: {
    icon: 'account-balance-wallet',
    lib: MaterialIcons,
  },
  Settings: {
    icon: 'settings',
    lib: Feather,
  },
};
const { Navigator, Screen } = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <Navigator
    tabBarOptions={{
      showLabel: false,
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ size, color, focused }) => {
        const { icon, lib: Icon } = icons[route.name];

        if (focused) {
          return (
            <CustomTab color={color} size={size} text={route.name}>
              <Icon name={icon} size={size} color={color} />
            </CustomTab>
          );
        }

        return <Icon size={size} color={color} name={icon} />;
      },
    })}
  >
    <Screen name="Home" component={Home} />
    <Screen name="Users" component={View} />
    <Screen name="Wallet" component={View} />
    <Screen name="Settings" component={View} />
  </Navigator>
);

export default AppRoutes;
