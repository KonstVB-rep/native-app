import { atom } from 'jotai';

import { User as UserModel } from '../model/user.model';

export interface UserState {
	profile: UserModel | null;
	isLoading: boolean;
	error: string | null;
}

export const profileAtom = atom<UserState>({
	profile: {
		name: 'Jack',
		id: 1,
		photo: 'https://i.pravatar.cc/150?img=3',
		surname: 'Sparrow',
	},
	isLoading: false,
	error: null,
});
