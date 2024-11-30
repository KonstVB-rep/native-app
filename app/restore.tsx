import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Colors } from '@/shared/constants/styles-system';
import CustomLink from '@/shared/CustomLink/CustomLink';
const Restore = () => {
	return (
		<View>
			<Link href={'/login'}>
				<Text style={{ color: Colors.secondary }}>Back</Text>
			</Link>
			<Text style={{ color: Colors.secondary }}>Restore</Text>
			<CustomLink text="На объект" href={'/projects/Наш_Дом'} />
		</View>
	);
};

export default Restore;
