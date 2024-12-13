import React from 'react';
import { Redirect, Tabs } from 'expo-router';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Colors, FontFamily, Gaps } from '@/shared/constants/styles-system';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { authAtom } from '@/entities/auth/model/auth.state';
import { useAtom, useAtomValue } from 'jotai';
import { HapticTab } from '@/shared/HapticTab';
import TabBarBackground from '@/shared/TabBarBackground';
import { StatusBar } from 'expo-status-bar';

const TabIcon = ({
	children,
	name,
	color,
	focused,
}: {
	children: React.ReactNode;
	name: string;
	color: string;
	focused: boolean;
}) => (
	<View style={styles.container__item}>
		{children}
		<Text style={{ fontFamily: focused ? FontFamily.PoppinsSemiBold : FontFamily.Poppins, color }}>
			{name}
		</Text>
	</View>
);

const TabsLayout = () => {
	const insets = useSafeAreaInsets();
	// const { accessToken } = useAtomValue(authAtom);

	// if (!accessToken) {
	// 	return <Redirect href="/login" />;
	// }

	console.log(insets);
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: Colors.linkColor,
					tabBarInactiveTintColor: Colors.gray,
					headerStyle: {
						backgroundColor: Colors.primary,
						borderColor: Colors.transparent,
						borderBottomColor: Colors.primaryLighter,
					},
					headerTitleStyle: { color: Colors.secondary },
					headerTitleAlign: 'center',
					sceneStyle: { backgroundColor: Colors.primaryLight },
					tabBarStyle: {
						backgroundColor: Colors.primary,
						borderTopWidth: 0,
						borderTopColor: Colors.primary,
						height: 84,
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: 'Услуги',
						tabBarIcon: ({ color, focused }) => (
							<TabIcon name="Услуги" color={color} focused={focused}>
								<MaterialIcons name="list-alt" size={24} color={color} />
							</TabIcon>
						),
					}}
				/>
				<Tabs.Screen
					name="logout"
					options={{
						title: 'Выйти',
						tabBarIcon: ({ color, focused }) => (
							<TabIcon name="Выйти" color={color} focused={focused}>
								<SimpleLineIcons name="logout" size={24} color={color} />
							</TabIcon>
						),
					}}
				/>
			</Tabs>
		</>
	);
};

export default TabsLayout;

const styles = StyleSheet.create({
	container__item: {
		// flex: 1,
		position: 'relative',
		top: 20,
		width: 80,
		gap: Gaps.g8,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
