import { Paper, Chip, Grid, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		listStyle: "none",
		padding: theme.spacing(0.5),
		margin: 0,
	},
	chip: {
		margin: theme.spacing(0.5),
	},
	infoTitle: {
		color: theme.palette.text.secondary,
		fontSize: 20,
	},
	infoContent: {
		marginTop: theme.spacing(2),
		textAlign: "left",
		color: theme.palette.text.secondary,
	},
}));
export default function InfoSkillSet({ skillSet }) {
	console.log(skillSet);
	const classes = useStyles();
	return (
		<Grid item xs={12} md={12} lg={12}>
			{skillSet &&
				skillSet.category.map(({ name, skills }, index) => {
					return (
						<Card variant="outlined" key={index}>
							<Typography
								variant="h1"
								component="h1"
								className={classes.infoTitle}
							>
								{name}
							</Typography>
							{skills.map(({ id, skillName }) => {
								return skillName;
							})}
						</Card>
					);
				})}
		</Grid>
	);
}
