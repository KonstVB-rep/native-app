import React from 'react';
import { Stack } from 'expo-router';

const AppLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: true }} />
		</Stack>
	);
};

export default AppLayout;
