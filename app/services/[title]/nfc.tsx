import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Colors } from '@/shared/constants/styles-system';
import { useLocalSearchParams } from 'expo-router';

const NFCreaderPage = () => {
	const { title } = useLocalSearchParams();
	return (
		<View style={styles.container}>
			<Text style={{ color: Colors.secondary }}>NFC {title}</Text>
		</View>
	);
};

export default NFCreaderPage;

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
	},
});
