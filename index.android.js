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
} from 'native-base'
import ScoreBoard from './components/ScoreBoard';
import StopWatch from './components/StopWatch';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnText: {
    color: 'red',
    fontSize: 20
  }
});

export default class AwesomeProject extends Component {
  constructor(props){
    super(props);

    this.state = {
      tab: 'ScoreBoard'
    };
    this.scoreBoard = <ScoreBoard/>;
    this.stopWatch  = <StopWatch />;
  }

  setTab(tabName){
    this.setState({
      tab: tabName
    });
  }

  render() {
    return(
      <View style={styles.container} >
        {this.state.tab === 'ScoreBoard' && this.scoreBoard}
        {this.state.tab === 'StopWatch'  && this.stopWatch }
        <Footer>
          <FooterTab>
            <Button onPress={() => this.setTab('ScoreBoard')} style={{backgroundColor: '#fff'}} >
              <Text style={styles.btnText}>ScoreBoard</Text>
            </Button>
            <Button onPress={() => this.setTab('StopWatch')}  style={{backgroundColor: '#fff'}} >
              <Text style={styles.btnText}>StopWatch</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
