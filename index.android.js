import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Button,
  Footer,
  FooterTab
} from 'native-base';
import{ TabNavigator } from 'react-navigation';
import ScoreBoard from './components/ScoreBoard';
import StopWatch from './components/StopWatch';


const AwesomeProject = TabNavigator({
      ScoreBoard: {
        screen: ScoreBoard,
      },
      StopWatch: {
        screen: StopWatch,
      },
    }, 
    {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        showIcon: true,
        style: {
          backgroundColor: '#fff'
        }
      },
    });


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
