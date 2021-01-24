import Hero from "../layout/Hero";
import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { footerLinks } from "../data/footerLinks";

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
	console.log(footerLinks);
	return (
		<Grid
			container
			justify="space-around"
			alignItems="center"
			direction="row"
			className={classes.footer}
		>
			{footerLinks.map(({ name, icon, link }) => {
				return (
					<Grid
						key={name}
						item
						xs={"auto"}
						md={"auto"}
						className={classes.footerItem}
					>
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
		</Grid>
	);
}
