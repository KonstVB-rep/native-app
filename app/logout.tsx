import { View, Text, Pressable, StyleSheet } from 'react-native';
import { logoutAtom } from '@/entities/auth/model/auth.state';
import { useSetAtom } from 'jotai';
import CustomLink from '@/shared/CustomLink/CustomLink';
import { Colors } from '@/shared/constants/styles-system';

const Tab = () => {
	const logout = useSetAtom(logoutAtom);
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Вы уверены,что хотите выйти?</Text>
			<View style={styles.content}>
				<Pressable onPress={logout}>
					<CustomLink href={'/login'} text="Выйти" />
				</Pressable>
				<CustomLink href={'/'} text="Нет" />
			</View>
		</View>
	);
};

export default Tab;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
		padding: 40,
	},
	content: {
		gap: 20,
		paddingBottom: 20,
		flexDirection: 'row',
	},
	text: {
		textAlign: 'center',
		color: Colors.secondary,
		fontSize: 18,
		fontFamily: 'FiraSans',
	},
});
