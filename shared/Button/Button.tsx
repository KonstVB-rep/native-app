import {
	Text,
	PressableProps,
	Pressable,
	StyleSheet,
	Animated,
	GestureResponderEvent,
	ActivityIndicator,
} from 'react-native';
import React from 'react';
import { Colors, FontFamily, FontSize, Radius } from '../constants/styles-system';

const Button = ({
	text,
	isLoading,
	...props
}: PressableProps & { text: string; isLoading?: boolean }) => {
	const animatedValue = new Animated.Value(100);

	console.log(isLoading);

	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.btnHoverColor, Colors.btnColor],
	});

	const fadeIn = (event: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 150,
			useNativeDriver: false,
		}).start();
		props.onPressIn?.(event);
	};

	const fadeOut = (event: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 150,
			useNativeDriver: false,
		}).start();
		props.onPressOut?.(event);
	};

	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View
				style={{
					...style.button,
					backgroundColor: color,
				}}
			>
				{!isLoading ? (
					<Text style={style.text}>{text}</Text>
				) : (
					<ActivityIndicator size="large" color={Colors.secondary} />
				)}
			</Animated.View>
		</Pressable>
	);
};

export default Button;

const style = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: Radius.r10,
		height: 58,
		// backgroundColor: Colors.btnColor,
	},
	text: {
		color: Colors.secondary,
		fontSize: FontSize.f20,
		fontFamily: FontFamily.FiraSans,
	},
});
