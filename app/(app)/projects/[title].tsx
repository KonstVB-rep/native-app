import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Colors, FontSize } from '@/shared/constants/styles-system';

const ProjectPage = () => {
	const { title } = useLocalSearchParams();

	return (
		<View>
			<Text style={{ color: Colors.secondary, fontSize: FontSize.f20 }}>
				Страница объекта {title}
			</Text>
		</View>
	);
};

export default ProjectPage;
