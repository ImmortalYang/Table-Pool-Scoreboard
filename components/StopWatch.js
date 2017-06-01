import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text,
	View,
	Image,
	Dimensions
} from 'react-native';
import {
	Button
} from 'native-base'

let Window = Dimensions.get('window');
const CLOCK_RADIUS = 250;
const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: 'black'
	}, 
	clock: {
		position: 'absolute', 
		top: '40%', 
		left: '50%',
		transform: [{translateX: -CLOCK_RADIUS}, {translateY: -CLOCK_RADIUS}],
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
		transform: [{translateX: -80}, {translateY: -50}]
	},
	btnText: {
		color: '#fff',
		fontSize: 30
	}, 
	icon: {
		width: 25,
		height: 25
	}
});

export default class StopWatch extends Component{
	static navigationOptions = {
	    tabBarLabel: 'StopWatch', 
	    tabBarIcon: () => (
	      <Image
	        source={require('../assets/image/stopwatch-icon.png')}
	        style={styles.icon}
	      />
	    )
	};
	
	constructor(props){
		super(props);

		this.state = {
			countDown: 30,
		};
		this.clockId = null;
	}

	componentDidMount(){
		if(this.clockId != null){
			//Resume the timer
			this.clockId = setInterval(
					() => this.tick(),
					1000
				);
		}
	}

	componentWillUnmount(){
		clearInterval(this.clockId);
	}

	startCountDown(){
		clearInterval(this.clockId);
		this.clockId = setInterval(
				() => this.tick(),
				1000
			);
		this.setState({
			countDown: 30
		});	

	}

	stopCountDown(){
		clearInterval(this.clockId);
		this.clockId = null;
		this.setState({
			countDown: 0
		});
	}

	//Extend for 30 seconds
	setExtension(){
		clearInterval(this.clockId);
		this.clockId = setInterval(
				() => this.tick(),
				1000
			);
		this.setState((prevState, props) => {
			return{
				//Total extension cannot be more than 99 seconds
				countDown: prevState.countDown + 30 < 100 ? 
						   prevState.countDown + 30		  : 
						   prevState.countDown, 
			};
		});

	}

	tick(){
		if(this.clockId === null) return;
		if(this.state.countDown < 1){
			this.stopCountDown();
			return;
		}
		this.setState((prevState, props) => {
			return {
				countDown: prevState.countDown - 1
			};
		});
	}

	//Pad the countdown number with leading zero, fixed length of 2 digits
	pad(n){
		return ('00' + n).slice(-2);
	}

	render(){
		return (
			<View style={styles.container} >
				<View style={styles.clock}>
					<Text style={styles.countDown}>{this.pad(this.state.countDown)}</Text>
				</View>
				<View style={styles.btnStart}>
					<Button onPress={() => this.startCountDown()} style={{backgroundColor: '#000'}} >
						<Text style={styles.btnText}>START</Text>
					</Button>
				</View>
				<View style={styles.btnStop}>
					<Button onPress={() => this.stopCountDown()}  style={{backgroundColor: '#000'}} >
						<Text style={styles.btnText}>STOP</Text>
					</Button>
				</View>
				<View style={styles.btnExtension}>
					<Button onPress={() => this.setExtension()}  style={{backgroundColor: '#000'}} >
						<Text style={styles.btnText}>EXTENSION</Text>
					</Button>
				</View>
			</View>
			);
	}
}