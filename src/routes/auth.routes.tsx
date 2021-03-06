import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { theme } from '../global/styles/theme';
import { AppointmentCreate } from '../screens/AppointmentCreate';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.secondary100 },
      }}
    >
      <Screen name='SignIn' component={SignIn} />
      <Screen name='Home' component={Home} />
      <Screen name='AppointmentDetails' component={AppointmentDetails} />
      <Screen name='AppointmentCreate' component={AppointmentCreate} />
    </Navigator>
  );
}
