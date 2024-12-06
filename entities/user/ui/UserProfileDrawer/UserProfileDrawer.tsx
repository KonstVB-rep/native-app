import { View, Text, StyleSheet, Image, TextStyle } from 'react-native';

import { User } from '../../model/user.model';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, FontFamily, FontSize, Gaps, Radius } from '@/shared/constants/styles-system';

const UserProfileDrawer = ({ profile }: { profile: User | null }) => {
	return (
		<View style={styles.container}>
			<View style={styles.avatarBox}>
				{profile?.photo ? (
					<Image
						source={{
							uri: profile.photo,
						}}
						style={styles.image}
					/>
				) : (
					<MaterialCommunityIcons
						name="account-circle"
						size={140}
						color={Colors.gray}
						style={styles.image}
					/>
				)}
			</View>
			<Text style={styles.name}>
				{profile?.name} {profile?.surname}
			</Text>
		</View>
	);
};

export default UserProfileDrawer;

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		marginBottom: 20,
		alignItems: 'center',
		gap: Gaps.g10,
	},
	avatarBox: {
		position: 'relative',
	},
	image: {
		width: 140,
		height: 140,
		borderRadius: Radius.rFull,
	},
	name: {
		color: Colors.secondary,
		fontSize: FontSize.f20,
		fontFamily: FontFamily.FiraSans,
	} as TextStyle,
});
