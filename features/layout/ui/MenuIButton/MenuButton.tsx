import { Pressable, PressableProps, StyleSheet, View } from 'react-native';
import React from 'react';
import { Icons } from '@/assets/icons';
import { ParamListBase } from '@react-navigation/native';
import { Colors } from '@/shared/constants/styles-system';

const MenuButton = ({
	navigation,
	...props
}: PressableProps & {
	navigation: import('@react-navigation/drawer').DrawerNavigationProp<
		ParamListBase,
		string,
		undefined
	>;
}) => {
	const [clicked, setClicked] = React.useState(false);

	return (
		<Pressable
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
			onPress={() => navigation.toggleDrawer()}
			{...props}
		>
			<View
				style={{
					...style.button,
					backgroundColor: clicked ? Colors.primaryLighter : Colors.transparent,
				}}
			>
				<Icons.menu stroke={Colors.linkColor} />
			</View>
		</Pressable>
	);
};

export default MenuButton;

const style = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		color: Colors.linkColor,
		padding: 20,
		flex: 1,
	},
});
