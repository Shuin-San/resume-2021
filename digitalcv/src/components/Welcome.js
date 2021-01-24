import Hero from "../layout/Hero";
import { Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	shortIntro: {
		textAlign: "center",
		paddingTop: 50,
	},
}));

export default function Welcome() {
	const classes = useStyles();
	return (
		<Grid container direction="row" justify="center" alignItems="center">
			<Grid item xs={12}>
				<Hero />
			</Grid>
			<Grid item xs={8} className={classes.shortIntro}>
				<Typography variant="body1" component="p">
					Hello, my name is Vasili and I'm a Front-End developer with 5 years of
					expertise in Javascript/ES6/ES2018, React JS and Redux areas
				</Typography>
				<Typography variant="body1" component="p">
					Currently dipping my toes in AWS Cloud, Back-end Development and
					JAMStack.
				</Typography>
				<Typography variant="subtitle1" component="p" style={{ marginTop: 50 }}>
					Send me an{" "}
					<Link
						color="textPrimary"
						href="mailto:hello@zalimidis.dev?subject=Contact request"
					>
						email
					</Link>{" "}
					or contact me via{" "}
					<Link
						color="textPrimary"
						href="https://www.linkedin.com/in/vasileioszalimidis/"
						target="_blank"
					>
						LinkedIn
					</Link>
				</Typography>
			</Grid>
		</Grid>
	);
}
