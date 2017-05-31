import React, { Component } from 'react';
import {
			StyleSheet,
			View,
			PanResponder,
			Animated
		} from 'react-native';

export default class Ball extends Component{
	constructor(props){
		super(props);

		this.state = {
	        pan: new Animated.ValueXY(),  
	        
	    };

	    this.styles = StyleSheet.create({
	    	ballContainer: {
	    		position: 'absolute', 
	    		top		: this.props.top, 
	    		left	: this.props.left
	    	}, 
	    	ball: {
	    		backgroundColor: this.props.color, 
	    		width		   : this.props.radius * 2, 
	    		height		   : this.props.radius * 2, 
	    		borderRadius   : this.props.radius
	    	}
	    });

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
			<View style={this.styles.ballContainer} >
	                <Animated.View 
	                	{...this.panResponder.panHandlers} 
	                	style={[this.state.pan.getLayout(), this.styles.ball]} />
	        </View>
        );
	}
}
