import { StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import { FontSize, Colors, FontFamily, Gaps } from '../constants/styles-system';
import { Link, LinkProps } from 'expo-router';

const CustomLink = ({ text, ...props }: LinkProps & { text?: string }) => {
	return (
		<Link {...props} style={style.link}>
			{props.children || null}
			{text && <Text>{text}</Text>}
		</Link>
	);
};

export default CustomLink;

const style = StyleSheet.create({
	link: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: Colors.linkColor,
		fontFamily: FontFamily.FiraSans,
		fontSize: FontSize.f20,
		gap: Gaps.g10,
	} as TextStyle,
});
