import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Colors, FontSize } from '@/shared/constants/styles-system';

const ProjectsList = () => {
	const { title } = useLocalSearchParams();
	console.log(title);
	return (
		<View>
			<Text style={{ color: Colors.secondary, fontSize: FontSize.f20 }}>Список проектов</Text>
		</View>
	);
};

export default ProjectsList;
