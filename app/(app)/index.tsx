import { View, Text, TextStyle, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Colors, FontFamily, FontSize, Gaps, Radius } from '@/shared/constants/styles-system';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import CustomLink from '@/shared/CustomLink/CustomLink';
// import * as Notifications from 'expo-notifications';

const ObjectsList = () => {
	// const allowsNotifications = async () => {
	// 	const { granted, ios } = await Notifications.getPermissionsAsync();
	// 	return granted || ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;
	// };

	// const requestPermissions = async () =>
	// 	await Notifications.requestPermissionsAsync({
	// 		ios: {
	// 			allowAlert: true,
	// 			allowBadge: true,
	// 			allowSound: false,
	// 		},
	// 	});
	// const scheduleNotification = async () => {
	// 	const granted = await allowsNotifications();

	// 	if (!granted) {
	// 		await requestPermissions();
	// 	}
	// 	Notifications.scheduleNotificationAsync({
	// 		content: {
	// 			title: 'Не забудь ничего',
	// 			subtitle: 'Внимательно',
	// 			body: 'Детальная информайия уведомления',
	// 		},
	// 		trigger: {
	// 			type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
	// 			seconds: 20,
	// 			repeats: false,
	// 		},
	// 	});
	// };
	return (
		<View style={style.container}>
			<View style={style.content}>
				<View style={style.content__item}>
					<Text style={style.text}>Красная поляна</Text>
					<Image
						source={{
							uri: 'https://extraguide.ru/images/sp/a56cf12d7ab197f86d6f75e3d9735e1952e69f7d.jpg',
						}}
						style={style.image}
					/>
					<Pressable
						onPress={() => router.push(`/objects/Красная поляна`)}
						style={(props) => [
							{
								backgroundColor: props.pressed ? Colors.primaryLighter : Colors.primaryLight,
							},
							style.wrapper,
						]}
					>
						<View style={style.menu__item}>
							<View style={style.icon}>
								<MaterialIcons name="qr-code-scanner" size={24} color={Colors.linkColor} />
							</View>
							<Text style={style.text}>Скановать QR-код</Text>
						</View>
					</Pressable>
					{/* <CustomLink
						text="Скановать QR-код"
						href={'/objects/Красная поляна'}
					>
						<MaterialIcons name="qr-code-scanner" size={24} color={Colors.linkColor} />
					</CustomLink> */}
				</View>
				<View style={style.content__item}>
					<Text style={style.text}>Чекерил</Text>
					<Image
						source={{
							uri: 'https://extraguide.ru/images/sp/a56cf12d7ab197f86d6f75e3d9735e1952e69f7d.jpg',
						}}
						style={style.image}
					/>
					<Pressable
						onPress={() => router.push(`/objects/Чекерил`)}
						style={(props) => [
							{
								backgroundColor: props.pressed ? Colors.primaryLighter : Colors.primaryLight,
							},
							style.wrapper,
						]}
					>
						<View style={style.menu__item}>
							<View style={style.icon}>
								<MaterialIcons name="qr-code-scanner" size={24} color={Colors.linkColor} />
							</View>
							<Text style={style.text}>Скановать QR-код</Text>
						</View>
					</Pressable>
					{/* <CustomLink
						text="Скановать QR-код"
						href={'/objects/Красная поляна'}
					>
						<MaterialIcons name="qr-code-scanner" size={24} color={Colors.linkColor} />
					</CustomLink> */}
				</View>
			</View>
		</View>
	);
};

export default ObjectsList;

const style = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	content: {
		flex: 1,
		paddingHorizontal: 24,
		gap: Gaps.g16,
	},
	content__item: {
		flexDirection: 'column',
		gap: 20,
		padding: 10,
		borderRadius: Radius.r10,
		backgroundColor: Colors.gray,
	},
	wrapper: {
		borderRadius: Radius.r10,
	},
	image: {
		width: '100%',
		height: 200,
		borderRadius: Radius.r10,
		marginBottom: 20,
	},
	menu__item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 24,
		paddingVertical: 16,
		gap: Gaps.g20,
	},
	text: {
		fontSize: FontSize.f16,
		color: Colors.secondary,
		textAlign: 'center',
		textTransform: 'uppercase',
		fontFamily: FontFamily.FiraSansSemiBold,
	} as TextStyle,
	icon: {
		width: 24,
		height: 24,
	},
});
