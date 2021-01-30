import Hero from "../layout/Hero";
import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { footerLinks } from "../data/footerLinks";

const useStyles = makeStyles((theme) => ({
	footer: {
		marginTop: 0,
		backgroundColor: theme.palette.primary,
	},
	footerItem: {
		textAlign: "center",
		fontColor: theme.palette.text.secondary,
	},
}));
export default function Footer() {
	const classes = useStyles();
	return (
		<Grid container justify="center" alignItems="center" direction="row">
			{footerLinks.map(({ name, icon, link }) => {
				return (
					<Grid key={name} item xs={4} md={1} className={classes.footerItem}>
						<Link
							href={link}
							target="_blank"
							underline="none"
							color="textPrimary"
						>
							{name}
						</Link>
					</Grid>
				);
			})}
			<Grid xs={12} md={9} style={{ textAlign: "right" }}>
				Created with ❤️ in Belgium
			</Grid>
		</Grid>
	);
}
