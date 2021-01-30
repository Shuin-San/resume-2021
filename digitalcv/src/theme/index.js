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
			caption: {
				fontSize: 12,
				fontWeight: 200,
				fontFamily: "'Lato', sans-serif",
				fontColor: "#999999",
				fontStyle: "italic",
			},
		},
		MuiCard: {
			root: {
				padding: 10,
				fontFamily: "Lato",
				backgroundColor: "#3A3A3A",
				color: "#F3F3F3",
			},
		},
		MuiButton: {
			root: {
				color: "#F3F3F3",
				marginLeft: 5,
			},
			outlined: {
				borderColor: "#F3F3F3",
				borderRadius: 5,
			},
			sizeSmall: {
				fontFamily: "Lato",
				fontWeight: 700,
				fontSize: 10,
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
			secondary: "#F3F3F3",
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
