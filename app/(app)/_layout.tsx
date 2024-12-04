import React from 'react';
import { StyleSheet } from 'react-native';
import { Redirect } from 'expo-router';
import { Colors, FontFamily, FontSize } from '@/shared/constants/styles-system';
import { authAtom } from '@/entities/auth/model/auth.state';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '@/widgets/layout/ui/CustomDrawer/CustomDrawer';
import { useAtomValue } from 'jotai';
import MenuButton from '@/features/layout/ui/MenuIButton/MenuButton';

const AppLayout = () => {
	const { accessToken } = useAtomValue(authAtom);

	if (!accessToken) {
		return <Redirect href="/login" />;
	}

	return (
		<GestureHandlerRootView style={style.container}>
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
		</GestureHandlerRootView>
	);
};

export default AppLayout;

const style = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
	},
});
