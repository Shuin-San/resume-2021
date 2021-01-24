import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	logo: {
		textAlign: "center",
		textTransform: "uppercase",
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
					logoplaceholder
				</Typography>
			</Grid>
		</Grid>
	);
}
