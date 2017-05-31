import React, { Component } from 'react';
import { 
			StyleSheet, 
			View, 
			Image,
			Dimensions 
		} from 'react-native';
import Ball from './Ball.js';

let Window = Dimensions.get('window');
let COL_1_RATIO = 0.07;
let COL_2_RATIO = 0.22;
let COL_3_RATIO = 0.40;
let COL_4_RATIO = 0.56;
let COL_5_RATIO = 0.73;
let COL_6_RATIO = 0.90;
let ROW_1_RATIO = 0.105;
let ROW_2_RATIO = 0.75;
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
					<Image
						source = {require('../launch.png')}
						style = {styles.backgroundImage}
						resizeMode = 'stretch'>
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS / 2} left={Window.width * COL_1_RATIO - BALL_RADIUS / 2} color='yellow'/>
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS / 2} left={Window.width * COL_2_RATIO - BALL_RADIUS / 2} color='yellow'/>
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS / 2} left={Window.width * COL_3_RATIO - BALL_RADIUS / 2} color='yellow'/>
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS / 2} left={Window.width * COL_4_RATIO - BALL_RADIUS / 2} color='yellow'/>
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS / 2} left={Window.width * COL_5_RATIO - BALL_RADIUS / 2} color='yellow'/>
						<Ball top={Window.height * ROW_1_RATIO - BALL_RADIUS / 2} left={Window.width * COL_6_RATIO - BALL_RADIUS / 2} color='yellow'/>
						
						<Ball top={Window.height * ROW_2_RATIO - BALL_RADIUS / 2} left={Window.width * COL_1_RATIO - BALL_RADIUS / 2} color='red'/>
						<Ball top={Window.height * ROW_2_RATIO - BALL_RADIUS / 2} left={Window.width * COL_6_RATIO - BALL_RADIUS / 2} color='red'/>
					</Image>
				);
	}
}
