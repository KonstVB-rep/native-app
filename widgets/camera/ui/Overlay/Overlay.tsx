import { Colors } from '@/shared/constants/styles-system';
import { Canvas, DiffRect, rect, rrect } from '@shopify/react-native-skia';
import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const innerDimension = 300;
const innerDimensionButton = 118;

export const Overlay = ({ keyValue = 'inner' }: { keyValue: 'inner' | 'innerCircle' }) => {
	const outer = rrect(rect(0, 0, width, height), 0, 0);
	const inner = rrect(
		rect(
			width / 2 - innerDimension / 2,
			height / 2 - innerDimension / 2 - 75,
			innerDimension,
			innerDimension,
		),
		20,
		20,
	);

	const innerCircle = rrect(
		rect(
			width / 2 - innerDimensionButton / 2,
			height / 2 - innerDimensionButton / 2 - 86,
			innerDimensionButton,
			innerDimensionButton,
		), // 150 - это ширина и высота прямоугольника
		1000,
		1000,
	);

	const currentInnerRect = {
		inner,
		innerCircle,
	};
	const selectedInner = currentInnerRect[keyValue];
	if (!selectedInner) {
		console.warn(`Invalid keyValue: "${keyValue}"`);
		return null; // Возвращаем null, если выбранный прямоугольник отсутствует
	}

	return (
		<Canvas style={Platform.OS === 'android' ? styles.container : StyleSheet.absoluteFillObject}>
			<DiffRect
				inner={selectedInner}
				outer={outer}
				color={Colors.black}
				blendMode={'saturation'}
				opacity={0.5}
			/>

			<DiffRect
				inner={selectedInner}
				outer={outer}
				color={Colors.linkColor}
				opacity={0.7}
				style={'stroke'}
				strokeWidth={2}
			/>
		</Canvas>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
