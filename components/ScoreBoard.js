import React, { Component } from 'react';
import { 
			StyleSheet, 
			View, 
			Image,
			Dimensions 
		} from 'react-native';
import Ball from './Ball.js';

let Window = Dimensions.get('window');
let COL_1_RATIO = 0.09;
let COL_2_RATIO = 0.24;
let COL_3_RATIO = 0.42;
let COL_4_RATIO = 0.58;
let COL_5_RATIO = 0.76;
let COL_6_RATIO = 0.91;
let ROW_1_RATIO = 0.12;
let ROW_2_RATIO = 0.76;
let BALL_RADIUS = 25;
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});

export default class ScoreBoard extends Component{
	render(){
		return (
					<Image  source = {require('../launch.png')}
							style = {styles.backgroundImage}
							resizeMode = 'stretch'>
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
