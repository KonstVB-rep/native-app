import { Colors } from '@/shared/constants/styles-system';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { Notificaiton } from '@/shared/Notification/Notification';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		'FiraSans-Regular': require('../assets/fonts/FiraSans-Regular.ttf'),
		'FiraSans-SemiBold': require('../assets/fonts/FiraSans-SemiBold.ttf'),
	});

	const insets = useSafeAreaInsets();

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<Notificaiton />
			<StatusBar style="light" />
			<Stack
				screenOptions={{
					statusBarBackgroundColor: Colors.darkColor,
					headerShown: false,
					contentStyle: {
						backgroundColor: Colors.primary,
						paddingTop: insets.top,
					},
				}}
			>
				<Stack.Screen name="login" />
				<Stack.Screen name="logout" />
				<Stack.Screen name="restore" options={{ presentation: 'modal' }} />
				<Stack.Screen name="+not-found" />
			</Stack>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
}
