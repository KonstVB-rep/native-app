import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { Gaps } from '@/shared/constants/styles-system';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ObjectItem from '@/entities/object/ui/ObjectItem/ObjectItem';
// import * as Notifications from 'expo-notifications';

const DATA = [
	{
		id: 1,
		title: 'Объект 1',
		image: 'https://extraguide.ru/images/sp/a56cf12d7ab197f86d6f75e3d9735e1952e69f7d.jpg',
	},
	{
		id: 2,
		title: 'Объект 2',
		image: 'https://extraguide.ru/images/sp/a56cf12d7ab197f86d6f75e3d9735e1952e69f7d.jpg',
	},
	{
		id: 3,
		title: 'Объект 3',
		image: 'https://extraguide.ru/images/sp/a56cf12d7ab197f86d6f75e3d9735e1952e69f7d.jpg',
	},
	{
		id: 4,
		title: 'Объект 4',
		image: 'https://extraguide.ru/images/sp/a56cf12d7ab197f86d6f75e3d9735e1952e69f7d.jpg',
	},
];
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
		<SafeAreaProvider style={style.container}>
			<SafeAreaView style={style.content}>
				<FlatList
					data={DATA}
					renderItem={({ item }) => <ObjectItem {...item} />}
					keyExtractor={(item) => item.id.toString()}
					style={style.list}
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default ObjectsList;

const style = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		padding: 20,
	},
	list: {
		gap: Gaps.g16,
	},
	// content__item: {
	// 	flexDirection: 'column',
	// 	gap: 20,
	// 	padding: 10,
	// 	borderRadius: Radius.r10,
	// 	backgroundColor: Colors.gray,
	// },
	// wrapper: {
	// 	borderRadius: Radius.r10,
	// },
	// image: {
	// 	width: '100%',
	// 	height: 200,
	// 	borderRadius: Radius.r10,
	// 	marginBottom: 20,
	// },
	// menu__item: {
	// 	flexDirection: 'row',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// 	paddingHorizontal: 24,
	// 	paddingVertical: 16,
	// 	gap: Gaps.g20,
	// },
	// text: {
	// 	fontSize: FontSize.f16,
	// 	color: Colors.secondary,
	// 	textAlign: 'center',
	// 	textTransform: 'uppercase',
	// 	fontFamily: FontFamily.FiraSansSemiBold,
	// } as TextStyle,
	// icon: {
	// 	width: 24,
	// 	height: 24,
	// },
});
