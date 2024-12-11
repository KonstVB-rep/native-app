import React from 'react';
import { StyleSheet } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { authAtom } from '@/entities/auth/model/auth.state';
import { useAtomValue } from 'jotai';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/shared/constants/styles-system';

const ServicesLayout = () => {
	const { accessToken } = useAtomValue(authAtom);

	// if (!accessToken) {
	// 	return <Redirect href="/login" />;
	// }

	return (
		<SafeAreaProvider>
			<SafeAreaView style={style.container}>
				<Stack
					screenOptions={{
						headerShown: true,
						contentStyle: {
							backgroundColor: Colors.primary,
						},
						headerStyle: {
							backgroundColor: Colors.primaryLight,
						},
						headerTintColor: Colors.linkColor,
					}}
				>
					<Stack.Screen
						name="[title]/qr"
						options={({ route }) => ({
							headerTitle: `${(route.params as { title: string })?.title as string}/qr-code сканер`,
						})}
					/>
					<Stack.Screen
						name="[title]/nfc"
						options={({ route }) => ({
							headerTitle: `${(route.params as { title: string })?.title as string}/NFC`,
						})}
					/>
				</Stack>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default ServicesLayout;

const style = StyleSheet.create({
	container: {
		flex: 1,
	},
});
