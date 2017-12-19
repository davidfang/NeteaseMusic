/**
 * Created by admin on 17/12/11.
 */
import React, { Component } from 'react'
import { Drawer, Scene, Router, Stack, Tabs } from 'react-native-router-flux'

import {StackNavigator, TabBarBottom, TabNavigator} from 'react-navigation'

import {Colors } from '../Themes'

import TabIcon from '../Components/TabIcon'

import DiscoverMusic from '../Containers/DiscoverMusic'
import MyMusic from '../Containers/MyMusic'
import Friends from '../Containers/Friends'
import Account from '../Containers/Account'



const Tab = TabNavigator(
  {
    DiscoverMusic: {
      screen: DiscoverMusic,
      navigationOptions: {
        tabBarLabel: '发现音乐',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon iconName='disc-outline' focused={focused} />
        )
      }
    },
    MyMusic: {
      screen: MyMusic,
      navigationOptions: {
        tabBarLabel: '我的音乐',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon iconName='musical-notes-outline' focused={focused} />
        )
      }
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarLabel: '朋友',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon iconName='contacts-outline' focused={focused} />
        )
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarLabel: '账号',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon iconName='person-outline' focused={focused} />
        )
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: false,
    initialRouteName: 'DiscoverMusic',
    lazy: true,
    tabBarOptions: {
      activeTintColor: Colors.steel,
      inactiveTintColor: Colors.silver,
      style: {
        backgroundColor: Colors.coal
      }
    }
  }
)
const NavigationMain = StackNavigator(
  {
    Tab: { screen: Tab }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerBackTitle: '返回',
      headerTintColor: '#333333',
      showIcon: true
    }
  }
)

export default NavigationMain
