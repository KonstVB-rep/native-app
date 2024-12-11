import React from 'react';
import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontFamily, Gaps } from '@/shared/constants/styles-system';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

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
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: Colors.linkColor,
				tabBarInactiveTintColor: Colors.gray,
				headerStyle: {
					backgroundColor: Colors.primaryLight,
					borderColor: Colors.transparent,
					borderBottomColor: Colors.primaryLighter,
				},
				headerShown: true,
				headerTitleStyle: { color: Colors.secondary },
				headerTitleAlign: 'center',
				sceneStyle: { backgroundColor: Colors.primaryLight },
				tabBarStyle: {
					backgroundColor: Colors.primary,
					borderTopWidth: 0,
					borderTopColor: Colors.primary,
					height: 84,
					justifyContent: 'center',
					alignContent: 'center',
					paddingTop: 20,
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
	);
};

export default TabsLayout;

const styles = StyleSheet.create({
	container__item: {
		width: 80,
		gap: Gaps.g8,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
