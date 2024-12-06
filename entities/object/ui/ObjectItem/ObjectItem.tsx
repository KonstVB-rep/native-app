import { View, Text, Pressable, TextStyle, StyleSheet, Image } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FontFamily, FontSize, Gaps, Radius, Colors } from '@/shared/constants/styles-system';

const ObjectItem = ({ title, image }: { title: string; image: string }) => {
	return (
		<View style={style.content__item}>
			<Text style={style.text}>{title}</Text>
			<Image
				source={{
					uri: `${image}`,
				}}
				style={style.image}
			/>
			<Pressable
				onPress={() => router.push(`/objects/${title}`)}
				style={(props) => [
					{
						backgroundColor: props.pressed ? Colors.primaryLighter : Colors.primaryLight,
					},
					style.wrapper,
				]}
			>
				<View style={style.menu__item}>
					<View style={style.icon}>
						<MaterialIcons name="qr-code-scanner" size={24} color={Colors.linkColor} />
					</View>
					<Text style={style.text}>Скановать QR-код</Text>
				</View>
			</Pressable>
			{/* <CustomLink
						text="Скановать QR-код"
						href={'/objects/Красная поляна'}
					>
						<MaterialIcons name="qr-code-scanner" size={24} color={Colors.linkColor} />
					</CustomLink> */}
		</View>
	);
};

export default ObjectItem;

const style = StyleSheet.create({
	content__item: {
		flexDirection: 'column',
		gap: 20,
		padding: 10,
		marginVertical: 8,
		borderRadius: Radius.r10,
		backgroundColor: Colors.primaryLighter,
	},
	wrapper: {
		borderRadius: Radius.r10,
	},
	image: {
		width: '100%',
		height: 200,
		borderRadius: Radius.r10,
		marginBottom: 20,
	},
	menu__item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 24,
		paddingVertical: 16,
		gap: Gaps.g20,
	},
	text: {
		fontSize: FontSize.f16,
		color: Colors.secondary,
		textAlign: 'center',
		textTransform: 'uppercase',
		fontFamily: FontFamily.FiraSansSemiBold,
	} as TextStyle,
	icon: {
		width: 24,
		height: 24,
	},
});
