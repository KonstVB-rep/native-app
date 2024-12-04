import { View, TextInput, TextInputProps, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Colors, FontFamily, FontSize, Radius } from '../constants/styles-system';
import { Icons } from '@/assets/icons';

const Input = ({ isPassword, ...props }: TextInputProps & { isPassword?: boolean }) => {
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
	return (
		<View>
			<TextInput
				style={styles.input}
				secureTextEntry={isPassword && !isPasswordVisible}
				{...props}
			/>
			{isPassword && (
				<Pressable style={styles.icon} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
					{!isPasswordVisible ? <Icons.eyeClosed /> : <Icons.eyeOpened />}
				</Pressable>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 50,
		borderRadius: Radius.r10,
		paddingHorizontal: 10,
		backgroundColor: Colors.darkColor,
		fontSize: FontSize.f20,
		color: Colors.white,
		fontFamily: FontFamily.FiraSans,
	} as TextInputProps,
	icon: {
		position: 'absolute',
		right: 10,
		top: '50%',
		transform: [{ translateY: '-50%' }],
	},
});

export default Input;
