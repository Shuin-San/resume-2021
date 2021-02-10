import { Grid, Typography, Link, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as data from "../data/personalData";

// Layout Components
import Hero from "../layout/Hero";
import InfoCareer from "../layout/InfoCareer";
// import InfoProjects from "../layout/InfoProjects";
import InfoSkillSet from "../layout/InfoSkillSet";

const useStyles = makeStyles((theme) => ({
	shortIntro: {
		textAlign: "center",
		paddingTop: 50,
	},
	secondHalf: {
		marginTop: 25,
		color: theme.palette.text.secondary,
		textAlign: "center",
		backgroundColor: theme.palette.background.secondary,
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
			<Container maxWidth="xl">
				<Grid
					container
					direction="row"
					className={classes.secondHalf}
					spacing={6}
					alignContent="center"
					justify="space-evenly"
				>
					<InfoSkillSet skillSet={data.keySkills} />

					<InfoCareer data={data.career} />
					{/* <InfoProjects data={data.projects} /> */}
				</Grid>
			</Container>
		</Grid>
	);
}
