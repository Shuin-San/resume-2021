import Hero from "../layout/Hero";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as footerLink from "../data/footerLinks";

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.primary,
		margin: 10,
	},
	footerItem: {
		textAlign: "center",
	},
}));
export default function Footer() {
	const classes = useStyles();
	return (
		<Grid
			container
			justify="space-around"
			alignItems="center"
			direction="row"
			className={classes.footer}
		>
			<Grid item xs={12} md={"auto"} className={classes.footerItem}>
				TEST
			</Grid>
		</Grid>
	);
}
