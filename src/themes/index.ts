import {extendTheme, ThemeConfig} from "@chakra-ui/react";

const colors = {
	primary: {
		50: '#F2EAFF',
		100: '#D2C4F2',
		200: '#B39EE3',
		300: '#9577D6',
		400: '#7650C9',
		500: '#5D36AF',
		600: '#482A89',
		700: '#341D63',
		800: '#1F113D',
		900: '#1F113D'
	},
	white: '#FFFFFF',
	secondary: {
		50: '#FFF1E4',
		100: '#ECD8C5',
		200: '#DBC0A3',
		300: '#CBA780',
		400: '#BC8D5D',
		500: '#A27443',
		600: '#7F5A34',
		700: '#5C4024',
		800: '#372713',
		900: '#180C00'
	},
	black: '#000000',
};

const fonts = {
	bodyDefault: {
		fs: '16px',
		fw: 400,
	},
	bodySmall: {
		fs: '14px',
		fw: 400,
	},
	bodyLarge: {
		fs: '18px',
		fw: 400,
	},
	h1: {
		fs: '36px',
		fw: 600,
	},
	h2: {
		fs: '32px',
		fw: 600,
	},
	h3: {
		fs: '24px',
		fw: 600,
	},
	h4: {
		fs: '18px',
		fw: 600,
	},
	h5: {
		fs: '16px',
		fw: 600,
	},
	h6: {
		fs: '14px',
		fw: 600,
	},
	bodyExtraLarge: {
		fs: '24px',
		fw: 400,
	},
	bodyDefaultBold: {
		fs: '16px',
		fw: 600,
	},
	bodyLargeBold: {
		fs: '18px',
		fw: 600,
	},
	bodySmallBold: {
		fs: '14px',
		fw: 600,
	},
	bodyTiny: {
		fs: '12px',
		fw: 400,
	},
	bodyExtraLargeBold: {
		fs: '24px',
		fw: 700,
	},
	bodyTinyBold: {
		fs: '12px',
		fw: 700,
	},
	display1: {
		fs: '62px',
		fw: 600,
	},
	display2: {
		fs: '56px',
		fw: 600,
	},
	display3: {
		fs: '52px',
		fw: 600,
	},
	display4: {
		fs: '46px',
		fw: 600,
	},
	display5: {
		fs: '40px',
		fw: 600,
	},
	display6: {
		fs: '34px',
		fw: 600,
	},
}

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: false,
}

const chakraTheme = extendTheme({
	config,
	colors,
	fonts: {
		heading: `'Sogoe UI', sans-serif`,
		body: `'Sogoe UI', sans-serif`,
		mono: `'Sogoe UI', sans-serif`,
	},
	components: {
		Text: {
			baseStyle: {
				fontSize: fonts.bodyDefault.fs,
				fontWeight: fonts.bodyDefault.fw,
			},
			variants: {
				'body-default': {
					fontSize: fonts.bodyDefault.fs,
					fontWeight: fonts.bodyDefault.fw,
				},
				'body-small': {
					fontSize: fonts.bodySmall.fs,
					fontWeight: fonts.bodySmall.fw,
				},
				'body-large': {
					fontSize: fonts.bodyLarge.fs,
					fontWeight: fonts.bodyLarge.fw,
				},
				'h1': {
					fontSize: fonts.h1.fs,
					fontWeight: fonts.h1.fw,
				},
				'h2': {
					fontSize: fonts.h2.fs,
					fontWeight: fonts.h2.fw,
				},
				'h3': {
					fontSize: fonts.h3.fs,
					fontWeight: fonts.h3.fw,
				},
				'h4': {
					fontSize: fonts.h4.fs,
					fontWeight: fonts.h4.fw,
				},
				'h5': {
					fontSize: fonts.h5.fs,
					fontWeight: fonts.h5.fw,
				},
				'h6': {
					fontSize: fonts.h6.fs,
					fontWeight: fonts.h6.fw,
				},
				'body-extra-large': {
					fontSize: fonts.bodyExtraLarge.fs,
					fontWeight: fonts.bodyExtraLarge.fw,
				},
				'body-default-bold': {
					fontSize: fonts.bodyDefaultBold.fs,
					fontWeight: fonts.bodyDefaultBold.fw,
				},
				'body-large-bold': {
					fontSize: fonts.bodyLargeBold.fs,
					fontWeight: fonts.bodyLargeBold.fw,
				},
				'body-small-bold': {
					fontSize: fonts.bodySmallBold.fs,
					fontWeight: fonts.bodySmallBold.fw,
				},
				'body-tiny': {
					fontSize: fonts.bodyTiny.fs,
					fontWeight: fonts.bodyTiny.fw,
				},
				'body-extra-large-bold': {
					fontSize: fonts.bodyExtraLargeBold.fs,
					fontWeight: fonts.bodyExtraLargeBold.fw,
				},
				'body-tiny-bold': {
					fontSize: fonts.bodyTinyBold.fs,
					fontWeight: fonts.bodyTinyBold.fw,
				},
				'display1': {
					fontSize: fonts.display1.fs,
					fontWeight: fonts.display1.fw,
				},
				'display2': {
					fontSize: fonts.display2.fs,
					fontWeight: fonts.display2.fw,
				},
				'display3': {
					fontSize: fonts.display3.fs,
					fontWeight: fonts.display3.fw,
				},
				'display4': {
					fontSize: fonts.display4.fs,
					fontWeight: fonts.display4.fw,
				},
				'display5': {
					fontSize: fonts.display5.fs,
					fontWeight: fonts.display5.fw,
				},
				'display6': {
					fontSize: fonts.display6.fs,
					fontWeight: fonts.display6.fw,
				},
			}
		},
	}
})

const theme = {
	colors,
	fonts,
};

export {chakraTheme};

export default theme;