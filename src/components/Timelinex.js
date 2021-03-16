import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: "6px 16px",
	},
}));

export default function AlternateTimeline() {
	const classes = useStyles();

	return (
		<Timeline align='alternate'>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color='#cd0000' />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant='h6' component='p'>
							2005
						</Typography>
						<Typography>Eat</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color='primary' />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>Code</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color='#cd0000' />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>Sleep</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color='#cd0000' />
				</TimelineSeparator>
				<TimelineContent>Repeat</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
