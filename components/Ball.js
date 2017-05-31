import React, { Component } from 'react';
import {
			StyleSheet,
			View,
			PanResponder,
			Animated
		} from 'react-native';

let CIRCLE_RADIUS = 28;
let styles = StyleSheet.create({
    circle      : {
        
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});

export default class Ball extends Component{
	constructor(props){
		super(props);

		this.state = {
	        pan: new Animated.ValueXY(),  
	        
	    };

	    this.ballStyle = {
        	backgroundColor		: this.props.color,
        	width               : CIRCLE_RADIUS*2,
    		height              : CIRCLE_RADIUS*2,
    		borderRadius        : CIRCLE_RADIUS
        }

	    this.panResponder = PanResponder.create({    
	        onStartShouldSetPanResponder : () => true,
	        onPanResponderMove           : Animated.event([null,{ 
	            dx : this.state.pan.x,
	            dy : this.state.pan.y
	        }]),
	        onPanResponderRelease        : (e, gesture) => {
	        	this.state.pan.setOffset({
		            x: this.state.pan.x._offset + gesture.dx,
		            y: this.state.pan.y._offset + gesture.dy,
		        });
		        this.state.pan.setValue({x: 0, y: 0})
	        } 
	    });
	}

	render(){
		return(
			<View style={{
				position: 'absolute', 
				top		: this.props.top, 
				left	: this.props.left
			}} >
	                <Animated.View 
	                	{...this.panResponder.panHandlers} 
	                	style={[this.state.pan.getLayout(), this.ballStyle]} />
	        </View>
        );
	}
}
