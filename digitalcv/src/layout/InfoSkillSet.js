import { Paper, Chip } from "@material-ui/core";
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
}));
export default function InfoSkillSet({ skillSet }) {
	console.log(skillSet);
	const classes = useStyles();
	return (
		skillSet &&
		skillSet.category.map(({ name, skills }) => {
			return (
				<Paper component="ul" className={classes.root}>
					{skills.map(({ id, skillName }) => {
						return (
							<li key={id}>
								<Chip label={skillName} className={classes.chip} size="small" />
							</li>
						);
					})}
				</Paper>
			);
		})
	);
}
