import React from 'react';
// import { Redirect } from 'expo-router';
import { Colors } from '@/shared/constants/styles-system';

import { Stack } from 'expo-router';

const AppLayout = () => {
	// const { accessToken } = useAtomValue(authAtom);

	// if (!accessToken) {
	// 	return <Redirect href="/login" />;
	// }

	return (
		<Stack
			screenOptions={{
				statusBarBackgroundColor: Colors.darkColor,
				headerShown: false,
				contentStyle: {
					backgroundColor: Colors.primary,
				},
			}}
		>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	);
};

export default AppLayout;
