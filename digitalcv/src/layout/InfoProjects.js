import {
	Grid,
	Typography,
	Card,
	CardContent,
	CardActions,
	Button,
	Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
	console.log(theme);
	return {
		infoTitle: {
			color: theme.palette.text.secondary,
			fontSize: 20,
		},
		infoContent: {
			marginTop: theme.spacing(2),
			textAlign: "left",
			color: theme.palette.text.secondary,
		},
	};
});
export default function InfoProjects({ data }) {
	const classes = useStyles();
	return (
		<Grid item md={12} lg={6}>
			<Card variant="outlined" className={classes.infoTitle}>
				<Typography variant="h1" component="h1" className={classes.infoTitle}>
					{data.title.toUpperCase()}
				</Typography>
			</Card>
			{data.projectList.map(({ id, title, description, link }) => (
				<Card key={id} variant="outlined" className={classes.infoContent}>
					<CardContent>
						<Grid container direction="row">
							<Grid item xs={12} lg={6}>
								<Typography color="textSecondary" gutterBottom>
									{title}
								</Typography>
							</Grid>
							<Grid item xs={12} lg={6}>
								<Typography variand="body1" component="span">
									{description}
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
					<hr />
					<CardActions>
						<Link to={link}>
							<Button variant="outlined" size="small">
								Read More
							</Button>
						</Link>
					</CardActions>
				</Card>
			))}
		</Grid>
	);
}
