import React, { Component } from 'react';
import { 
			StyleSheet, 
			Text,
			View, 
			Button, 
			Dimensions
		} from 'react-native';

let Window = Dimensions.get('window');
const CLOCK_RADIUS = 250;
const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: 'black'
	}, 
	clock: {
		position: 'absolute', 
		top: Window.height / 2 - CLOCK_RADIUS, 
		left: Window.width / 2 - CLOCK_RADIUS,
		width:  CLOCK_RADIUS * 2, 
		height: CLOCK_RADIUS * 2,
		borderRadius: CLOCK_RADIUS, 
		borderWidth: 15, 
		borderColor: '#fff'
	},
	countDown: {
		fontSize: 100,
		fontWeight: '900',
		color: 'red',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: [{translateX: -50}, {translateY: -50}]
	},
	btnStart: {
		position: 'absolute',
		top: '85%',
		left: '25%',
		transform: [{translateX: -50}, {translateY: -50}]
	},
	btnStop: {
		position: 'absolute',
		top: '85%',
		left: '75%',
		transform: [{translateX: -50}, {translateY: -50}]
	},
	btnExtension: {
		position: 'absolute',
		top: '95%',
		left: '50%',
		transform: [{translateX: -50}, {translateY: -50}]
	}
});

export default class StopWatch extends Component{
	constructor(props){
		super(props);

		this.state = {
			countDown: 30,
			clockId: null
		};
	}

	startCountDown(){
		if(this.state.clockId === null){
			//If the timer hasn't started, set up the timer
			let intervalId = setInterval(
					() => this.tick(),
					1000
				);
			this.setState({
				countDown: 30,
				clockId: intervalId
			});
		}
		else{
			//Timer already started, reset the countdown to 30 sec
			this.setState({
				countDown: 30
			});
		}
	}

	stopCountDown(){
		clearInterval(this.state.clockId);
		this.setState({
			countDown: 0,
			clockId: null
		});
	}

	setExtension(){
		let intervalId = this.state.clockId;
		if(intervalId === null){
			//If clock hasn't started, start the clock
			intervalId = setInterval(
					() => this.tick(),
					1000
				);
		}
		//Extend 30 seconds
		this.setState((prevState, props) => {
			return{
				countDown: prevState.countDown + 30, 
				clockId: intervalId
			};
		});

	}

	tick(){
		if(this.state.clockId === null) return;
		this.setState((prevState, props) => {
			let prevCount = prevState.countDown;
			if(prevCount > 0){
				//Countdown > 0, continue countdown
				return {
					countDown: prevCount - 1
				};
			}
			else{
				//Countdown to 0, stop timer
				clearInterval(this.state.clockId);
				return{
					clockId: null
				};
			}
		});
	}

	render(){
		return (
			<View style={styles.container} >
				<View style={styles.clock}>
					<Text style={styles.countDown}>{this.state.countDown}</Text>
				</View>
				<View style={styles.btnStart}>
					<Button onPress={() => this.startCountDown()} title='START' color='black' />
				</View>
				<View style={styles.btnStop}>
					<Button onPress={() => this.stopCountDown()} title='STOP' color='black' />
				</View>
				<View style={styles.btnExtension}>
					<Button onPress={() => this.setExtension()} title='EXTENSION' color='black' />
				</View>
			</View>
			);
	}
}