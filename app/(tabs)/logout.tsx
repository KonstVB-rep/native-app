import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { logoutAtom } from '@/entities/auth/model/auth.state';
import { useSetAtom } from 'jotai';
import CustomLink from '@/shared/CustomLink/CustomLink';
import { Colors, FontFamily, FontSize, Radius } from '@/shared/constants/styles-system';

const Tab = () => {
	const logout = useSetAtom(logoutAtom);
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('@/assets/images/doubt.png')}
				resizeMode="contain"
				style={styles.image}
			/>
			<Text style={styles.text}>Вы уверены,что хотите выйти?</Text>
			<View style={styles.content}>
				<Pressable
					onPress={logout}
					style={{ ...styles.pressable, backgroundColor: Colors.confirm }}
				>
					<CustomLink href={'/login'} text="Да" textColor={Colors.secondary} />
				</Pressable>
				<Pressable
					onPress={logout}
					style={{ ...styles.pressable, backgroundColor: Colors.unConfirm }}
				>
					<CustomLink href={'/'} text="Нет" textColor={Colors.secondary} />
				</Pressable>
			</View>
		</View>
	);
};

export default Tab;

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 30,
		padding: 40,
	},
	image: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		opacity: 0.2,
	},
	content: {
		flex: 1,
		gap: 20,
		paddingBottom: 20,
		flexDirection: 'row',
	},
	pressable: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		borderRadius: Radius.r30,
		width: 100,
		alignSelf: 'center',
		padding: 16,
	},
	text: {
		textAlign: 'center',
		color: Colors.secondary,
		fontSize: FontSize.f24,
		fontFamily: FontFamily.PoppinsSemiBold,
	},
});
