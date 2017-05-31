import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Button
} from 'react-native';
import ScoreBoard from './components/ScoreBoard';
import StopWatch from './components/StopWatch';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class AwesomeProject extends Component {
  constructor(props){
    super(props);

    this.state = {
      tab: 'ScoreBoard'
    };
  }

  setTab(tabName){
    this.setState({
      tab: tabName
    });
  }

  render() {
    return(
      <View style={styles.container} >
        {this.state.tab === 'ScoreBoard' && <ScoreBoard/>}
        {this.state.tab === 'StopWatch'  && <StopWatch/> }
        <Button onPress={() => this.setTab('ScoreBoard')} title='ScoreBoard'/>
        <Button onPress={() => this.setTab('StopWatch')}  title='StopWatch'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
