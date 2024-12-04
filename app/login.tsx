import Button from '@/shared/Button/Button';
import { Colors, Gaps } from '@/shared/constants/styles-system';
import ErrorNotification from '@/shared/ErrorNotification/ErrorNotification';
import Input from '@/shared/Input/Input';
import { useEffect, useState } from 'react';

import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { loginAtom } from '@/entities/auth/model/auth.state';
import { useAtom } from 'jotai';
import { router } from 'expo-router';

export default function Login() {
	const [localError, setLocalError] = useState<string | null>(null);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom);

	const submit = () => {
		if (!email) {
			setLocalError('Введите email');
			return;
		}
		if (!password) {
			setLocalError('Введите пароль');
			return;
		}

		login({ email, password });
	};

	useEffect(() => {
		if (error) {
			setLocalError(error);
		}
	}, [error]);

	useEffect(() => {
		if (accessToken) {
			router.replace('/');
		}
	}, [accessToken]);

	return (
		<View style={styles.container}>
			<ErrorNotification error={localError} />
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.content}
			>
				<View style={styles.form}>
					<View style={styles.inputs}>
						{/* <Image
						resizeMode="cover"
						source={require('../assets/images/_logo.png')}
						style={styles.image}
					/> */}
						<Input
							placeholder="Кто ты, воин?"
							placeholderTextColor={Colors.gray}
							onChangeText={setEmail}
						/>
						<Input
							placeholder="Пароль"
							placeholderTextColor={Colors.gray}
							isPassword={true}
							onChangeText={setPassword}
						/>
					</View>
					<Button text="Войти" isLoading={isLoading} onPress={submit} disabled={false} />
				</View>
				{/* <CustomLink text="Восстановить пароль" href={'/restore'} /> */}
			</KeyboardAvoidingView>
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
	// image: {
	// 	width: 150,
	// 	height: 50,
	// 	margin: 'auto',
	// },
	form: {
		alignSelf: 'stretch',
		width: '100%',
		margin: 'auto',
		gap: Gaps.g24,
		maxWidth: 400,
	},
	inputs: {
		gap: Gaps.g16,
	},
});
