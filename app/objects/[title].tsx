import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '@/shared/constants/styles-system';

const ObjectPage = () => {
	const { title } = useLocalSearchParams();
	return (
		<View>
			<Text style={{ color: Colors.secondary }}>Страница объекта {title}</Text>
		</View>
	);
};

export default ObjectPage;
