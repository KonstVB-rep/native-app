import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import SuccessNotification from '@/shared/SuccessNotification/SuccessNotification';
import { Colors, Radius } from '@/shared/constants/styles-system';

import Svg, { Rect } from 'react-native-svg';

const QrCodeScanner = () => {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const [scanned, setScanned] = useState<boolean>(false);
	const [showBtnScan, setShowBtnScan] = useState<boolean>(false);

	useEffect(() => {
		const getCameraPermissions = async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === 'granted');
		};

		getCameraPermissions();
	}, []);

	// const handlePress = async (uri: string) => {
	// 	const url = uri; // Замените на ваш URL
	// 	const supported = await Linking.canOpenURL(url);

	// 	if (supported) {
	// 		await Linking.openURL(url);
	// 	} else {
	// 		console.log(`Can't open URL: ${url}`);
	// 	}
	// };

	const handleBarcodeScanned = async ({ type, data }: { type: string; data: string }) => {
		alert(`Bar code with type ${type} and data ${data} has been scanned!`);
		setScanned(true);
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

	if (hasPermission === null) {
		return <Text>Запрашивает разрешение камеры</Text>;
	}
	if (hasPermission === false) {
		return <Text>Нет доступа к камере</Text>;
	}

	return (
		<>
			<SuccessNotification successText={scanned ? 'QR-код успешно сканирован' : null} />
			<View style={styles.container}>
				<CameraView
					animateShutter={true}
					onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
					barcodeScannerSettings={{
						barcodeTypes: ['qr', 'pdf417'],
					}}
					style={{ ...StyleSheet.absoluteFillObject, ...styles.camera }}
				/>
				{!showBtnScan && (
					<Svg height="300" width="300" viewBox="0 0 300 300">
						<Rect
							x="0"
							y="0"
							width="300"
							height="300"
							fill={Colors.blackAlpha50}
							stroke={Colors.linkColor}
							strokeWidth="4"
							rx={Radius.r10}
						/>
					</Svg>
				)}
				{showBtnScan && (
					<Pressable
						onPress={handlePressScan}
						style={({ pressed }) => ({
							...styles.container__button,
							backgroundColor: pressed ? Colors.primaryLight : Colors.blackAlpha30,
							width: pressed ? 140 : 120,
							height: pressed ? 140 : 120,
						})}
					>
						<MaterialIcons name="qr-code-scanner" size={48} color={Colors.linkColor} />
					</Pressable>
				)}
			</View>
		</>
	);
};

export default QrCodeScanner;

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		// paddingHorizontal: 40,
		// paddingVertical: '60%',
		// backgroundColor: Colors.primaryLighter,
	},
	camera: {
		zIndex: -1,
		// marginHorizontal: '9%',
		// marginVertical: '60%',
	},
	container__button: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
		alignItems: 'center',
		justifyContent: 'center',
		height: 120,
		width: 120,
		borderRadius: Radius.rFull,
	},
});
