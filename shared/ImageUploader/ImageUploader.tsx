import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors, Radius } from '../constants/styles-system';
import {
	useMediaLibraryPermissions,
	ImagePickerResult,
	launchImageLibraryAsync,
	PermissionStatus,
} from 'expo-image-picker';
import FormData from 'form-data';
import axios, { AxiosError } from 'axios';
import { FILE_API } from '../constants/api';

interface ImageUploaderProps {
	onUpload: (uri: string) => void;
	onError: (error: string) => void;
}

const ImageUploader = ({ onUpload, onError }: ImageUploaderProps) => {
	// const [image, setImage] = React.useState<string | null>(null);
	const [libraryPermission, requestLibraryPermission] = useMediaLibraryPermissions();

	const upload = async () => {
		const hasPermission = await varifyLibraryPermission();

		if (!hasPermission) {
			onError('Не достаточно прав.');
			return null;
		}

		const asset = await pickImage();

		if (!asset) {
			onError('Не выбрано изображение.');
			return null;
		}

		onUpload(asset.uri);

		const uploadedUrl = await uploadToServer(asset.uri, asset.fileName ?? '');
		if (!uploadedUrl) {
			onError('Не удалось загрузить изображение.');
		}

		// onUpload(uploadedUrl as string);
	};

	const varifyLibraryPermission = async () => {
		if (libraryPermission?.status === PermissionStatus.UNDETERMINED) {
			const res = await requestLibraryPermission();
			return res.granted;
		}
		if (libraryPermission?.status === PermissionStatus.DENIED) {
			const res = await requestLibraryPermission();
			return res.granted;
		}
		return true;
	};

	const uploadToServer = async (uri: string, name: string): Promise<null | unknown> => {
		const formData: FormData = new FormData();
		formData.append('files', {
			uri,
			type: 'image/jpeg',
			name,
		});

		try {
			const { data } = await axios.post(FILE_API.uploadImage, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			onUpload(data.url.original);
			return data.url.original;
		} catch (error) {
			if (error instanceof AxiosError) console.log(error.response?.data);
			return null;
		}
	};

	const pickImage = async () => {
		const result: ImagePickerResult = await launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!result.assets) {
			return null;
			// uploadToServer(result.assets[0].uri, result.assets[0].fileName ?? '');
			// onUpload(result.assets[0].uri);
		}

		return result.assets[0];
	};

	return (
		<Pressable
			style={({ pressed }) => ({
				...style.iconContainer,
				opacity: pressed ? 0.5 : 1,
				transform: [{ scale: pressed ? 1.1 : 1 }],
			})}
			onPress={upload}
		>
			<MaterialIcons name="add-a-photo" size={20} color={Colors.white} style={style.icon} />
		</Pressable>
	);
};

export default ImageUploader;

const style = StyleSheet.create({
	iconContainer: {
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		right: 0,
		bottom: 5,
		padding: 10,
		borderRadius: Radius.rFull,
		backgroundColor: Colors.primaryDarker,
		transitionProperty: 'all',
		transitionTimingFunction: 'ease-in-out',
		transitionDuration: '1000ms',
		borderColor: Colors.gray,
		borderStyle: 'dashed',
		borderWidth: 1,
	},
	icon: {
		width: 20,
		height: 20,
	},
});
