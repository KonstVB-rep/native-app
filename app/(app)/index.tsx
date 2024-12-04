import { View, Text, TextStyle } from 'react-native';
import React from 'react';
import { Colors, FontSize } from '@/shared/constants/styles-system';
import Button from '@/shared/Button/Button';
import * as Notifications from 'expo-notifications';

const ObjectsList = () => {
	const allowsNotifications = async () => {
		const { granted, ios } = await Notifications.getPermissionsAsync();
		return granted || ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;
	};

	const requestPermissions = async () =>
		await Notifications.requestPermissionsAsync({
			ios: {
				allowAlert: true,
				allowBadge: true,
				allowSound: false,
			},
		});
	const scheduleNotification = async () => {
		const granted = await allowsNotifications();

		if (!granted) {
			await requestPermissions();
		}
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'Не забудь ничего',
				subtitle: 'Внимательно',
				body: 'Детальная информайия уведомления',
			},
			trigger: {
				type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
				seconds: 20,
				repeats: false,
			},
		});
	};
	return (
		<View>
			<Text style={{ color: Colors.secondary, fontSize: FontSize.f20 } as TextStyle}>
				Список проектов
			</Text>
			<Button text="Напомнить" onPress={scheduleNotification} />
			<Text style={{ color: Colors.secondary, fontSize: FontSize.f16 } as TextStyle}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quidem consequuntur
				amet quos soluta hic neque blanditiis magnam distinctio delectus a, harum ut natus officia
				ipsa omnis saepe doloribus beatae.
			</Text>
		</View>
	);
};

export default ObjectsList;
