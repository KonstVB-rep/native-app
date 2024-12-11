import { View, Text, Pressable, TextStyle, StyleSheet, Image } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FontFamily, FontSize, Gaps, Radius, Colors } from '@/shared/constants/styles-system';

const ServiceItem = ({ title, image }: { title: string; image: string }) => {
	return (
		<>
			<View style={style.content__item}>
				<Text style={style.title}>{title}</Text>
				<Image
					source={{
						uri: `${image}`,
					}}
					style={style.image}
				/>
				<View style={style.actions__container}>
					<Pressable
						onPress={() => router.push(`/services/${title}/qr`)}
						style={(props) => [
							{
								backgroundColor: props.pressed ? Colors.primaryLighter : Colors.primaryLight,
								outline: props.pressed ? '1px solid #fff' : 'none',
							},
							style.action,
						]}
					>
						<View style={style.action__item}>
							<View style={style.icon}>
								<MaterialIcons name="qr-code-scanner" size={24} color={Colors.linkColor} />
							</View>
							<Text style={style.text}>QR</Text>
						</View>
					</Pressable>
					<Pressable
						onPress={() => router.push(`/services/${title}/nfc`)}
						style={(props) => [
							{
								backgroundColor: props.pressed ? Colors.primaryLighter : Colors.primaryLight,
								outline: props.pressed ? '1px solid #fff' : 'none',
							},
							style.action,
						]}
					>
						<View style={style.action__item}>
							<View style={style.icon}>
								<MaterialCommunityIcons name="cellphone-nfc" size={24} color={Colors.linkColor} />
							</View>
							<Text style={style.text}>NFC</Text>
						</View>
					</Pressable>
				</View>
				{/* <CustomLink
						text="Скановать QR-код"
						href={'/objects/Красная поляна'}
					>
						<MaterialIcons name="qr-code-scanner" size={24} color={Colors.linkColor} />
					</CustomLink> */}
			</View>
		</>
	);
};

export default ServiceItem;

const style = StyleSheet.create({
	content__item: {
		flexDirection: 'column',
		gap: 20,
		padding: 10,
		marginVertical: 8,
		borderRadius: Radius.r10,
		backgroundColor: Colors.primaryLighter,
		maxWidth: 500,
		width: '100%',
		margin: 'auto',
	},
	title: {
		fontSize: FontSize.f24,
		color: Colors.secondary,
		textAlign: 'center',
		fontFamily: FontFamily.PoppinsSemiBold,
	},
	image: {
		height: 200,
		borderRadius: Radius.rFull,
		marginBottom: 20,
		aspectRatio: 1,
		margin: 'auto',
	},
	actions__container: {
		flexDirection: 'row',
		gap: Gaps.g10,
	},
	action: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: Gaps.g20,
		borderRadius: Radius.r10,
	},
	action__item: {
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: Gaps.g8,
		padding: 10,
	},
	text: {
		fontSize: FontSize.f16,
		color: Colors.secondary,
		textAlign: 'center',
		textTransform: 'uppercase',
		fontFamily: FontFamily.PoppinsSemiBold,
	} as TextStyle,
	icon: {
		width: 24,
		height: 24,
	},
});
