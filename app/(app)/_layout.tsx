import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { Colors } from '@/shared/constants/styles-system';
import { authAtom } from '@/entities/auth/model/auth.state';
import { useAtomValue } from 'jotai';

const AppLayout = () => {
	const { accessToken } = useAtomValue(authAtom);

	if (!accessToken) {
		return <Redirect href="/login" />;
	}

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
			<Stack.Screen name="index" options={{ headerShown: true }} />
		</Stack>
	);
};

export default AppLayout;
