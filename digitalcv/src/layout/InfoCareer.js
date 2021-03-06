import {
	Grid,
	Typography,
	Card,
	CardContent,
	CardActions,
	Button,
	Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
	return {
		infoTitle: {
			color: theme.palette.text.secondary,
			fontSize: 20,
		},
		infoContent: {
			marginTop: theme.spacing(2),
			textAlign: "left",
			color: theme.palette.text.secondary,
			minHeight: "100%",
		},
		infoSkills: {
			marginTop: "auto",
		},
	};
});
export default function InfoCareer({ data }) {
	const classes = useStyles();
	return (
		<Grid item md={12} lg={12}>
			<Card variant="outlined" className={classes.infoTitle}>
				<Typography variant="h1" component="h1" className={classes.infoTitle}>
					{data.title.toUpperCase()}
				</Typography>
			</Card>
			<Grid container spacing={3}>
				{data.data.map(
					(
						{
							employer,
							position,
							dateStart,
							dateEnd,
							location,
							jobDescription,
							toolset,
						},
						index
					) => (
						<Grid item xs={12} md={6}>
							<Card
								key={index}
								variant="outlined"
								className={classes.infoContent}
							>
								<CardContent>
									<Grid container direction="row" justify="space-between">
										<Grid item xs={12} lg={5}>
											<Grid item xs={12} lg={6}>
												<Typography color="textSecondary" gutterBottom>
													{employer}
												</Typography>
											</Grid>
											<Grid item xs={12} lg={6}>
												<Typography variant="body2" component="p">
													{position}
												</Typography>
											</Grid>
											<Grid item xs={12} lg={6}>
												<Typography variant="caption" component="p">
													{location}
												</Typography>
											</Grid>
											<Grid item xs={12} lg={6}>
												<Typography variant="caption" component="p">
													{dateStart}-{dateEnd}
												</Typography>
											</Grid>
										</Grid>
										<Grid item xs={12} lg={7}>
											<Typography variand="body1" component="span">
												<ul>
													{jobDescription.map((row, index) => (
														<li key={index}>{row}</li>
													))}
												</ul>
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
								<CardActions className={classes.infoSkills}>
									<Grid
										container
										direction="row"
										alignItems="center"
										justify="center"
										spacing={1}
									>
										{toolset.map((tool, index) => {
											return (
												<Grid key={index} item>
													<Chip label={tool} size="small" variant="outlined" />
												</Grid>
											);
										})}
									</Grid>
								</CardActions>
							</Card>
						</Grid>
					)
				)}
			</Grid>
		</Grid>
	);
}
