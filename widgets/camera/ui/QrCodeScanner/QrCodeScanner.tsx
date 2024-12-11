import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Platform } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import SuccessNotification from '@/shared/SuccessNotification/SuccessNotification';
import {
	Colors,
	FontFamily,
	FontSize,
	Gaps,
	HEADER_HEIGHT,
	Radius,
} from '@/shared/constants/styles-system';

import { Overlay } from '../Overlay/Overlay';
import Button from '@/shared/Button/Button';

import { useWindowDimensions } from 'react-native';

const QrCodeScanner = ({
	isOnFlashlight,
	setShowModal,
}: {
	isOnFlashlight: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [scanned, setScanned] = useState<boolean>(false);
	const [showBtnScan, setShowBtnScan] = useState<boolean>(false);
	const [permission, requestPermission] = useCameraPermissions();

	const windowHeight = useWindowDimensions().height;

	const styles = createStyles(windowHeight);

	// const handlePress = async (uri: string) => {
	// 	const url = uri; // Замените на ваш URL
	// 	const supported = await Linking.canOpenURL(url);

	// 	if (supported) {
	// 		await Linking.openURL(url);
	// 	} else {
	// 		console.log(`Can't open URL: ${url}`);
	// 	}
	// };
	const handleBarCodeScanned = async ({ type, data }: { type: string; data: string }) => {
		console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
		await new Promise((resolve) => setTimeout(resolve, 500))
			.then(() => setScanned(true))
			.then(() => setShowModal(true));
	};

	const handlePressScan = () => {
		setScanned(false);
		setShowBtnScan(false);
	};

	useEffect(() => {
		if (scanned) {
			setShowBtnScan(true);
		}
	}, [scanned]);

	if (!permission) {
		return (
			<View style={{ ...styles.container, ...styles.container_dark }}>
				<Feather name="camera-off" size={120} color={Colors.secondary} />
				<Text style={styles.text}>Запрашивает разрешение камеры</Text>
			</View>
		);
	}
	if (!permission.granted) {
		return (
			<View style={{ ...styles.container, ...styles.container_dark }}>
				<Feather name="camera-off" size={120} color={Colors.secondary} />
				<Text style={styles.text}>Нет доступа к камере</Text>
				<Button onPress={requestPermission} text="Предоставьте разрешение" />
			</View>
		);
	}

	return (
		<>
			<SuccessNotification successText={scanned ? 'QR-код успешно сканирован' : null} />
			<CameraView
				animateShutter={true}
				facing="back"
				onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
				barcodeScannerSettings={{
					barcodeTypes: ['qr', 'pdf417'],
				}}
				enableTorch={isOnFlashlight}
				style={{ ...StyleSheet.absoluteFillObject, ...styles.camera }}
			/>
			{Platform.OS === 'ios' || Platform.OS === 'android' ? (
				<Overlay keyValue={!showBtnScan ? 'inner' : 'innerCircle'} />
			) : null}
			{showBtnScan && (
				<Pressable
					onPress={handlePressScan}
					style={({ pressed }) => ({
						...styles.container__button,
						...styles.absoluteCenter,
						backgroundColor: Colors.primaryLight,
						width: pressed ? 140 : 120,
						height: pressed ? 140 : 120,
					})}
				>
					<MaterialIcons name="qr-code-scanner" size={48} color={Colors.linkColor} />
				</Pressable>
			)}
		</>
	);
};

export default QrCodeScanner;

function createStyles(windowHeight: number) {
	const styles = StyleSheet.create({
		container: {
			position: 'relative',
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			gap: Gaps.g20,
		},
		container_dark: {
			backgroundColor: Colors.primaryLight,
		},
		text: {
			color: Colors.secondary,
			fontFamily: FontFamily.Poppins,
			fontSize: FontSize.f20,
		},
		camera: {
			zIndex: -1,
		},
		absoluteCenter: {
			position: 'absolute',
			top: windowHeight / 2 - HEADER_HEIGHT,
			left: '50%',
			transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
			alignItems: 'center',
			justifyContent: 'center',
		},
		container__button: {
			height: 120,
			width: 120,
			borderRadius: Radius.rFull,
		},
	});

	return styles;
}
