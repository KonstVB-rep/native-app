import { View, Text, PressableProps, Pressable, StyleSheet, TextStyle } from 'react-native';
import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/commonjs/src/types';
import { Colors, FontFamily, FontSize, Gaps, Radius } from '@/shared/constants/styles-system';

interface IMenuItemProps {
	drawerProps: DrawerContentComponentProps;
	icon: React.ReactNode;
	text: string;
	path: string;
}

const MenuItem = ({ drawerProps, icon, text, path, ...props }: IMenuItemProps & PressableProps) => {
	const isActive = drawerProps.state.routes[drawerProps.state.index].name === path;

	return (
		<Pressable
			{...props}
			onPress={() => drawerProps.navigation.navigate(path)}
			style={(props) => [
				{ backgroundColor: props.pressed || isActive ? Colors.primaryLighter : Colors.transparent },
				style.container,
			]}
		>
			<View style={{ ...style.menu__item }}>
				<View style={style.icon}>{icon}</View>
				<Text style={style.text}>{text}</Text>
			</View>
		</Pressable>
	);
};

export default MenuItem;

const style = StyleSheet.create({
	container: {
		borderRadius: Radius.r10,
		width: '94%',
	},
	menu__item: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 24,
		paddingVertical: 16,
		gap: Gaps.g20,
	},
	text: {
		fontSize: FontSize.f16,
		color: Colors.secondary,
		textTransform: 'uppercase',
		fontFamily: FontFamily.FiraSansSemiBold,
	} as TextStyle,
	icon: {
		width: 24,
		height: 24,
	},
});
