// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Pressable } from 'react-native';
// import { CameraView, Camera } from 'expo-camera';
// import { Colors } from '@/shared/constants/styles-system';
// import { MaterialIcons } from '@expo/vector-icons';
// import SuccessNotification from '@/shared/SuccessNotification/SuccessNotification';
// import Svg, { Polygon } from 'react-native-svg';
import QrCodeScanner from '@/widgets/objects/ui/QrCodeScanner/QrCodeScanner';

export default function QrScanner() {
	// const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	// const [scanned, setScanned] = useState<boolean>(false);
	// const [successScan, setSuccessScan] = useState<boolean>(false);
	// const [showBtnScan, setShowBtnScan] = useState<boolean>(false);

	// useEffect(() => {
	// 	const getCameraPermissions = async () => {
	// 		const { status } = await Camera.requestCameraPermissionsAsync();
	// 		setHasPermission(status === 'granted');
	// 	};

	// 	getCameraPermissions();
	// }, []);

	// // const handlePress = async (uri: string) => {
	// // 	const url = uri; // Замените на ваш URL
	// // 	const supported = await Linking.canOpenURL(url);

	// // 	if (supported) {
	// // 		await Linking.openURL(url);
	// // 	} else {
	// // 		console.log(`Can't open URL: ${url}`);
	// // 	}
	// // };

	// const handleBarcodeScanned = async ({ type, data }: { type: string; data: string }) => {
	// 	console.log(`${type} and ${data} has been scanned!`);

	// 	setSuccessScan(true);
	// 	await new Promise((resolve) => setTimeout(resolve, 1000));
	// 	setScanned(true);
	// 	setSuccessScan(false);
	// 	// alert(`Bar code with type ${type} and data ${data} has been scanned!`);
	// };

	// const handleRepeateScan = () => {
	// 	setScanned(false);
	// 	setShowBtnScan(false);
	// };

	// useEffect(() => {
	// 	if (scanned) {
	// 		setShowBtnScan(true);
	// 	}
	// }, [scanned]);

	// if (hasPermission === null) {
	// 	return <Text>Запрашивает разрешение камеры</Text>;
	// }
	// if (hasPermission === false) {
	// 	return <Text>Нет доступа к камере</Text>;
	// }

	return (
		<QrCodeScanner />
		// <>
		// 	<SuccessNotification successText={successScan ? 'QR-код успешно сканирован' : null} />
		// 	<View style={styles.container}>
		// 		<CameraView
		// 			animateShutter={true}
		// 			onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
		// 			barcodeScannerSettings={{
		// 				barcodeTypes: ['qr', 'pdf417'],
		// 			}}
		// 			style={StyleSheet.absoluteFillObject}
		// 		/>
		// 		{!showBtnScan && (
		// 			<Svg height="300" width="300">
		// 				<Polygon
		// 					points="0,0 300,0 300,300 0,300"
		// 					fill={Colors.blackAlpha50} // Цвет полигона с прозрачностью
		// 					stroke={Colors.linkColor} // Цвет границы
		// 					strokeWidth="2" // Толщина границы
		// 				/>
		// 			</Svg>
		// 		)}
		// 		{showBtnScan && (
		// 			<Pressable onPress={handleRepeateScan} style={styles.container__button}>
		// 				<MaterialIcons name="qr-code-scanner" size={48} color={Colors.linkColor} />
		// 			</Pressable>
		// 		)}
		// 	</View>
		// </>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		flexDirection: 'column',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	container__button: {
// 		position: 'absolute',
// 		top: '50%',
// 		left: '50%',
// 		transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
// 		backgroundColor: Colors.blackAlpha50,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		height: 120,
// 		width: 120,
// 		borderRadius: 1000,
// 	},
// 	// text: {
// 	// 	color: Colors.secondary,
// 	// 	fontFamily: FontFamily.FiraSans,
// 	// 	textAlign: 'center',
// 	// 	fontSize: FontSize.f18,
// 	// } as TextStyle,
// });
