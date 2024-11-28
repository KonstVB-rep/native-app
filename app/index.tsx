import Button from '@/shared/Button/Button';
import { Colors, FontSize, Gaps, Radius } from '@/shared/constants/styles-system';
import ErrorNotification from '@/shared/ErrorNotification/ErrorNotification';
import Input from '@/shared/Input/Input';
import { useState } from 'react';
import Logo from '@/assets/images/logo.png';

import { Image, Text, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
	const [error, setError] = useState<string | null>(null);

	const alertFn = () => {
		setError('Неверный логин и пароль');
		setTimeout(() => setError(null), 4000);
	};

	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Image source={Logo} resizeMode="contain" style={styles.logo} />
				<View style={styles.form}>
					<Input placeholder="Кто ты, воин?" placeholderTextColor={Colors.gray} />
					<Input placeholder="Пароль" placeholderTextColor={Colors.gray} isPassword={true} />
					<Button text="Войти" onPress={() => alertFn()} disabled={false} />
				</View>
				<Text style={styles.link}>Восстановить пароль</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		padding: 55,
		backgroundColor: Colors.primary,
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		gap: Gaps.g40,
	},
	form: {
		alignSelf: 'stretch',
		width: '100%',
		margin: 'auto',
		gap: Gaps.g24,
		maxWidth: 400,
	},
	logo: {
		width: 200,
		height: 200,
		borderRadius: Radius.rFull,
	},
	link: {
		fontSize: FontSize.f16,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: Colors.linkColor,
	},
});
