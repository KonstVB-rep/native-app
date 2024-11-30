import Button from '@/shared/Button/Button';
import { Colors, FontFamily, FontSize, Gaps } from '@/shared/constants/styles-system';
import ErrorNotification from '@/shared/ErrorNotification/ErrorNotification';
import Input from '@/shared/Input/Input';
import { useState } from 'react';

import { Text, StyleSheet, View } from 'react-native';
import CustomLink from '@/shared/CustomLink/CustomLink';

export default function Login() {
	const [error, setError] = useState<string | null>(null);

	const alertFn = () => {
		setError('Неверный логин и пароль');
		setTimeout(() => setError(null), 4000);
	};

	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<View style={styles.form}>
					<Text style={styles.title}>ertel</Text>
					<Input placeholder="Кто ты, воин?" placeholderTextColor={Colors.gray} />
					<Input placeholder="Пароль" placeholderTextColor={Colors.gray} isPassword={true} />
					<Button text="Войти" onPress={() => alertFn()} disabled={false} />
				</View>
				<CustomLink text="Восстановить пароль" href={'/restore'} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		padding: 55,
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		gap: Gaps.g40,
		zIndex: 2,
	},
	title: {
		fontSize: FontSize.f40,
		textAlign: 'center',
		color: Colors.secondary,
		fontFamily: FontFamily.SourGummyExpandedSemiBoldItalic,
	},
	form: {
		alignSelf: 'stretch',
		width: '100%',
		margin: 'auto',
		gap: Gaps.g24,
		maxWidth: 400,
	},
});
