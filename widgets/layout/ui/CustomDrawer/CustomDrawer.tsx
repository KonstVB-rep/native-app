import { View, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/commonjs/src/types';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Colors, Gaps } from '@/shared/constants/styles-system';
import CustomLink from '@/shared/CustomLink/CustomLink';
import CloseButton from '@/features/layout/ui/CloseButton/CloseButton';
import { logoutAtom } from '@/entities/auth/model/auth.state';
import { useAtom, useSetAtom } from 'jotai';
import { loadProfileAtom } from '@/entities/user/model/user.state';
import UserProfileDrawer from '@/widgets/user/ui/UserProfileDrawer/UserProfileDrawer';
import { Entypo, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import MenuItem from '@/entities/layout/ui/MenuItem/MenuItem';

const MENU_DRAWER = [
	{
		text: 'Профиль',
		path: 'profile',
		icon: <FontAwesome6 name="user-tie" size={24} color={Colors.linkColor} />,
	},
	{
		text: 'Объекты',
		path: 'index',
		icon: <Entypo name="location" size={24} color={Colors.linkColor} />,
	},
	{
		text: 'Сканнер QR-кода',
		path: 'qr-scanner',
		icon: <MaterialIcons name="qr-code-scanner" size={24} color={Colors.linkColor} />,
	},
];

const CustomDrawer = (props: DrawerContentComponentProps) => {
	const logout = useSetAtom(logoutAtom);

	const [profile, loadProfile] = useAtom(loadProfileAtom);

	useEffect(() => {
		loadProfile();
	}, []);

	return (
		<DrawerContentScrollView {...props} contentContainerStyle={style.scrollView}>
			<CloseButton {...props.navigation} />
			<View style={style.container}>
				<UserProfileDrawer profile={profile.profile} />
				<View style={style.menu}>
					{MENU_DRAWER.map((item) => (
						<MenuItem key={item.path} {...item} drawerProps={props} />
					))}
				</View>
				<View style={style.footer}>
					<CustomLink href={'/login'} text="Выход" onPress={logout} />
					<Image
						source={require('@/assets/images/ertel.png')}
						style={style.image}
						resizeMode="cover"
					/>
				</View>
			</View>
		</DrawerContentScrollView>
	);
};

export default CustomDrawer;

const style = StyleSheet.create({
	scrollView: {
		position: 'relative',
		flex: 1,
		backgroundColor: Colors.primaryLight,
	},
	container: {
		flex: 1,
		backgroundColor: Colors.primaryLight,
	},
	menu: {
		flexGrow: 1,
		gap: Gaps.g4,
	},
	image: {
		width: 80,
		height: 43,
		filter: 'brightness(0.6)',
	},
	footer: {
		padding: 20,
		gap: Gaps.g40,
		alignItems: 'center',
	},
});
