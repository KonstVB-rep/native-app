import { StyleSheet } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Radius } from '@/shared/constants/styles-system';

const Avatar = () => {
	return (
		// <>
		// 	{image ? (
		// 		<Image
		// 			source={{
		// 				uri: image,
		// 			}}
		// 			style={styles.image}
		// 		/>
		// 	) : (
		<MaterialCommunityIcons
			name="account-circle"
			size={100}
			color={Colors.gray}
			style={styles.image}
		/>
		// 		)}
		// 	</>
	);
};

export default Avatar;

const styles = StyleSheet.create({
	image: {
		width: 100,
		height: 100,
		borderRadius: Radius.rFull,
	},
});
