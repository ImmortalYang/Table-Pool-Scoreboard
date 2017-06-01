import React, { Component } from 'react';
import { 
			StyleSheet, 
			View, 
			Image,
			Dimensions 
		} from 'react-native';
import Ball from './Ball.js';

let Window = Dimensions.get('window');
const COL_1_RATIO = 0.09;
const COL_2_RATIO = 0.24;
const COL_3_RATIO = 0.42;
const COL_4_RATIO = 0.58;
const COL_5_RATIO = 0.76;
const COL_6_RATIO = 0.91;
const ROW_1_RATIO = 0.12;
const ROW_2_RATIO = 0.76;
const BALL_RADIUS = 25;
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch'
    },
    icon: {
    	width: 25,
    	height: 25
    }
});

export default class ScoreBoard extends Component{
	static navigationOptions = {
	    tabBarLabel: 'ScoreBoard',
	    tabBarIcon: () => (
	      <Image
	        source={require('../assets/image/scoreboard-icon.png')}
	        style={styles.icon}
	      />
	    )
	};

	render(){
		return (
					<Image  source = {require('../assets/image/launch.png')}
							style = {styles.backgroundImage} >
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS} left={Window.width * COL_1_RATIO - BALL_RADIUS} color='yellow' radius={BALL_RADIUS} />
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS} left={Window.width * COL_2_RATIO - BALL_RADIUS} color='yellow' radius={BALL_RADIUS} />
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS} left={Window.width * COL_3_RATIO - BALL_RADIUS} color='yellow' radius={BALL_RADIUS} />
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS} left={Window.width * COL_4_RATIO - BALL_RADIUS} color='yellow' radius={BALL_RADIUS} />
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS} left={Window.width * COL_5_RATIO - BALL_RADIUS} color='yellow' radius={BALL_RADIUS} />
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS} left={Window.width * COL_6_RATIO - BALL_RADIUS} color='yellow' radius={BALL_RADIUS} />
						
						<Ball top={Window.height * ROW_2_RATIO - BALL_RADIUS} left={Window.width * COL_1_RATIO - BALL_RADIUS} color='red' radius={BALL_RADIUS} />
						<Ball top={Window.height * ROW_2_RATIO - BALL_RADIUS} left={Window.width * COL_6_RATIO - BALL_RADIUS} color='red' radius={BALL_RADIUS} />
					</Image>
				);
	}
}
