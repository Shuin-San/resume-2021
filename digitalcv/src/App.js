import { Container, Grid } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import * as theme from "./theme/index";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

function App() {
	return (
		<MuiThemeProvider theme={theme.themeLight}>
			<CssBaseline />
			<Container maxWidth="xl" disableGutters>
				<Grid container direction="row">
					<Grid item xs={12}>
						<Header />
					</Grid>
					<Grid item xs={12}>
						<Router>
							<Content />
						</Router>
					</Grid>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 30 }}>
					<Footer />
				</Grid>
			</Container>
		</MuiThemeProvider>
	);
}

export default App;
