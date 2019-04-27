import React, { Component } from 'react'
import { PanResponder, Animated } from 'react-native';

export class Flag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: props.type,
            pan: new Animated.ValueXY(),
            isVisible: true
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (e, gestureState) => {
                // Set the initial value to the current state
                this.state.pan.setOffset({
                    x: this.state.pan.x._value,
                    y: this.state.pan.y._value
                });
                this.state.pan.setValue({ x: 0, y: 0 });
                this.props.updateFlagPosition(this.props.type, gestureState.moveX, gestureState.moveY);
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y },
            ]),
            onPanResponderRelease: (e, gestureState) => {
                // Flatten the offset to avoid erratic behavior
                this.state.pan.flattenOffset();

                this.props.updateFlagPosition(this.props.type, gestureState.moveX, gestureState.moveY);

                Animated.spring(
                    this.state.pan,
                    { toValue: { x: 0, y: 0 } }
                ).start();
            }
        });
    }

    render() {
        let { pan } = this.state;
        let [translateX, translateY] = [pan.x, pan.y];
        let imageStyle = { transform: [{ translateX }, { translateY }], zIndex: 10 };
        let flagImg;
        if (this.props.isVisible === false) {
            flagImg = require('../images/white.png');
        } else {
            flagImg = (this.props.type === 'eng') ? require('../images/flag-eng.png') : require('../images/flag-ita.png');
        }

        return (
            <Animated.Image
                style={imageStyle}
                {...this._panResponder.panHandlers}
                source={flagImg} />
        )

    }
}

export default Flag
