import React from 'react';
import { StyleSheet } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { authAtom } from '@/entities/auth/model/auth.state';
import { useAtomValue } from 'jotai';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Colors, FontFamily, FontSize } from '@/shared/constants/styles-system';

const ObjectsLayout = () => {
	const { accessToken } = useAtomValue(authAtom);

	if (!accessToken) {
		return <Redirect href="/login" />;
	}

	return (
		<SafeAreaProvider>
			<SafeAreaView style={style.container}>
				<Stack
					screenOptions={{
						statusBarBackgroundColor: Colors.darkColor,
						headerShown: false,
						contentStyle: {
							backgroundColor: Colors.primary,
						},
						headerStyle: {
							backgroundColor: Colors.primaryLight,
						},
					}}
				>
					<Stack.Screen
						name="[title]"
						options={({ route }) => ({
							title: `${(route.params as { title: string })?.title as string}`,
							headerShown: true,
							headerStyle: {
								backgroundColor: Colors.primaryLight,
							},
							headerTitleStyle: {
								color: Colors.secondary,
								fontFamily: FontFamily.FiraSans,
								fontSize: FontSize.f20,
							},
							headerTintColor: Colors.linkColor,
							headerShadowVisible: false,
						})}
					/>
				</Stack>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default ObjectsLayout;

const style = StyleSheet.create({
	container: {
		flex: 1,
	},
});
