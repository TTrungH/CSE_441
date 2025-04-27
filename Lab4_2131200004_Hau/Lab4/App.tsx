import 'react-native-gesture-handler';
import React from 'react';
import Contacts from './src/Contact';
import Store from './src/store';
import { Provider } from 'react-redux';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import ProfileContact from './src/ProfileContact';
import Favorites from './src/Favorites';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
const Stack = createStackNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name="Contacts" component={Contacts} options={{ title: "Contacts" }} />
      <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: "Profile contact" }} />
    </Stack.Navigator>
  );
}

function FavoriteScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name="Favorites" component={Favorites} options={{ title: "Favorites" }} />
      <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: "Profile contact" }} />
    </Stack.Navigator>
  );
}
export default ContactThumb;

ContactThumb.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
  onPress: PropTypes.func,
};

ContactThumb.defaultProps = {
  name: '',
  phone: '',
  textColor: 'white',
  onPress: null,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
