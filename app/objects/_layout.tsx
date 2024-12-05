import React from 'react';
import { Redirect, Stack } from 'expo-router';
import { authAtom } from '@/entities/auth/model/auth.state';
import { useAtomValue } from 'jotai';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '@/shared/constants/styles-system';

const ObjectsLayout = () => {
	const { accessToken } = useAtomValue(authAtom);

	if (!accessToken) {
		return <Redirect href="/login" />;
	}

	return (
		<SafeAreaProvider>
			{/* <StatusBar style="light" /> */}
			<Stack
				screenOptions={{
					statusBarBackgroundColor: Colors.darkColor,
					headerShown: false,
					contentStyle: {
						backgroundColor: Colors.primary,
					},
				}}
			>
				<Stack.Screen
					name="[title]"
					options={({ route }) => ({
						title: `${(route.params as { title: string })?.title as string}`,
						headerShown: true,
					})}
				/>
				{/* <GestureHandlerRootView style={style.container}>
				<Drawer
					drawerContent={(props) => <CustomDrawer {...props} />}
					screenOptions={({ navigation }) => ({
						headerStyle: {
							backgroundColor: Colors.primaryLight,
							shadowColor: Colors.primaryLight,
						},
						overlayColor: Colors.gray,
						headerLeft: () => <MenuButton navigation={navigation} />,
						headerTitleAlign: 'center',
						headerTitleStyle: {
							color: Colors.secondary,
							fontFamily: FontFamily.FiraSans,
							fontSize: FontSize.f20,
						},
						headerTintColor: Colors.linkColor,
						drawerStyle: {
							width: '100%',
						},
						sceneStyle: { backgroundColor: Colors.primary },
					})}
				>
					<Drawer.Screen name="index" options={{ title: 'Объекты' }} />
					<Drawer.Screen name="profile" options={{ title: 'Профиль' }} />
					<Drawer.Screen name="qr-scanner" options={{ title: 'Qr-код сканер' }} />
				</Drawer>
			</GestureHandlerRootView> */}
			</Stack>
		</SafeAreaProvider>
	);
};

export default ObjectsLayout;

// const style = StyleSheet.create({
// 	container: {
// 		position: 'relative',
// 		flex: 1,
// 	},
// });
