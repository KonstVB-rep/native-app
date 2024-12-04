import { View, StyleSheet } from 'react-native';
import React from 'react';
import ImageUploader from '@/shared/ImageUploader/ImageUploader';
import { Gaps } from '@/shared/constants/styles-system';
import Avatar from '@/entities/user/ui/Avatar/Avatar';

const Profile = () => {
	const [image, setImage] = React.useState<string | null>(null);

	return (
		<View style={styles.container}>
			<View style={styles.avatarBox}>
				<Avatar />
				<ImageUploader onUpload={setImage} onError={(e) => console.log(e)} />
			</View>
		</View>
	);
};

export default Profile;

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
});
