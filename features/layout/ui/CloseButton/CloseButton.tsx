import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors, Radius } from '@/shared/constants/styles-system';
import { AntDesign } from '@expo/vector-icons';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/commonjs/src/types';

const CloseButton = (navigation: DrawerNavigationHelpers) => {
	const [clicked, setClicked] = React.useState(false);

	return (
		<Pressable
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
			onPress={() => navigation.closeDrawer()}
			style={style.container}
		>
			<View
				style={{
					...style.button,
					backgroundColor: clicked ? Colors.primaryLighter : Colors.transparent,
				}}
			>
				{/* <Ionicons name="close-sharp" size={50} color={Colors.linkColor} style={style.icon} /> */}
				<AntDesign name="closecircle" size={30} color={Colors.linkColor} />
			</View>
		</Pressable>
	);
};

export default CloseButton;

const style = StyleSheet.create({
	container: {
		position: 'absolute',
		right: 0,
		top: 0,
		width: 70,
		height: 70,
		padding: 10,
		zIndex: 10,
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		color: Colors.linkColor,
		borderRadius: Radius.rFull,
	},
});
