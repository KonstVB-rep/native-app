import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, FontFamily, FontSize, Gaps } from '@/shared/constants/styles-system';

import CustomLink from '@/shared/CustomLink/CustomLink';

const NotFound = () => {
	return (
		<View style={styles.container}>
			<Image source={require('../assets/images/page-not-found.png')} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.text}>Что-то пошло не так, страница не найдена.</Text>
				<Text style={styles.text}>Вернитеся на главный экран и попробуйте ещё раз.</Text>
			</View>
			<CustomLink text="На главный экран" href={'/login'} />
		</View>
	);
};

export default NotFound;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: Gaps.g20,
		padding: 40,
	},
	content: {
		gap: Gaps.g10,
		paddingBottom: 20,
	},
	image: {
		width: 280,
		height: 280,
	},
	text: {
		textAlign: 'center',
		color: Colors.secondary,
		fontSize: FontSize.f18,
		fontFamily: FontFamily.FiraSans,
	},
});
