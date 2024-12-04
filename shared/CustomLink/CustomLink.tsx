import { StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import { FontSize, Colors, FontFamily } from '../constants/styles-system';
import { Link, LinkProps } from 'expo-router';

const CustomLink = ({ text, ...props }: LinkProps & { text?: string }) => {
	return (
		<Link {...props} style={style.link}>
			{props.children}
			{text && <Text>{text}</Text>}
		</Link>
	);
};

export default CustomLink;

const style = StyleSheet.create({
	link: {
		fontSize: FontSize.f20,
		justifyContent: 'center',
		alignItems: 'center',
		color: Colors.linkColor,
		fontFamily: FontFamily.FiraSans,
	} as TextStyle,
});
