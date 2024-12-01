import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import axios, { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'jotai';
import { IAuthResponse, ILoginRequest } from './auth.model';
import { API_PATH } from '../api/api';

export interface AuthState {
	accessToken: string | null;
	isLoading: boolean;
	error: string | null;
}

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

const INITIAL_STATE: AuthState = { accessToken: null, isLoading: false, error: null };

export const authAtom = atomWithStorage<AuthState>('auth', INITIAL_STATE, storage);

export const loginAtom = atom(
	(get) => get(authAtom),
	async (_get, set, { email, password }: ILoginRequest) => {
		set(authAtom, { accessToken: null, isLoading: true, error: null });
		try {
			await new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));
			const { data } = await axios.post<IAuthResponse>(API_PATH.login, {
				email,
				password,
			});
			set(authAtom, { accessToken: data.accessToken, isLoading: false, error: null });
		} catch (error) {
			if (error instanceof AxiosError) {
				set(authAtom, {
					accessToken: null,
					isLoading: false,
					error: error.response?.data.message,
				});
			}
		}
	},
);

export const logoutAtom = atom(null, (_get, set) => {
	set(authAtom, INITIAL_STATE);
});
