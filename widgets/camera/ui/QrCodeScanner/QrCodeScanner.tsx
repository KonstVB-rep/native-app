import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Alert, Platform } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import SuccessNotification from '@/shared/SuccessNotification/SuccessNotification';
import { Colors, FontFamily, FontSize, Radius } from '@/shared/constants/styles-system';

// import Svg, { Rect } from 'react-native-svg';
import { Overlay } from '../Overlay/Overlay';
import Button from '@/shared/Button/Button';

import { useWindowDimensions } from 'react-native';

const QrCodeScanner = () => {
	// const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const [scanned, setScanned] = useState<boolean>(false);
	const [isOnFlashlight, setIsOnFlashlight] = useState<boolean>(false);
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

	const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
		Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
		setScanned(true);
	};
	// const handleBarCodeScanned = (props: any) => {
	// 	console.log(props, 'props.data');
	// 	if (!scanned) {
	// 		const { origin, size } = props.bounds; // Получаем координаты QR-кода
	// 		const codeCenterX = origin.x + size.width / 2;
	// 		const codeCenterY = origin.y + size.height / 2;

	// 		// Задаем границы центральной области
	// 		const frameXMin = 25; // Левый край области
	// 		const frameXMax = 325; // Правый край области
	// 		const frameYMin = 210; // Верхний край области
	// 		const frameYMax = 510; // Нижний край области

	// 		if (
	// 			codeCenterX >= frameXMin &&
	// 			codeCenterX <= frameXMax &&
	// 			codeCenterY >= frameYMin &&
	// 			codeCenterY <= frameYMax
	// 		) {
	// 			setScanned(true);
	// 			alert(`QR Code: ${props.data}`);
	// 		}
	// 	}
	// };
	const handlePressFlashlight = () => {
		setIsOnFlashlight(!isOnFlashlight);
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
				<Text style={styles.text}>Запрашивает разрешение камеры</Text>
			</View>
		);
	}
	if (!permission.granted) {
		return (
			<View style={{ ...styles.container, ...styles.container_dark }}>
				<Text style={styles.text}>Нет доступа к камере.</Text>
				<Button onPress={requestPermission} text="Предоставьте разрешение" />
			</View>
		);
	}

	return (
		<>
			<SuccessNotification successText={scanned ? 'QR-код успешно сканирован' : null} />
			{/* <View style={styles.container}> */}
			<CameraView
				animateShutter={true}
				facing="back"
				onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
				barcodeScannerSettings={{
					barcodeTypes: ['qr', 'pdf417'],
				}}
				mode={'picture'}
				enableTorch={isOnFlashlight}
				style={{ ...StyleSheet.absoluteFillObject, ...styles.camera }}
			/>
			{Platform.OS === 'ios' || Platform.OS === 'android' ? (
				<Overlay keyValue={!showBtnScan ? 'inner' : 'innerCircle'} />
			) : null}
			{/* {!showBtnScan && (
				<Svg height="300" width="300" viewBox="0 0 300 300" style={styles.absoluteCenter}>
					<Rect
						x="0"
						y="0"
						width="300"
						height="300"
						fill={Colors.transparent}
						stroke={Colors.linkColor}
						strokeWidth="4"
						rx={Radius.r20}
					/>
				</Svg>
			)} */}
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
			<View style={styles.flashlightField}>
				<Pressable onPress={handlePressFlashlight}>
					{!isOnFlashlight ? (
						<MaterialCommunityIcons name="flashlight" size={40} style={styles.flashlightIconOn} />
					) : (
						<MaterialCommunityIcons
							name="flashlight-off"
							size={40}
							style={styles.flashlightIconOff}
						/>
					)}
				</Pressable>
			</View>
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
			// paddingHorizontal: 40,
			// paddingVertical: '60%',
			// backgroundColor: Colors.primaryLighter,
		},
		container_dark: {
			backgroundColor: Colors.primaryLight,
		},
		text: {
			color: Colors.secondary,
			fontFamily: FontFamily.FiraSans,
			fontSize: FontSize.f18,
		},
		camera: {
			zIndex: -1,
			// marginHorizontal: '9%',
			// marginVertical: '60%',
		},
		absoluteCenter: {
			position: 'absolute',
			top: (windowHeight - 170) / 2,
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
		flashlightField: {
			position: 'absolute',
			display: 'flex',
			bottom: 0,
			right: 0,
			left: 0,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: Colors.primaryLight,
			padding: 10,
		},
		flashlightIconOff: {
			color: Colors.linkColor,
			backgroundColor: Colors.primaryLighter,
			borderRadius: Radius.rFull,
			padding: 10,
		},
		flashlightIconOn: {
			color: Colors.white,
			backgroundColor: Colors.primary,
			borderRadius: Radius.rFull,
			padding: 10,
		},
		// scanFrame: {
		// 	position: 'absolute',
		// 	top: 210,
		// 	left: 25,
		// 	width: 300, // Ширина рамки
		// 	height: 300, // Высота рамки
		// 	borderWidth: 2,
		// 	borderColor: Colors.linkColor,
		// 	borderRadius: 10,
		// },
	});

	return styles;
}
