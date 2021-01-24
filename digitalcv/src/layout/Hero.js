import { Typography, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	logo: {
		textAlign: "center",
		textTransform: "uppercase",
	},
	heroCard: {
		backgroundColor: "#f2f2f2",
		zIndex: -1,
		minHeight: 150,
		borderStyle: "solid",
		borderWidth: "1px",
		borderColor: "#c1c1c1",
	},
	year: {
		position: "relative",
		padding: "5px 10px 5px",
		top: -15,
		right: -20,
		minWidth: 70,
		color: "#f2f2f2",
		backgroundColor: "#363636",
		width: 50,
		fontWeight: 800,
	},
}));

export default function Hero() {
	const classes = useStyles();
	const currentYear = new Date().getFullYear();

	return (
		<Grid
			container
			direction="row"
			alignItems="center"
			justify="center"
			style={{ minHeight: 100 }}
		>
			<Grid className={classes.logo} item xs={6}>
				<div className={classes.heroCard}>
					<div className={classes.year}>{currentYear}</div>
					<Typography variant="h1" component="h1">
						VASILEIOS ZALIMIDIS
					</Typography>
					<hr style={{ width: 50 }} />
					<Typography variant="h2" component="h2">
						Front End Web Developer
					</Typography>
				</div>
			</Grid>
		</Grid>
	);
}
