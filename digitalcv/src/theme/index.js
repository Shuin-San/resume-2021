import { createMuiTheme } from "@material-ui/core/styles";

export const themeLight = createMuiTheme({
	overrides: {
		MuiTypography: {
			h1: {
				fontSize: 30,
				fontWeight: 800,
				fontFamily: "'Lato', sans-serif",
				color: "#2D2D2D",
			},
			h2: {
				fontSize: 20,
				fontWeight: 800,
				fontFamily: "Roboto",
				color: "#2d2d2d",
			},
			body1: {
				fontSize: 15,
				fontWeight: 500,
				fontFamily: "'Lato', sans-serif",
			},
		},
	},
	palette: {
		background: {
			default: "#F2F2F2",
			secondary: "#2D2D2D",
		},
		text: {
			primary: "#2D2D2D",
			secondary: "#f3f3f3",
		},
	},
});

export const themeDark = createMuiTheme({
	palette: {
		background: {
			default: "#222222",
		},
		text: {
			primary: "#ffffff",
		},
	},
});
