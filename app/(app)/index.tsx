import { View, Text } from 'react-native';
import { Colors, FontSize } from '@/shared/constants/styles-system';
import Button from '@/shared/Button/Button';
import { logoutAtom } from '@/entities/auth/model/auth.state';
import { useSetAtom } from 'jotai';

// vasia@pupkin.ru"
// password "12345678"
const ProjectsList = () => {
	const logout = useSetAtom(logoutAtom);
	return (
		<View>
			<Text style={{ color: Colors.secondary, fontSize: FontSize.f20 }}>Index</Text>
			<Button text="Выйти" onPress={logout} />
		</View>
	);
};

export default ProjectsList;
