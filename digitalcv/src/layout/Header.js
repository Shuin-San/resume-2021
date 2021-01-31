import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logoDark from "../theme/assets/logo.svg";

const useStyles = makeStyles((theme) => ({
	logo: {
		textAlign: "center",
		textTransform: "uppercase",
	},
	logoImage: {
		height: 50,
	},
}));

export default function Header() {
	const classes = useStyles();

	return (
		<Grid
			container
			direction="row"
			alignItems="center"
			justify="center"
			style={{ minHeight: 100 }}
		>
			<Grid className={classes.logo} item xs={12}>
				<Typography variant="h1" component="h1">
					<img
						src={logoDark}
						className={classes.logoImage}
						alt="Vasileios Zalimidis logo"
					/>
				</Typography>
			</Grid>
		</Grid>
	);
}
