import { User } from './user.model';
import { atom } from 'jotai';

import { User as UserModel } from '../model/user.model';
import { API_PATH } from '@/entities/user/api/api';

import { authAtom } from '@/entities/auth/model/auth.state';
import axios, { AxiosError } from 'axios';

export interface UserState {
	profile: UserModel | null;
	isLoading: boolean;
	error: string | null;
}

export const profileAtom = atom<UserState>({
	profile: null,
	isLoading: false,
	error: null,
});

export const loadProfileAtom = atom(
	async (get) => get(profileAtom),
	async (get, set) => {
		const { accessToken } = await get(authAtom);
		set(profileAtom, { profile: null, isLoading: true, error: null });
		try {
			const {
				data: { profile: user },
			} = await axios.get<{ profile: User }>(API_PATH.profile, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			set(profileAtom, { profile: user, isLoading: false, error: null });
		} catch (error) {
			if (error instanceof AxiosError) {
				set(profileAtom, {
					profile: null,
					isLoading: false,
					error: error.response?.data.message,
				});
			}
		}
	},
);
