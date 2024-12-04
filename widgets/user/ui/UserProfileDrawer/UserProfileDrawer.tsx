import { View, Text, StyleSheet, TextStyle } from 'react-native';

import { User } from '@/entities/user/model/user.model';
import { Colors, FontFamily, FontSize, Gaps } from '@/shared/constants/styles-system';
import Avatar from '@/entities/user/ui/Avatar/Avatar';

const UserProfileDrawer = ({ profile }: { profile: User | null }) => {
	if (!profile) return null;
	return (
		<View style={styles.container}>
			<Avatar image={profile?.photo || null} />
			<Text style={styles.name}>
				{profile?.name} {profile?.surname}
			</Text>
		</View>
	);
};

export default UserProfileDrawer;

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		marginTop: 40,
		marginBottom: 20,
		alignItems: 'center',
		gap: Gaps.g10,
	},
	name: {
		color: Colors.secondary,
		fontSize: FontSize.f20,
		fontFamily: FontFamily.FiraSans,
	} as TextStyle,
});
