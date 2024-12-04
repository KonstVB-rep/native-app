import { Colors } from '@/shared/constants/styles-system';
import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const EyeOpenedIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		stroke={Colors.gray}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		{...props}
	>
		<Path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
		<Circle cx={12} cy={12} r={3} />
	</Svg>
);

const EyeClosedIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		stroke={Colors.gray}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		{...props}
	>
		<Path d="m15 18-.722-3.25M2 8a10.645 10.645 0 0 0 20 0M20 15l-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25" />
	</Svg>
);

const MenuIcons = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		// stroke={Colors.gray}
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		{...props}
	>
		<Path d="M15 12H3M17 18H3M21 6H3" />
	</Svg>
);
export const Icons = {
	eyeOpened: EyeOpenedIcon,
	eyeClosed: EyeClosedIcon,
	menu: MenuIcons,
};
