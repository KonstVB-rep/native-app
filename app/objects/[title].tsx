// import { View, StyleSheet } from 'react-native';
import React from 'react';
// import { useLocalSearchParams } from 'expo-router';
import QrCodeScanner from '@/widgets/objects/ui/QrCodeScanner/QrCodeScanner';

const ObjectPage = () => {
	// const { title } = useLocalSearchParams();
	return (
		// <View style={styles.container}>
		// {/* <Text style={{ color: Colors.secondary }}>Страница объекта {title}</Text> */}
		<QrCodeScanner />
		// </View>
	);
};

export default ObjectPage;

// const styles = StyleSheet.create({
// 	container: {
// 		position: 'relative',
// 		flex: 1,
// 	},
// });
