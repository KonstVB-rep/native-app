import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { Gaps } from '@/shared/constants/styles-system';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ObjectItem from '@/entities/service/ui/ServiceItem/ServiceItem';

const DATA = [
	{
		id: 1,
		title: 'Тюбинг',
		image:
			'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_preview/757/c1200/04ff4117-a77a-4577-8324-9d5c77915b69.jpeg',
	},
	{
		id: 2,
		title: 'Лыжи',
		image:
			'https://main-cdn.sbermegamarket.ru/big2/hlr-system/20/66/76/04/34/11/27/100027624024b6.jpg',
	},
	{
		id: 3,
		title: 'Санки',
		image:
			'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696591935_gas-kvas-com-p-kartinki-sani-10.jpg',
	},
	{
		id: 4,
		title: 'Коньки',
		image: 'https://dobro-sklad.ru/upload/iblock/04d/04da7aaf68234a67961eed8dabcab712.jpg',
	},
];
const SevicesList = () => {
	return (
		<SafeAreaProvider style={styles.container}>
			<SafeAreaView style={styles.content}>
				<ScrollView style={styles.list}>
					{DATA.map((item) => (
						<ObjectItem key={item.title} {...item} />
					))}
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default SevicesList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		paddingHorizontal: 20,
	},
	list: {
		gap: Gaps.g16,
		// overflowY: 'auto',
		// maxHeight: Platform.OS === 'web' ? windowHeight : 'auto',
		// paddingBottom: Platform.OS === 'web' ? 80 : 0,
	},
});
