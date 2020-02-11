import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/pages/Home';
import Start from './src/pages/start';
import EventDetail from './src/pages/event-detail';
import CategoryPage from './src/pages/category-page';
import Category from './src/pages/category';
import Login from './src/pages/login';
import Test from './src/pages/test';
import SearchEvent from './src/pages/search-event';

const AppNavigator = createStackNavigator(
  {
    Start: {
      screen: Start,
      navigationOptions: {
        title: 'Start',
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login Application',
        header: null,
      },
    },
    Test: {
      screen: Test,
      navigationOptions: {
        title: 'Test',
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        header: null,
      },
    },
    EventDetail: {
      screen: EventDetail,
      navigationOptions: {
        title: 'Event Detail',
        header: null,
      },
    },
    CategoryPage: {
      screen: CategoryPage,
      navigationOptions: {
        title: 'Event By Category',
        header: null,
      },
    },
    Category: {
      screen: Category,
      navigationOptions: {
        title: 'Category',
        header: null,
      },
    },
    SearchEvent: {
      screen: SearchEvent,
      navigationOptions: {
        title: 'Search Event',
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Start',
  },
);

export default createAppContainer(AppNavigator);
